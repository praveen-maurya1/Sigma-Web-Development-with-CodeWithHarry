import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'

//npm i react-router-dom


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
