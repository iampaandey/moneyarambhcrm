import React, { useState } from 'react'
import './userbox.css'
import {BsChevronDown, BsChevronUp, BsBoxArrowInRight} from 'react-icons/bs'
const UserBox = () => {
  const [arrow, setArrow] = useState(true);
  return (
    <>
        <div className="userbox">
            <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik " alt="" />
            <span className='username' onClick={()=>{setArrow(!arrow)}}>Raghav </span> <span className='arrow' onClick={()=>{setArrow(!arrow)}}>{arrow ? <BsChevronDown/>:<BsChevronUp/>}</span>
            
        </div>{
        !arrow&&<div className='user-op'>
              <span>Log Out <span className='log'><BsBoxArrowInRight/></span>
              </span>
              
            </div>}
    </>
  )
}

export default UserBox