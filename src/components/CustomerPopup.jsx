import React, { useEffect, useState } from 'react'
import './customerpopup.css'
import FeedbackCard from './FeedbackCard'
import man from "../images/man.jpg"
import { MDBBtn } from 'mdb-react-ui-kit'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"
import { addFeed, addName, addToList, getPlead, recall } from './redux/features/userSlice'
const CustomerPopup = () => {
  const params=useParams();
  const phone=params.id.slice(1);
   const [date,setDate]=useState("");
   const [name,setName]=useState("");
   const [feed,setFeed]=useState("");
  const [data,setData]=useState();
  const [leadData,setLeadData]=useState();
  const dispatch=useDispatch();
   
  const {plead}=useSelector((state)=>({...state.user}));
  useEffect(()=>{
    if(plead!==null)
    setLeadData(plead)
  },[plead])


   const handleDatesubmit=()=>{
    const formData={
      phone:phone,
      date:date
    };
    dispatch(recall({formData,toast}))
    
   }
   const handleList=()=>{
    const formData={
      email:JSON.parse(localStorage.getItem("user"))?.email,
      phone:phone
    }
    dispatch(addToList({formData,toast}))
   }
  const submitFeed=()=>{
    const formData={
      name:JSON.parse(localStorage.getItem("user")).lname,
      phone:phone,
      feed:feed
    }
    dispatch(addFeed({formData,toast}))
    setTimeout(()=>{
      const formValue={
        phone:phone
      }
      dispatch(getPlead({formValue,toast}))
    },3000)
    
  }
const submitName=()=>{
const formData ={
  phone:phone,
  name:name,
}
dispatch(addName({formData,toast}))
setTimeout(()=>{
  const formValue={
    phone:phone
  }
  dispatch(getPlead({formValue,toast}))
},3000)
}









  useEffect(()=>{
      setData(JSON.parse(sessionStorage.getItem("leads")))
      setLeadData(JSON.parse(sessionStorage.getItem("pleed")))
      const formValue={
        phone:phone
      }
      dispatch(getPlead({formValue,toast}))
      
  },[dispatch,phone])

  useEffect(()=>{
   setLeadData(data?.filter((e)=>{
      return e.phone===phone;
   }))
  },[data,phone])
 
   useEffect(()=>{
    console.log(leadData)
    setName(leadData?.name)

   },[leadData])

  return (
    <>
     <div className="main-cstppup">
      <div className="profile">
        <img src={man} alt="man" className='man' />
        <div className="details">
          <div className="name">
          <input type="text" className='nmi' placeholder='Add Name' value={name} onChange={(e)=>setName(e.target.value)}  />
          <MDBBtn rounded className='mx-4' color='info' onClick={submitName}
        >Set</MDBBtn>
        </div>
        <h2 className="phone-no">{phone}</h2>
        <div>
        <h6>Recall date</h6>
        <input type="date" name="date" id="date" className='dt'
          value={date} onChange={(e)=>setDate(e.target.value)}
        />
        <MDBBtn rounded className='mx-4' color='info'
         onClick={()=>handleDatesubmit()}
        >Submit</MDBBtn>
        </div>
      <MDBBtn rounded  color='danger' onClick={handleList} >Add To List</MDBBtn>
        </div>
      </div>
      <div className="fd">
        
      <div className="comments">       
      <h4 className='headingfeed'>Previous Feedbacks</h4>
       {
        leadData?.feed?.map((e)=>{
          return <FeedbackCard  name={e.name} date={e.date} feed={e.feed}  />
        })
       }
       </div>
       <div className='tx'>
        <textarea name="feedback-cust" id="feedback-cust" className="textareaa" placeholder='Write the feedback recieved'
          value={feed}  onChange={(e)=>setFeed(e.target.value)}
        ></textarea>
        <MDBBtn rounded className='mx-4' color='info' 
         onClick={()=>submitFeed()}
        
        >
          Submit
      </MDBBtn> 
      </div>
       </div>
     </div>
    </>
  )
}

export default CustomerPopup
