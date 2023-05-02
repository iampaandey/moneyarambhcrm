import React from 'react'
import worker from "../images/user.png"
import { MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
const Workercard = ({name,email,phone,pos,total}) => {
  return (
    <>
    <div className="worker-card">
        <img src={worker} alt="worker" className='wimg' />
        <h5 className="nm">{name}</h5>
        <h5 className="nm">{email}</h5>
        <h6 className="ng">{total}</h6>
        <h6 className="ps">{pos}</h6>
       <Link to={`/employee:${phone}` }><MDBBtn rounded color='danger'>Report</MDBBtn></Link>
    </div>
    </>
  )
}

export default Workercard