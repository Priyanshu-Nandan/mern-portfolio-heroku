import React from 'react'

function Sider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
        <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row'>
              <a href='https://www.linkedin.com/in/priyanshunandan/'>
              <i class="ri-linkedin-line text-gray-300 text-xl">
              </i>
              </a>
            
            <i class="ri-github-fill text-gray-300 text-xl"></i>
            <i class="ri-mail-line text-gray-300 text-xl"></i>
            <i class="ri-instagram-line text-gray-300 text-xl"></i>
            <i class="ri-facebook-line text-gray-300 text-xl"></i>
        </div>
        <div className='w-[1px] h-52 bg-[#2898a08f] sm:hidden'>

        </div>

        </div>
    </div>
  )
}

export default Sider