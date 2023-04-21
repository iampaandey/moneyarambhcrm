import React from 'react'
import worker from "../images/user.png"
const Workercard = () => {
  return (
    <>
    <div className="worker-card">
        <img src={worker} alt="worker" className='wimg' />
        <h5 className="nm">Akanksha</h5>
        <h6 className="ps">346</h6>
        <h6 className="ng">21</h6>
    </div>
    </>
  )
}

export default Workercard