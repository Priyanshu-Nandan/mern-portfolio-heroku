import React, { useState } from 'react'

import SectionTitle from '../../Components/Section/SectionTitle';
import { useSelector } from 'react-redux';
function Courses() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData } = useSelector(state => state.root);
    const { courses } = portfolioData;
    return (
        <div key="courses">
            <SectionTitle title="Courses" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-8 border-l-2 border-[#7ef1c5] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((course, index) => {
                        return <div
                            key={`course_${index}`}
                            onClick={() => {
                                setSelectedItemIndex(index)
                            }}
                            className='cursor-pointer'>
                            <h1 className={`text-l px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1b9e938a] rounded py-3 w-[170px]' : 'text-white w-[170px]'}`}>{course.title}</h1>
                        </div>

                    })
                    }
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>

                    <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl'>{courses[selectedItemIndex].title}</h1>
                        <p className='text-white'>{courses[selectedItemIndex].description}</p>
                    </div>
                    <a href={courses[selectedItemIndex].image} target='_blank' rel="noreferrer">
                        <img src={courses[selectedItemIndex].image} alt="img" className='sm:w-3/4 sm-w-full' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Courses