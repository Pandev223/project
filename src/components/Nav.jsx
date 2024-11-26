import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import './Nav.css'




function Nav() {
  // use this to add a login to the =nav bar on click
  const navigateTo = useNavigate() 

  // use this to remove the nav bar
  const path = useLocation()
  // console.log(path.pathname)
  if (path.pathname == '/Login') {
    return null
  }


  return (

    <nav>
      <div className="leftNavContainer">
        <h3>PHLOX</h3>
        <Link to={'/'} className='Links' >Home</Link>
        <Link to={'/Shop'} className='Links'>Shop</Link>
        <Link to={'/Aboutus'} className='Links'>Aboutus</Link>
        <Link to={'/Blog'} className='Links' >Blog</Link>
        <Link to={'/Contactus'} className='Links'>Contact Us</Link>
      </div>
      <div className="rightNavContainer">
        <p onClick={() => navigateTo('/Login')} >Login</p>
        <CiSearch />
        <IoBagOutline />
      </div>
    </nav>


  )
}

export default Nav
