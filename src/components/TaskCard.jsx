import React from 'react'
import './taskcard.css'
const TaskCard = ({phone,status}) => {

  return (
    <>
      <div className='card'>
        <div><h3>Phone No: </h3></div>
        <div>{phone}</div>
        <div><h3>Status :</h3></div>
        <div className={` ${status=== true ? "btn green" :"btn"}` } >Picked</div>
        <div className={`${status ===false ?"btn red":"btn"}` }>Not Picked</div>
      </div>
    </>
  )
}

export default TaskCard
