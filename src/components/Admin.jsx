import React, { useState } from 'react'
import * as XLSX from "xlsx"
import './admin.css'
import { addLead } from './redux/api'
import img1 from "../images/img1.png"
import { MDBBtn } from 'mdb-react-ui-kit'
import plus from "../images/plus.webp"
import Workercard from './Workercard'
const Admin = () => {
    const [bdata,setBdata]=useState(null)
    const [data,setData]=useState(null)

    const handleChange=(e)=>{
        let file = e.target.files[0];
        if(file)
        {
            let reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload=(e)=>{
                setBdata(e.target.result)
            }
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(bdata!==null)
        {
            const workbook = XLSX.read(bdata,{type:"buffer"})
            const workSheetName= workbook.SheetNames[0];
            const worksheet=workbook.Sheets[workSheetName]
            const obj = XLSX.utils.sheet_to_json(worksheet)
            await addLead(obj)
            console.log(obj)
            setData(obj)
        }
    }
  return (<div className='mnn'>
        <h2 className="addl">Add Leads</h2>
    <div className='frm'>
        <img src={img1} alt="" className='img1' />
        <div className="fl">
            <div className="fd">
                <img src={plus} alt="" className='pl' />
                <h6 className='ch'>Choose Files</h6>
            </div>
        <input type="file" name="file" id="fl" onChange={handleChange} />
        <MDBBtn rounded className='mx-4' color='info' onClick={handleSubmit}>
          Submit
      </MDBBtn>
        </div>
    </div>
    <h4 className="wr">Employes</h4>
    <div className="workers">
        <Workercard/>
        <Workercard/>
        <Workercard/>
        <Workercard/>
        <Workercard/>
        <Workercard/>
        <Workercard/>
        <Workercard/>

    </div>
    </div>
  )
}

export default Admin