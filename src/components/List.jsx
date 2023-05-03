import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskCard from './TaskCard'
import { toast } from "react-toastify"
import { SearchLead, addTag, removeFromList } from './redux/features/userSlice'
import "./list.css"
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import Loader from './Loader'


const List = () => {
    const {user}=useSelector((state)=>({...state.user}))
    const [data,setData]=useState();
    const [lead, setLead] = useState(null)
    const {loading,plead} = useSelector((state) => ({ ...state.user }))
    const [val, setVal] = useState("")

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
        if(plead)
        setLead(plead)
    },[user,plead])
    useEffect(()=>{
     
    },[data,lead])
    const handleDelete=(phone)=>{
        const formData={
            email:JSON.parse(localStorage.getItem("user"))?.email,
            phone:phone
          } 
          dispatch(removeFromList({formData,toast}))
    }
    const handleSearch = () => {
      console.log(val)
      const formData = {
          phone: val,
          token: JSON.parse(sessionStorage.getItem("token"))
      }

      dispatch(SearchLead({ formData, toast }))
  }
    
  return (
    <div className='list'>
        <h2>Search a Lead</h2>

<MDBInput label='Phone number input' id='typePhone' type='tel' value={val} onChange={(e) => { setVal(e.target.value) }} />
<MDBBtn rounded color='info' onClick={handleSearch}>Search</MDBBtn>

{lead &&
    <>
        <h2>Search Result</h2>
        {loading ? <Loader /> :
            <TaskCard flag={false} tags={lead?.tags} date={lead?.date} handleDelete={handleDelete} phone={lead?.phone} status={lead?.Status} />
        }
    </>
}
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
