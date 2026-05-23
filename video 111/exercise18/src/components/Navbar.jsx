import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-red-400'>
                <ul className='flex p-2 font-sans'>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>About</li>
                    <li className='p-2'>Products</li>
                    <li className='p-2'>Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
