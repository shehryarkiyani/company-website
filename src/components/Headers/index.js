import React from 'react'
import logo from "../../assets/images/MyLogo.png"
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div className='bg-[white] shadow-lg w-full fixed  z-[20] top-0'>
    <div className='pt-2 pl-2 pr-2 w-full max-w-7xl mx-auto flex justify-between items-center  '>
      <div className='h-[78px]'>
      <img src={logo} className='w-[100%] h-[100%]' alt='logo'/>
      </div>
        <div className='flex gap-5'>
        <Link to="/" >About</Link>
        <Link to="/">Service</Link>
        <Link to="/">Contact</Link>
        </div>
    </div>
    </div>
  )
}

