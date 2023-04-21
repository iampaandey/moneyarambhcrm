import React from 'react'
import './customerpopup.css'
import FeedbackCard from './FeedbackCard'
import man from "../images/man.jpg"
import { MDBBtn } from 'mdb-react-ui-kit'
const CustomerPopup = () => {
  const feedData=[
      {
        "name":"Akansha Singh",
        "date":"12/03/2022",
        "feed": "gerjffhb ergergernger gerg rrtrtrhh th thth h th th  h hf h fggheruewnsfhew ewifheiuhdvbg r fjdgierg htgnherigjdvdg  iugghyerghgher 87  w t4tengheruergerioegrth hrkgngtr  trhthmtrium"
      },
      {
        "name":"Akansha Singh",
        "date":"12/03/2022",
        "feed": "gerjffhb ergergernger gerg rrtrtrhh th thth h th th  h hf h fggheruewnsfhew ewifheiuhdvbg r fjdgierg htgnherigjdvdg  iugghyerghgher 87  w t4tengheruergerioegrth hrkgngtr  trhthmtrium"
      },
      {
        "name":"Akansha Singh",
        "date":"12/03/2022",
        "feed": "gerjffhb ergergernger gerg rrtrtrhh th thth h th th  h hf h fggheruewnsfhew ewifheiuhdvbg r fjdgierg htgnherigjdvdg  iugghyerghgher 87  w t4tengheruergerioegrth hrkgngtr  trhthmtrium"
      },
      {
        "name":"Akansha Singh",
        "date":"12/03/2022",
        "feed": "gerjffhb ergergernger gerg rrtrtrhh th thth h th th  h hf h fggheruewnsfhew ewifheiuhdvbg r fjdgierg htgnherigjdvdg  iugghyerghgher 87  w t4tengheruergerioegrth hrkgngtr  trhthmtrium"
      },
      {
        "name":"Akansha Singh",
        "date":"12/03/2022",
        "feed": "gerjffhb ergergernger gerg rrtrtrhh th thth h th th  h hf h fggheruewnsfhew ewifheiuhdvbg r fjdgierg htgnherigjdvdg  iugghyerghgher 87  w t4tengheruergerioegrth hrkgngtr  trhthmtrium"
      },
      {
        "name":"Akansha Singh",
        "date":"12/03/2022",
        "feed": "gerjffhb ergergernger gerg rrtrtrhh th thth h th th  h hf h fggheruewnsfhew ewifheiuhdvbg r fjdgierg htgnherigjdvdg  iugghyerghgher 87  w t4tengheruergerioegrth hrkgngtr  trhthmtrium"
      }

  ]
  return (
    <>
     <div className="main-cstppup">
      <div className="profile">
        <img src={man} alt="man" className='man' />
        <div className="details">
          <input type="text" className='nmi' value={"Rakesh Khare"}  />
        <h2 className="phone-no">9893399032</h2>
        </div>
      </div>
   
        <textarea name="feedback-cust" id="feedback-cust" className="textareaa" placeholder='Write the feedback recieved' cols="30" rows="5"></textarea>
        <MDBBtn rounded className='mx-4' color='info' >
          Submit
      </MDBBtn>        <h4 className='headingfeed'>Previous Feedbacks</h4>
       {
        feedData.map((e)=>{
          return <FeedbackCard  name={e.name} date={e.date} feed={e.feed}  />
        })
       }
     </div>
    </>
  )
}

export default CustomerPopup
