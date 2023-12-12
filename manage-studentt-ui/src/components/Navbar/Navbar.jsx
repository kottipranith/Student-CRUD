import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-icon">
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        <div className="nav-name">
            Student Manager
        </div>
    </div>
  )
}

export default Navbar