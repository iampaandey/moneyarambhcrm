import React, { useEffect, useState } from 'react'
import * as XLSX from "xlsx"
import './admin.css'
import { addLead } from './redux/api'
import img1 from "../images/img1.png"
import tkn from "../images/tkn.png"
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import plus from "../images/plus.webp"
import Workercard from './Workercard'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"
import { SearchLead, delLead, delLead2, getEmployee, getNextLead, getPrevLead, resettoken } from './redux/features/userSlice'
import TaskCard from './TaskCard'
import loader from '../images/79.gif'
import Loader from './Loader'
import { Link, useHistory } from 'react-router-dom'


const Admin = () => {
    const { employee, allLead, plead, admin,logToken } = useSelector((state) => ({ ...state.user }))
    const [bdata, setBdata] = useState(null)
    const [name, setName] = useState(null)
    const [employe, setEmploye] = useState()
    const [data, setData] = useState(null)
    const [val, setVal] = useState("")
    const [lead, setLead] = useState(null)
    const [logTokenn, setLogToken] = useState(logToken)

    const history = useHistory();


    const dispatch = useDispatch();


    useEffect(() => {
        if (admin || sessionStorage.getItem("token") !== null) {
            const formData = {
                token: JSON.parse(sessionStorage.getItem("token"))
            }
            dispatch(getEmployee({ formData, toast }))
            dispatch(getNextLead({ formData, toast }))
        }
        if (sessionStorage.getItem("employee") !== null) {
            setEmploye(JSON.parse(sessionStorage.getItem("employee")))
        }
        if (sessionStorage.getItem("allleads") !== null) {
            setData(JSON.parse(sessionStorage.getItem("allleads")))
        }
        if (sessionStorage.getItem("token") === null) {
            history.push('/adminlogin')
        }
        if (sessionStorage.getItem("logToken") !== null) {
            setLogToken(JSON.parse(sessionStorage.getItem("logToken")));
        }


    }, [])

    useEffect(() => {
        if (employee !== null)
            setEmploye(employee)
        if (allLead !== null)
            setData(allLead)
        if (plead)
            setLead(plead)
        if(logToken)
            setLogToken(logToken)
    }, [employee, allLead, plead, logToken, lead, employe])

    const handleNext = () => {
        const formData = {
            token: JSON.parse(sessionStorage.getItem("token"))
        }
        dispatch(getNextLead({ formData, toast }))
    }
  
    const handlePrev = () => {
        const formData = {
            token: JSON.parse(sessionStorage.getItem("token"))
        }
        dispatch(getPrevLead({ formData, toast }))
    }
    const handleChange = (e) => {
        document.getElementById("fd").style.border = "2px solid #00ffca"
        let file = e.target.files[0];
        setName(file?.name)
        if (file) {
            let reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = (e) => {
                setBdata(e.target.result)
            }
        }
    }
    const handleSearch = () => {
        console.log(val)
        const formData = {
            phone: val,
            token: JSON.parse(sessionStorage.getItem("token"))
        }

        dispatch(SearchLead({ formData, toast }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (bdata !== null) {
            const workbook = XLSX.read(bdata, { type: "buffer" })
            const workSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[workSheetName]
            const obj = XLSX.utils.sheet_to_json(worksheet)

            await addLead({ obj: obj, token: JSON.parse(sessionStorage.getItem("token")) })

        }
    }
    const handleReset = ()=>{
        const formData = {
            token: JSON.parse(sessionStorage.getItem("token"))
        }
        dispatch(resettoken({formData,toast}))
    }
    const handleDelete = (phone) => {
        const formData = {
            phone: phone,
            token: JSON.parse(sessionStorage.getItem("token"))
        }

        dispatch(delLead2({ formData, toast }))
        setData(data.filter((e) => {
            return e.phone !== phone
        }))
    }
    const { loading } = useSelector((state) => ({ ...state.user }))
    return (
        <>
            {

                <div className='mnn'>
                    <h2 className="addl">Token</h2>
                    <div className="frm1">
                    <img src={tkn} alt="tkn" className='img2' />
                    <div className="tkn">
                    <h3>Your Token is</h3>
                    <h4 className="bx">{logTokenn}</h4>
                    <MDBBtn rounded className='mx-4 my -4' color='info' >
                               Disabled
                            </MDBBtn>
                    </div>
                    </div>
                    <h2 className="addl">Add Leads</h2>
                    <div className='frm'>
                        <img src={img1} alt="" className='img1' />
                        <div className="fl">
                            <div className="fd" id='fd'>
                                <img src={plus} alt="" className='pl' />
                                <h6 className='ch'>Choose Files</h6>

                            </div>
                            <h6 className='file-name'>{name}</h6>
                            <input type="file" name="file" id="fl" onChange={handleChange} />
                            <MDBBtn rounded className='mx-4' color='info' onClick={handleSubmit}>
                                Submit
                            </MDBBtn>
                        </div>
                    </div>
                    <h4 className="wr">Employees</h4>
                    <div className="workers">

                        {
                            loading ? <Loader /> :
                                <>
                                    {
                                        Array.isArray(employe) && employe?.map((e) => {
                                            return <Workercard name={e?.fname + " " + e?.lname} email={e?.email} phone={e?.phone} pos={e?.pos} total={e?.total} />
                                        })
                                    }

                                </>

                        }


                    </div>
                    <Link to='/signup'> <MDBBtn rounded className='mx-4' color='info'>
                        Add Employee
                    </MDBBtn></Link>




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
                    <h2>Leads</h2>
                    <div className="btns">
                        <MDBBtn rounded color='info' onClick={handlePrev} >Previous</MDBBtn>
                        <MDBBtn rounded color='info' onClick={handleNext}>Next</MDBBtn>

                    </div>
                    {loading ? <Loader /> :
                        <div className="leadss">
                            {
                                Array.isArray(data) && data?.map((e) => {
                                    return <TaskCard flag={false} tags={e?.tags} date={e?.date} handleDelete={handleDelete} phone={e?.phone} status={e?.Status} />
                                })
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Admin