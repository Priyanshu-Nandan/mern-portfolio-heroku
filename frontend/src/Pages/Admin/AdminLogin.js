import { message } from 'antd';
import axios from 'axios'
import React from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';

function AdminLogin() {
    const dispatch = useDispatch();
    const [user, setAdmin] = React.useState({
            username: "",
            password: ""
    })

  const login = async () => {

    try {
        // dispatch(ShowLoading());
        const response = await axios.post('api/portfolio/admin-login', user);
        // dispatch(HideLoading());
        // console.log(response);
        // return;
        if (response.data.success) {
            message.success(response.data.message)
            localStorage.setItem('token', JSON.stringify(response.data));
            window.location.href = '/admin';
        } else {
            message.error(response.data.message);
        }
    } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-96 flex gap-5 p-5 shadow border border-gray flex-col'>
            <h1 className='text-2-xl'> Admin Login</h1>
            <hr />
            <input type='text' value={user.username} placeholder='Username'
                onChange={(e) => {
                    setAdmin({...user, username: e.target.value})
                }} />
            <input type='password' value={user.password} placeholder='Password'
                onChange={(e) => {
                    setAdmin({...user, password: e.target.value})
                }}/>

            <button className='bg-primary text-white' onClick={login}>
                Login
            </button>

        </div>
    </div>
  )
}

export default AdminLogin