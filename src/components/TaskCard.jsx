import React, {  useState } from 'react'
import './taskcard.css'
import {BsFillTrash3Fill} from 'react-icons/bs'
const TaskCard = ({phone,status}) => {
const [flag,setFlag] = useState(status)


  return (
    <>
      <div className='card'>
        <div><h3>Phone No: </h3></div>
        <div>{phone}</div>
        <div><h3>Status :</h3></div>
        <div className={` ${flag=== true ? "btn green" :"btn"}` }  onClick={(e)=>{setFlag(!flag)
        }}>Picked</div>
        <div className={`${flag ===false ?"btn red":"btn"}` }onClick={(e)=>{setFlag(!flag)
        }}>Not Picked</div>
        <div><BsFillTrash3Fill/></div>
      </div>
    </>
  )
}

export default TaskCard
