import React from 'react'
import TaskCard from './TaskCard'
import './taskmanager.css'
const TaskManager = () => {
    const custData= [
       {
        Phone:"70000",
        Status:true
       },
       {
        Phone:"70000",
        Status:false
       },
       {
        Phone:"70000",
        Status:true
       },
       {
        Phone:"70000",
        Status:false
       },
       {
        Phone:"70000",
        Status:true
       }
       
      
    ]

    
  return (
    <>
      <div className="main-card">
         {
          custData.map((e)=>{
            return <TaskCard phone={e.Phone} status={e.Status} />
          })
         }
      </div>
    </>
  )
}

export default TaskManager
