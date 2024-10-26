import { Form, Input, Modal, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminExperience() {
  const { portfolioData } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const { experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add")
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;

      if (selectedItemForEdit) {
        response = await axios.post('/api/portfolio/update-experience',  {
          ...values,
          _id:selectedItemForEdit._id
        });
      } else {
        response = await axios.post('/api/portfolio/add-experience',  values)
      } 
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true)); 
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      // console.log(error);
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response =  await axios.post("/api/portfolio/delete-experience", {
        _id:item._id
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
        dispatch(HideLoading());
      } else {
        dispatch(HideLoading());
        message.error(response.data.message)
        dispatch(ReloadData(true));
      }

    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message)
      dispatch(ReloadData(true));
    }
  }
  return (
    <div>

      <div className='flex justify-end'>
        <button className='bg-primary px-5 py-2 text-white'
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
            setType("Add")
          }}>
          Add Experience
        </button>
      </div>

      <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
        {experiences.map((experience) => {
          return <div className="border shadow p-5 border-gray-400 flex flex-col gap-2 mt-5">
            <h1 className='text-primary text-xl font-bold'>{experience.period}</h1>
            <hr />
            <h1>Company: {experience.company}</h1>
            <h1>Role: {experience.title}</h1>
            <h1>{experience.description}</h1>

            <div className='flex justify-end gap-5'>
              <button className='bg-red-500 text-white px-5 py-2' onClick={() => {
                onDelete(experience)
              }}>Delete</button>
              <button className='bg-primary text-white px-5 py-2'
              onClick={()=> {
                setSelectedItemForEdit(experience);
                setShowAddEditModal(true);
                setType("Edit")
              }}> Edit</button>
            </div>

          </div>
        })}
      </div>

      {
        (type === 'Add' || selectedItemForEdit) &&  <Modal open={showAddEditModal}
        title={selectedItemForEdit ? "Edit experience" : "Add Experience"}
        footer={false}
        onCancel={() => {
          setShowAddEditModal(false)
          setSelectedItemForEdit(null)
          setType("")
        }}
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit}>
          <Form.Item name="period" label="Period">
            <Input placeholder='Enter period' />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <Input placeholder='Add a company' />
          </Form.Item>
          <Form.Item name="title" label="Role">
            <Input placeholder='Add a role' />
          </Form.Item>
          <Form.Item name="description" label="Add description">
            <TextArea placeholder='Add description' />
          </Form.Item>
          <div className='flex justify-end w-full gap-5'>
            <button className='border-primary text-primary'
              onClick={() => {
                setShowAddEditModal(false)
                setSelectedItemForEdit(null)
                setType("")
              }}>
              Cancel
            </button>
            <button className='px-5 py-2 bg-primary text-white' type='submit' >
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
      }
     
    </div>
  )
}

export default AdminExperience