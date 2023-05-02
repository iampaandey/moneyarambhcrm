import React, { useEffect, useState } from 'react'
import './userbox.css'
import {BsChevronDown, BsChevronUp, BsBoxArrowInRight} from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UserBox = () => {
  const [name,setName]=useState();
  const {user,admin}=useSelector((state)=>({...state.user}))
  useEffect(()=>{
   if(localStorage.getItem("user")!==null){
    setName(JSON.parse(localStorage.getItem("user"))?.fname)
   }
   if(sessionStorage.getItem("token")!==null)
   {
    setName('Admin')
   }
   

  },[])
  useEffect(()=>{
    console.log(name)
  },[name])
  useEffect(()=>{
  if(user!==null){
    setName(user.fname);
    
  }
  if(admin)
  {
    setName('Admin')
  }
  },[user,admin])
  const history=useHistory();
  const handleLogout=()=>{
    localStorage.clear();
    sessionStorage.clear()
    setName("");
    setArrow(true);
    history.push('/login');
  }
  const [arrow, setArrow] = useState(true);
  return (
    <>
        <div className="userbox">
            <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik " alt="" />
            <span className='username' onClick={()=>{setArrow(!arrow)}}>{name}</span> <span className='arrow' onClick={()=>{setArrow(!arrow)}}>{arrow ? <BsChevronDown/>:<BsChevronUp/>}</span>
            
        </div>{
        !arrow&&<div className='user-op' id=''>
              <span onClick={()=>handleLogout()}>Log Out <span className='log'><BsBoxArrowInRight/></span>
              </span>
              
            </div>}
    </>
  )
}

export default UserBox