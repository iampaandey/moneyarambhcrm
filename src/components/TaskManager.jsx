import React, { useState } from 'react'
import TaskCard from './TaskCard'
import './taskmanager.css'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { toast } from "react-toastify"
import { addTag, getLead } from './redux/features/userSlice'
import loader from "../images/79.gif"
import Loader from './Loader'
import { useHistory } from 'react-router-dom'

const TaskManager = () => {
  const dispatch =useDispatch();
  const [data,setData]=useState();
  const [fg,setFg]=useState(false);
  const [rem,setRem]=useState([]);
  const [flag,setFlag]=useState(false);
  const {plead,loading}=useSelector((state)=>({...state.user}))
const history=useHistory()

  const handleTag=(tag,phone)=>{

    setFlag(true)
    const formData={
      tag:tag,
      phone:phone,
      email:JSON.parse(localStorage.getItem("user")).email
    }
  dispatch(addTag({formData,toast}))
  if(sessionStorage.getItem("leads")!==null){
  const pdt=JSON.parse(sessionStorage.getItem("leads"));
 setRem(pdt?.filter((e)=>{
    return e?.phone!==phone
  }))
  console.log(rem)
  

  }

  }
  useEffect(()=>{
    if(flag &&plead!==null)
    {
      rem?.push(plead)
      setRem(rem)
  sessionStorage.setItem("leads",JSON.stringify(rem))
  setData(rem);
    }
  },[plead])
  useEffect(()=>{
    const dt = sessionStorage.getItem("leads")
    console.log(dt)
    if(dt===null ){
      console.log("hey")
      const email=JSON?.parse(localStorage.getItem("user"))?.email;
     const formData={
      email:email
     }
     dispatch(getLead({formData,toast}));
    }

     setData(JSON.parse(sessionStorage.getItem("leads")))
     if(localStorage.getItem("user")===null)
     {
      history.push('/login')
     }
    },[])
    const {lead}=useSelector((state)=>({...state.user}))
    useEffect(()=>{
      if(lead!==null && !fg)
      setData(lead)
    },[lead])
    const handleDelete=(phone)=>{
      const obj = data?.filter((e)=>{
        return e.phone!==phone
      })
      setData(obj)
    
      
  }
  
    useEffect(()=>{
      console.log(data)
      if(data?.length===4 && !fg)
    {
      setFg(true)
      console.log("hey2")
      const email=JSON?.parse(localStorage.getItem("user")).email;
     const formData={
      email:email
     }
     dispatch(getLead({formData,toast}));
    }
    else if(data?.length===0)
    {
      console.log("heyy")
      console.log(JSON.parse(sessionStorage.getItem("leads")))
      setData(JSON.parse(sessionStorage.getItem("leads")))
      setFg(false);
    }
    },[data,dispatch])


    
  return (
    <div className='mainn-card'>
        
         { loading===true && !fg? <Loader/> :
         <> {
          data?.map((e)=>{
            return <TaskCard flag={true} handleTag={handleTag} tags={e?.tags} date={e?.date} handleDelete={handleDelete} phone={e?.phone} status={e?.Status}  />
          })
         }
         </>
}        
    </div>
  )
}

export default TaskManager
