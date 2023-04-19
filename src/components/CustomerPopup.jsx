import React from 'react'
import './customerpopup.css'
import FeedbackCard from './FeedbackCard'
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
        <h2 className="phone-no">9893399032</h2>
        <textarea name="feedback-cust" id="feedback-cust" className="textareaa" placeholder='Write the feedback recieved' cols="30" rows="5"></textarea>
        <div className="btnn">Submit</div>
        <h4 className='headingfeed'>Previous Feedbacks</h4>
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
