import React from 'react'
import resume from '../../assets/resume.pdf'

function Header() {
  return (
    <div key="commonHeader" className='fixed top-0 left-0 right-0 p-3 bg-primary flex justify-between z-50 header'>
      <h1 className='text-secondary text-4xl font-semibold'>
        <a
          href={resume} 
          download 
          className="text-white text-lg font-medium ml-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </h1>
      {/* <h1 className='text-white text-4xl font-semibold'></h1>
      <h1 className='text-[#2af5ab] text-4xl font-semibold'></h1> */}
    </div>

  )
}

export default Header;