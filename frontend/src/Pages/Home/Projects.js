import React, { useState } from 'react'
import SectionTitle from '../../Components/Section/SectionTitle'
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    const { portfolioData } = useSelector(state => state.root);
    const { projects } = portfolioData;
    return (
        <div key="projects">
            <SectionTitle title="Projects" />
            {console.log(projects   )}

            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-8 border-l-2 border-[#7ef1c5] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => {
                        return <div
                            key={`project_${index}`}
                            onClick={() => {
                                setSelectedItemIndex(index)
                            }}
                            className='cursor-pointer'>
                            <h1 className={`text-l px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1b9e938a] rounded py-3' : 'text-white'}`}>{project.title}</h1>
                        </div>

                    })
                    }
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    {/* <img src={projectPic} alt="img" className='h-2/4 w-6/12 sm:w-3/4 sm-w-full' /> */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>
                        <p className='text-white'>{projects[selectedItemIndex].description}</p>
                        <p className='text-white'>
                            <a href={projects[selectedItemIndex].link} target='_blank' rel="noreferrer"> Click here to view this project</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects