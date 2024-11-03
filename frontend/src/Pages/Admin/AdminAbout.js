import React from 'react'
import { Form, Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const tempSkills = values.skills.split(',');
    values.skills = tempSkills;
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/update-about', {
        ...values,
        _id: portfolioData.about._id
      })
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

  return (
    <div key="adminABout" className='w-3/4'>
      <Form onFinish={onFinish} layout='vertical' initialValues={{
        ...portfolioData.about,
        skills: portfolioData.about.skills.join(' , ')
      }}>
        <Form.Item name="userImgUrl" label="Add a profile image URL">
          <Input placeholder='Enter Image URL' />
        </Form.Item>
        <Form.Item name="description1" label="Add description">
          <TextArea placeholder='Add description' />
        </Form.Item>
        <Form.Item name="description2" label="Add description">
          <TextArea placeholder='Add description' />
        </Form.Item>
        <Form.Item name="skills" label="Add a skill">
          <TextArea placeholder='Add a skill' />
        </Form.Item>
        <div className='flex justify-start w-full'>
          <button className='px-6 py-2 bg-primary text-white' type='submit'> Save </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout;