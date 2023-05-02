import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskCard from './TaskCard'
import { toast } from "react-toastify"
import { addTag, removeFromList } from './redux/features/userSlice'
import "./list.css"
import { useHistory } from 'react-router-dom'


const List = () => {
    const {user}=useSelector((state)=>({...state.user}))
    const [data,setData]=useState();
    const history=useHistory()
    const dispatch=useDispatch()
    useEffect(()=>{
        if(localStorage.getItem("user")!==null){
            // console.log(localStorage.getItem("user"))
        setData(JSON.parse(localStorage.getItem("user")))
        }
        else{
          history.push('/login')
        }
    },[])
    useEffect(()=>{
        if(user!==null)
        setData(user)
    },[user])
    useEffect(()=>{
        console.log(data)
    },[data])
    const handleDelete=(phone)=>{
        const formData={
            email:JSON.parse(localStorage.getItem("user"))?.email,
            phone:phone
          } 
          dispatch(removeFromList({formData,toast}))
    }
    
  return (
    <div className='list'>
       
       <h2>Your List of Leads</h2>


      {
        data?.leadList?.map((e)=>{
            return <TaskCard flag={false} tags={e?.tags} date={e?.date} handleDelete={()=>{handleDelete(e?.phone)}} phone={e?.phone} status={e?.Status}  />
        })
      }
    </div>
  )
}

export default List
