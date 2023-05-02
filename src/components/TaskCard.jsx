import React from 'react'
import './taskcard.css'

import {
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTag } from './redux/features/userSlice';
import { toast } from "react-toastify"

const TaskCard = ({date,phone,status,handleDelete,tags,handleTag,flag}) => {
 
  


  return (
    
    <div className="my-card">
        <div className='main-card'>
        <h3 className="ph">{phone}</h3>
        <div className="tgs">
          {

            tags?.map((e)=>{
              return <span className='tg'>{e}</span>
            })
          }
        </div>
        <h4>{date!=="0"?date:''}</h4>
        <div className="my-btns">
        <Link to={`leadinfo:${phone}`}>
        <MDBBtn rounded className='mx-4' color='info'>
         More 
      </MDBBtn>
      </Link>
      <MDBBtn rounded className='mx-4' color='danger' onClick={()=>handleDelete(phone)}>
          Delete
      </MDBBtn>
        </div>
      </div>
      {flag&&
      <div className="tags">
        <div className="chip" onClick={()=>{handleTag("npc",phone)}}>
          NPC
        </div>
        <div className="chip" onClick={()=>{handleTag("ni",phone)}}>
          NI
          </div>
      </div>
}
    </div>
  )
}

export default TaskCard
