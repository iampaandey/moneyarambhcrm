import React from 'react'
import kashtomar from '../images/kashtomar.png'
import './dashcard.css'
const DashCard = ({title,count,imagge}) => {
  return (
    <>
      <div className="main-dashCard">
        <h6>{title}</h6>
        <img src={imagge} className='custimg' alt="kashtomar" />
        <h5>{count}</h5>
      </div>
    </>
  )
}

export default DashCard
