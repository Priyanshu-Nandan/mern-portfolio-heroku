import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminExperience from './AdminExperience';
import Header from '../../Components/Header/Header';
import { useSelector } from 'react-redux';
import AdminCourses from './AdminCourses';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';

function Admin() {

    const items = [
        {
            key: '1',
            label: 'Introduction',
            children: <AdminIntro />,
        },
        {
            key: '2',
            label: 'About',
            children: <AdminAbout />,
        },
        {
            key: '3',
            label: 'Contact',
            children: <AdminContact />,
        },
        {
            key: '4',
            label: 'Experiences',
            children: <AdminExperience />,
        },
        {
            key: '5',
            label: 'Courses',
            children: <AdminCourses />,
        },
        {
            key: '6',
            label: 'Projects',
            children: <AdminProjects />,
        }
    ]
    const { portfolioData } = useSelector(state => state.root);

    useEffect(() => {
        const localData = localStorage.getItem('token');
        if (!localData) {
            window.location.href = '/admin-login';
        }
    }, [])

    return (
        <div key="admin_main_entry">
            <Header />

            {portfolioData &&
                <div className='mt-20 p-5'>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
            }
        </div>

    )
}

export default Admin