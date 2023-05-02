import React, { useEffect, useState } from 'react'
import './dashboard.css'
import kashtomar from '../images/kashtomar.png'
import positivefeedback from '../images/positiveFeedback.png'
import negativefeedback from '../images/negativeFeedback.png'
import dsh from "../images/dsh.png"

import DashCard from './DashCard'
import { useHistory } from 'react-router-dom'
const Dashboard = () => {
  const pos=JSON.parse(localStorage.getItem("user"))?.pos;
  const tot=JSON.parse(localStorage.getItem("user"))?.total+pos;
  const name=JSON.parse(localStorage.getItem("user"))?.fname;
  const neg=tot-pos;
    const history=useHistory();
useEffect(()=>{
if(localStorage.getItem("user")===null)
{
    history.push('/login')
}
},[])


    const indInfo=[
        {
            title:"Customer Handled",
            count:tot,
            imgg:kashtomar
             
        },
        {
            "title":"Positive FeedBacks",
            "count":pos,
            imgg:positivefeedback
        },
        {
            "title":"Negative FeedBacks",
            "count":neg,
            imgg:negativefeedback
        }
    ]
  return (
    <div className='mn'>
    <div className="main-dash">
        <div className="greet">
            <span className='welcome'>Welcome,</span> 
            <span className='user-name'>{name}</span>
            <p>Market Awaits You !</p>

        </div>
        <div className="stock">

            <img src={dsh} alt=""  />
        </div>
    </div>
    <div className="cards-handle">
     {
        indInfo.map((e)=>{
            return <DashCard title={e.title} count={e.count} imagge={e.imgg}  />
        })
     }
    </div>
   
    </div>
    
    
    )
}

export default Dashboard