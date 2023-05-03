import React, { useEffect, useState } from 'react'
import './dashboard.css'
import kashtomar from '../images/kashtomar.png'
import positivefeedback from '../images/positiveFeedback.png'
import negativefeedback from '../images/negativeFeedback.png'
import dsh from "../images/dsh.png"
import { useSelector } from 'react-redux'
import DashCard from './DashCard'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBInput, MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit'
const Dashboard = () => {
    const pos = JSON.parse(localStorage.getItem("user"))?.pos;
    const tot = JSON.parse(localStorage.getItem("user"))?.total + pos;
    const name = JSON.parse(localStorage.getItem("user"))?.fname;
    const neg = tot - pos;
    const history = useHistory();
    const [data, setData] = useState();
    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            history.push('/login')
        }
        if (localStorage.getItem("user") !== null) {
            setData(JSON.parse(localStorage.getItem("user")));
        }
    }, [])
    const { pemployee } = useSelector((state) => ({ ...state.user }));
    useEffect(() => {
        if (pemployee !== null) {
            setData(pemployee)
        }
    }, [pemployee])
    useEffect(() => {
        console.log(data)
    }, [data])
    const indInfo = [
        {
            title: "Customer Handled",
            count: tot,
            imgg: kashtomar

        },
        {
            "title": "Positive FeedBacks",
            "count": pos,
            imgg: positivefeedback
        },
        {
            "title": "Negative FeedBacks",
            "count": neg,
            imgg: negativefeedback
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

                    <img src={dsh} alt="" />
                </div>
            </div>
            <div className="tar">
                <h6>Performance</h6>
                <MDBProgress height='20'>
                    <MDBProgressBar striped animated width={`${(data?.done / data?.target) * 100}`} bgColor='danger' valuemin={0} valuemax={100} >
                        {(data?.done / data?.target) * 100}
                    </MDBProgressBar>
                </MDBProgress>
                <div className="tgt">
                    <MDBInput label="Completed Task" value={data?.done} />

                </div>
                <div className="tgt">
                    <MDBInput label="Target" value={data?.target} />

                </div>
            </div>
            <div className="cards-handle">
                {
                    indInfo.map((e) => {
                        return <DashCard title={e.title} count={e.count} imagge={e.imgg} />
                    })
                }
            </div>

           

        </div>


    )
}

export default Dashboard