import React from 'react'
import about from '../About'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div>
        <img className='px-8 mt-20' src="https://preview.colorlib.com/theme/amado/img/core-img/logo.png" alt="Footer Logo" />
      </div>
      <div className='flex justify-between py-2'>
        <p className='text-sm px-7'>Copyright ©2025 All rights reserved | This template is made</p>
        <div className='flex gap-4 px-10'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </div>
      </div>
    </>
  )
}

export default Footer