import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div id='navigation' className='absolute min-w-full top-10'>
      <ul className='transition-all ease-in-out duration-700 text-center grid grid-flow-col bg-slate-500 bg-opacity-10 hover:bg-slate-800 hover:bg-opacity-45 mx-3 rounded-full'>
        <Link href={"#*"}
        className='transition-all ease-in-out duration-700 hover:bg-violet-600 hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Welcome
          </li>
        </Link>
        <Link href={"#webdev"}
        className='transition-all ease-in-out duration-700 hover:bg-[#744cce] hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Webdev
          </li>
        </Link>
        <Link href={"#gamedev"}
        className='transition-all ease-in-out duration-700 hover:bg-[#6c60ac] hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Gamedev
          </li>
        </Link>
        <Link href={"#contact"}
        className='transition-all ease-in-out duration-700 hover:bg-[#64748b] hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
