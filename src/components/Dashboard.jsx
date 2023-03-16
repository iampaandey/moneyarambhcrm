import React from 'react'
import './dashboard.css'
import stockGif from '../images/stock.gif'
const Dashboard = () => {
  return (
    <>
    <h2>Dashboard</h2>
    <div className="main-dash">
        <div className="greet">
            <span className='welcome'>Welcome,</span> 
            <span className='user-name'>Alexander</span>
            <p className='para'>Market Awaits You !</p>

        </div>
        <div className="stock">

            <img src={stockGif} alt="" />
        </div>
    </div>
    </>
    
    
    )
}

export default Dashboard