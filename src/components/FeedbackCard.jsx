import React from 'react'
import './feedbackcard.css'
const FeedbackCard = ({name,date,feed}) => {
  return (
    <>
    <div className="main-feed">
     <h5>{name}</h5> 
     <span>{date}</span>
     <p className='para'>{feed}</p>
     </div>
    </>
  )
}

export default FeedbackCard
