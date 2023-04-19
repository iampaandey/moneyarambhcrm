import React from 'react'
import './dashboard.css'
import dsh from "../images/dsh.png"
const Dashboard = () => {
  return (
    <div className='mn'>
    <div className="main-dash">
        <div className="greet">
            <span className='welcome'>Welcome,</span> 
            <span className='user-name'>Alexander</span>
            <p className='para'>Market Awaits You !</p>

        </div>
        <div className="stock">

            <img src={dsh} alt=""  />
        </div>
    </div>
    </div>
    
    
    )
}

export default Dashboard