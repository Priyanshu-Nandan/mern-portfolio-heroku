import React, { useState } from 'react'
import SectionTitle from '../../Components/Section/SectionTitle'
import { useSelector } from 'react-redux';
// import { experiences } from '../../resources/experiences';
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const {portfolioData} = useSelector(state => state.root);
  const {experiences} = portfolioData;
  return (
    <div> 
        <SectionTitle title="Experiences"/>
        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-8 border-l-2 border-[#7ef1c5] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {experiences.map((experience, index) => {
                        return <div 
                            onClick={()=>{
                                    setSelectedItemIndex(index)
                                }}
                            className='cursor-pointer'>
                            <h1 className={`text-l px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1b9e938a] rounded py-3' : 'text-white'}`}>{experience.period}</h1>
                        </div> 
                        
                    })
                }
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-xl'>{experiences[selectedItemIndex].company}</h1>
                <p className='text-white'>{experiences[selectedItemIndex].description}</p>
            </div>
        </div>
    </div>
  )
}

export default Experiences