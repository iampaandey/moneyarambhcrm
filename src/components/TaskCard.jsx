import React, {  useState } from 'react'
import './taskcard.css'
import {BsFillTrash3Fill} from 'react-icons/bs'
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const TaskCard = ({phone,status,count}) => {
const [flag,setFlag] = useState(status)


  return (
    <>
     
      <div className="my-card">
        <h4>Lead : {count}</h4>
        <h3 className="ph">{phone}</h3>
        <div className="my-btns">
        <MDBBtn rounded className='mx-4' color='info'>
         <Link to="leadinfo">More </Link> 
      </MDBBtn>
      <MDBBtn rounded className='mx-4' color='danger'>
          Delete
      </MDBBtn>
        </div>
      </div>
    </>
  )
}

export default TaskCard
