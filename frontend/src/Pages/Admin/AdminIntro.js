import React from 'react'
import { Form, Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
// ShowLoading
function AdminIntro() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/update-intro', {
        ...values,
        _id: portfolioData.intro._id
      })
      console.log(response);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      // console.log(error);
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

  return (
    <div key="adminIntro" className='w-3/4'>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.intro}>
        <Form.Item name="welcomeText" label="Add a Intro">
          <Input placeholder='Enter Welcome Text' />
        </Form.Item>
        <Form.Item name="firstname" label="First Name">
          <Input placeholder='Enter First Name' />
        </Form.Item>
        <Form.Item name="lastname" label="Last Name">
          <Input placeholder='Enter Last Name' />
        </Form.Item>
        <Form.Item name="caption" label="Add a Caption">
          <Input placeholder='Add a caption' />
        </Form.Item>
        <Form.Item name="description1" label="About Yourself (Part 1)">
          <TextArea placeholder='Add about yourself - part 1' />
        </Form.Item>
        <Form.Item name="description2" label="About Yourself (Part 2)">
          <TextArea placeholder='Add about yourself - part 2' />
        </Form.Item>
        <div className='flex justify-start w-full'>
          <button className='px-6 py-2 bg-primary text-white' type='submit'> Save </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro