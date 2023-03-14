import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import admin from "../images/Admin.png"
import task from "../images/task.png"
import dashboard from "../images/dashboard.png"


const Navbar = () => {
  return (
    <>
     <div className="main-nav">
       <img src={logo} alt="logo" className='logo'/>
       <div className="options">
        <div  className='op'>
            <img src={dashboard} alt="dshlogo" className='dash nimg'/>
           <h4>Dashboard</h4> </div>
       <div className='op'>  <img src={admin} alt="adminlogo" /><h4>Admin</h4></div>
        <div className='op'><img src={task} alt="tasklogo" />   <h4>Tasks</h4></div>
       </div>
    </div>
    </>
   
  )
}

export default Navbar
