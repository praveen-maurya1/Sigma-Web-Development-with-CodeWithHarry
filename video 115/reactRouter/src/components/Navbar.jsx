import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-black text-white'>
                <ul className='flex gap-6 p-5 justify-center'>
                    <NavLink className={(e) => { return e.isActive ? "bg-red-500 p-4 rounded-xl" : "" }} to="/" ><li>Home</li ></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "bg-red-500 p-4 rounded-xl" : "" }} to="/about" ><li>About</li ></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "bg-red-500 p-4 rounded-xl" : "" }} to="/contact" ><li>Contact</li ></NavLink>
                </ul >
            </nav >
        </div >
    )
}

export default Navbar
