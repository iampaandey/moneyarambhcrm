import React from 'react'
import TaskCard from './TaskCard'
import './taskmanager.css'
import { MDBRow } from 'mdb-react-ui-kit'
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
    <div className='main-card'>

         {
          custData.map((e,index)=>{
            return <TaskCard phone={e.Phone} status={e.Status} count={index+1} />
          })
         }
    </div>
  )
}

export default TaskManager
