import { Form, Input, Modal, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminProjects() {
  const { portfolioData } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add")
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;

      if (selectedItemForEdit) {
        response = await axios.post('/api/portfolio/update-project',  {
          ...values,
          _id:selectedItemForEdit._id
        });
      } else {
        response = await axios.post('/api/portfolio/add-project',  values)
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
      const response =  await axios.post("/api/portfolio/delete-project", {
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
          Add projects
        </button>
      </div>

      <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
        {projects.map((project) => {
          return <div className="border shadow p-5 border-gray-400 flex flex-col gap-2 mt-5">
            <hr />
            <h1>Title: {project.title}</h1>
            <h1>Image: {project.image}</h1>
            <h1>Link: {project.link}</h1>
            <h1>Technologies: {project.technologies}</h1>
            <h1>{project.description}</h1>

            <div className='flex justify-end gap-5'>
              <button className='bg-red-500 text-white px-5 py-2' onClick={() => {
                onDelete(project)
              }}>Delete</button>
              <button className='bg-primary text-white px-5 py-2'
              onClick={()=> {
                setSelectedItemForEdit(project);
                setShowAddEditModal(true);
                setType("Edit")
              }}> Edit</button>
            </div>

          </div>
        })}
      </div>

      {
        (type === 'Add' || selectedItemForEdit) &&  <Modal open={showAddEditModal}
        title={selectedItemForEdit ? "Edit projects" : "Add projects"}
        footer={false}
        onCancel={() => {
          setShowAddEditModal(false)
          setSelectedItemForEdit(null)
          setType("")
        }}
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit}>
          <Form.Item name="title" label="Title">
            <Input placeholder='Enter title' />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Input placeholder='Add an image' />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <Input placeholder='Add projects link' />
          </Form.Item>
          <Form.Item name="technologies" label="Technologies">
            <Input placeholder='Add Technologies' />
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

export default AdminProjects