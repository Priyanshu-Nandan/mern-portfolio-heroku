import React from 'react'
import SectionTitle from '../../Components/Section/SectionTitle';
import { useSelector } from 'react-redux';
import profilePic from '../../assets/profilePic.jpg'

function About() {
    const { portfolioData } = useSelector(state => state.root);
    const { about } = portfolioData;
    const { skills, description1, description2 } = about;
    return (
        <div key="about">
            <SectionTitle title="About me" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-2/4 w-6/12 sm:w-3/4 sm-w-full'>
                    <img src={profilePic} alt='profile' width="400px" />
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>
                        {description1 || ''}
                    </p>
                    <p className='text-white'>
                        {description2 || ''}
                    </p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                    Here are a few technologies I've been working on..
                </h1>
                <div key="skills" className='flex flex-wrap gap-10 mt-5'>
                    {
                        skills.map((skill, index) => {
                            return <div key={`skill_${index}`} className='border border-tertiary py-3 px-10'>
                                <h1 className='text-tertiary'>
                                    {skill}
                                </h1>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default About