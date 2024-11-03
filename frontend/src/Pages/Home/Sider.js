import React from 'react'

function Sider() {
  return (
    <div key="sider" className='fixed left-0 bottom-0 px-10 sm:static'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <a href='https://www.linkedin.com/in/priyanshunandan/' target='_blank' rel='noreferrer'>
            <i className="ri-linkedin-line text-gray-300 text-xl">
            </i>
          </a>

          <a href="https://github.com/Priyanshu-Nandan" target='_blank' rel='noreferrer'>
            <i className="ri-github-fill text-gray-300 text-xl"></i>
          </a>
          <a href="mailto:priyanshun8991@gmail.com" target='_blank' rel='noreferrer'>
            <i className="ri-mail-line text-gray-300 text-xl"></i>
          </a>
          <a href="https://www.instagram.com/priyanshu_nandann/?hl=en" target='_blank' rel='noreferrer'>
            <i className="ri-instagram-line text-gray-300 text-xl"></i>
          </a>
        </div>
        <div className='w-[1px] h-52 bg-[#2898a08f] sm:hidden'>

        </div>

      </div>
    </div>
  )
}

export default Sider