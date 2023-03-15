import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import admin from "../images/Admin.png"
import task from "../images/task.png"
import dashboard from "../images/dashboard.png"
import cross from "../images/cross.png"
import  hbg from "../images/hbg.png"

const Navbar = () => {
   const showOption = ()=>{
    document.getElementById("main-nav").style.display="flex";
    // document.getElementById("main-nav").style.right="0px";
    document.getElementById("main-nav").style.transition="3s";

    // document.body.style.filter="blur(4.5px)"
   }
   const hideOptions = ()=>{
    document.getElementById("main-nav").style.display="none";

   }

  return (
    <>
    <div className="phone-nav">
      <img src={logo} alt="logophone" className='phone-logo'/>
      <img src={hbg} alt="hbgicon" className='hbgicon' onClick={()=>{showOption()}}/>
    </div>
     <div className="main-nav" id='main-nav'>
       <img src={logo} alt="logo" className='logo'/>
       <img src={cross} alt="cross" className='cross' onClick={()=>{hideOptions()}}/>
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
