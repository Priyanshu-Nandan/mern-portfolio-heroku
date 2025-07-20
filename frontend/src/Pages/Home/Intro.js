import React from 'react'
import { useSelector } from 'react-redux';
function Intro() {
  const { portfolioData } = useSelector(state => state.root);
  const { intro } = portfolioData;
  const { welcomeText, firstname, lastname, caption, description1, description2 } = intro;

  return (
    <div key="intro" className='h-[100vh] bg-primary flex flex-col items-start justify-center gap-6 py-10 mt-40'>
      <h1 className='text-white'>{welcomeText || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstname || ''} {lastname || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-white font-semibold'>{caption || ''}</h1>
      <p className='text-white w-2/3 sm:w-full'>
        {description1 || ''}
      </p>
      <p className='text-white w-2/3 sm:w-full'>
        {description2 || ''}
      </p>
      <button className='border-2 px-10 py-3 text-tertiary border-tertiary rounded mb-20'>Explore More About Me</button>
    </div>
  )
}

export default Intro
