import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-violet-950 text-white font-sans font-semibold  '>
      <ul className='flex justify-around p-2 h-[8vh] items-center'>
        <li>iTask</li>
        <div className='flex gap-2'>
          <li>Home</li>
          <li>Your Task</li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
