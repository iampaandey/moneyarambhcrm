import React from 'react'
import './dashboard.css'
import kashtomar from '../images/kashtomar.png'
import positivefeedback from '../images/positiveFeedback.png'
import negativefeedback from '../images/negativeFeedback.png'
import dsh from "../images/dsh.png"

import DashCard from './DashCard'
const Dashboard = () => {
    const indInfo=[
        {
            title:"Customer Handled",
            count:"345",
            imgg:kashtomar
             
        },
        {
            "title":"Positive FeedBacks",
            "count":"354",
            imgg:positivefeedback
        },
        {
            "title":"Negative FeedBacks",
            "count":"245",
            imgg:negativefeedback
        }
    ]
  return (
    <div className='mn'>
    <div className="main-dash">
        <div className="greet">
            <span className='welcome'>Welcome,</span> 
            <span className='user-name'>Alexander</span>
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