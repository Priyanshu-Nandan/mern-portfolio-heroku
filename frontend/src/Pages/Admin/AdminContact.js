import React from 'react'
import { Form, Input, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const {contacts} = portfolioData;
  const contact = contacts[0];
  const onFinish = async (values) => {
    
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/update-contact', {
        ...values,
        _id:portfolioData.contacts[0]._id
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
    <div className='w-3/4'>
      <Form onFinish={onFinish} layout='vertical' initialValues={contact}>
        <Form.Item name="name" label="Name">
          <Input placeholder='Enter name' />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder='Enter Email' />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Input placeholder='Enter gender' />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <Input placeholder='Enter age' />
        </Form.Item>
        <Form.Item name="mobile" label="Phone No">
          <Input placeholder='Enter number' />
        </Form.Item>
       
        <div className='flex justify-start w-full'>
          <button className='px-6 py-2 bg-primary text-white' type='submit'> Save </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminContact;