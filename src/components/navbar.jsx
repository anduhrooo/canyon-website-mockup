import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='nav'>
        <img src="/CanyonLogo.png" alt="Canyon Logo" className='nav-logo'/>
        <div>
            <Link className='nav-links' to="/">Home</Link>
            <Link className='nav-links' to ='/contracts'>Contracts</Link>
            <Link className='nav-links' to ='/careers'>Careers</Link>
            <Link className='nav-links' to ='/contact'>Contact Us</Link>
        </div>
    </div>
    </>

  )
}
