import React, { useEffect, useState } from 'react'
import man from "../images/man.jpg"
import { MDBBtn, MDBInput, MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit'
import { useHistory, useParams } from 'react-router-dom'
import TaskCard from './TaskCard'
import WorkCard from './WorkCard'
import { useDispatch, useSelector } from 'react-redux'
import { addDone, delLead, partEmployee, targett} from './redux/features/userSlice'
import { toast } from "react-toastify"

const Employee = () => {
    const [data,setData]=useState()
    const [target,setTarget]=useState(0)
    const [done,setDone]=useState(0)
    const [flag,setFlag]=useState(false);
    const [flag2,setFlag2]=useState();
    const params = useParams()
    const phone =params?.id?.slice(1);
    const dispatch=useDispatch();
    const history=useHistory();


    const {pemployee,admin}=useSelector((state)=>({...state.user}))
    useEffect(()=>{
          setFlag2(admin)
        
      },[admin])
      useEffect(()=>{
      
        if(flag2===false)
        history.push('/adminlogin')      
    },[flag2])
    useEffect(()=>{
        if(sessionStorage.getItem("pemployee")!==null)
        {
            setData(JSON.parse(sessionStorage.getItem("pemployee")));
            setFlag(false);
        }
        if(sessionStorage.getItem("token")!==null)
        {
            setFlag2(true)
        }
    },[])
    useEffect(()=>{
        if(phone!==null)
        {
            const formData={
                phone:phone,
                token:JSON.parse(sessionStorage.getItem("token"))
            }
            dispatch(partEmployee({formData,toast}))
        }
    },[phone])
    useEffect(()=>{
        if(pemployee!==null)
        setData(pemployee)
    },[pemployee])
    useEffect(()=>{
    
    },[flag]);
    
    const handleDelete=(val)=>{
        const formData={
            lphone:val,
            ephone:phone,
            token:JSON.parse(sessionStorage.getItem("token"))
        }
  
        dispatch(delLead({formData,toast}))
        setTimeout(()=>{

        
        if(phone!==null)
        {
            const formData={
                phone:phone,
                token:JSON.parse(sessionStorage.getItem("token"))
            }
            dispatch(partEmployee({formData,toast}))
        }
    },2000)
    }
    const handleDone=()=>{
        const formData={
            email:data?.email,
            ammount:done,
            token:JSON.parse(sessionStorage.getItem("token"))
        }
        dispatch(addDone({formData,toast}));
        setFlag(!flag);
        setDone(0);
    }
    const handleTarget=()=>{
        const formData={
            email:data?.email,
            target:target,
            token:JSON.parse(sessionStorage.getItem("token"))
        }
        dispatch(targett({formData,toast}))
        setTarget(0);
        setFlag(!flag);
    }
  return (<>
    <div className='main-cstppup'>

      <div className="profile">
        <img src={man} alt="man" className='man' />
        <div className="details">
        <h2>{data?.fname+" "+data?.lname}</h2>
        <h3 className="phone-no">{phone}</h3>
        <h3>{data?.email}</h3>
        <MDBProgress height='20'>
      <MDBProgressBar striped animated width={`${(data?.done/data?.target)*100}`} bgColor='danger' valuemin={0} valuemax={100} >
        {(data?.done/data?.target)*100}
        </MDBProgressBar>
    </MDBProgress>  
        <div className="tgt">
            <MDBInput label="Add Completed Task" value={done===0 ? data?.done :done} onChange={(e)=>{setDone(e.target.value)}} />
        <MDBBtn rounded  color='success' onClick={handleDone}>Add To target</MDBBtn>
        </div>
        <div className="tgt">
            <MDBInput label="Target" value={target===0 ? data?.target : target} onChange={(e)=>{setTarget(e.target.value)}}/>
        <MDBBtn rounded  color='info' onClick={handleTarget}>Set target</MDBBtn>
        </div>
        </div>
        </div>
        <br />
            
        
        <h3>{data?.fname}'s List</h3>
        {
            data?.leadList?.map((e)=>{
                return <TaskCard flag={false} tags={e?.tags} date={e?.date} handleDelete={()=>{handleDelete(e?.phone)}} phone={e?.phone} status={e?.Status}  />
            })
        }
        <h3>{data?.fname}'s History</h3>
        <div className="his">
        {
            data?.current?.map((e)=>{
                return <WorkCard phone={e?.phone} tag={e?.tag}/>
            })
        }
        </div>

      </div>
      </>
  )
}

export default Employee
