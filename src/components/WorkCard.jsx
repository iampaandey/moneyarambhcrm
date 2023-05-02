import React from 'react'

const WorkCard = ({phone,tag}) => {
  return (
    <div className='m-card'>
        <h2 className='ph'>{phone}</h2>
        <h6 className='tg'>{tag}</h6>
    </div>
  )
}

export default WorkCard
