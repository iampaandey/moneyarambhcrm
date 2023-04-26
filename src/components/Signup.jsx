import React from 'react';
import { ErrorMessage, useFormik} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import rocketImg from '../images/rocket.png'
import { useDispatch} from 'react-redux'
import { register } from './redux/features/userSlice';
import { toast } from "react-toastify"
import { useHistory } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';

export const Signup = () => {
  const dispatch=useDispatch()
  const history=useHistory()
   const validate = Yup.object({  
    fname: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    lname: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    phone:Yup.string().min(10,"Phone no must be 10 digits").max(10,"Phone no must be 10 digits").required("Phone is required feild").matches(/^[0-9]+$/, "Must be only digits")
    })
  const init = {
    fname: '',
    lname: '',
    email: '',
    phone:"",
  }
    const {values,handleBlur,handleChange,handleSubmit,errors,touched}=useFormik({
      initialValues:init,
      validationSchema:validate,
      onSubmit:(values,action)=>{
        console.log(values)
        const formData=values;
        dispatch(register({formData,history,toast}))
        action.resetForm()
      }
    })
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">

    
        <div>
          <form onSubmit={handleSubmit}>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <div className="mb-2">
          <label htmlFor="fname">First Name</label>
         <input autoComplete='false' className={`form-control shadow-none ${touched.fname && errors.fname && 'is-invalid'}`} type="text" name="fname" value={values.fname} onBlur={handleBlur} onChange={handleChange} />
        <p className="err">{touched.fname&&errors.fname?errors.fname:null}</p>
         </div>
         <div className="mb-2">
          <label htmlFor="fname">Last Name</label>
         <input autoComplete='false' className={`form-control shadow-none ${touched.lname && errors.lname && 'is-invalid'}`} type="text" name="lname" value={values.lname} onBlur={handleBlur} onChange={handleChange} />
        <p className="err">{touched.lname&&errors.lname?errors.lname:null}</p>
         </div>
         <div className="mb-2">
          <label htmlFor="email">Email</label>
         <input autoComplete='false' className={`form-control shadow-none ${touched.email &&errors.email && 'is-invalid'}`} type="text" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
        <p className="err">{touched.email&&errors.email?errors.email:null}</p>
         </div>
         <div className="mb-2">
          <label htmlFor="phone">Phone</label>
         <input autoComplete='false' className={`form-control shadow-none ${touched.phone && errors.phone && 'is-invalid'}`} type="text" name="phone" value={values.phone} onBlur={handleBlur} onChange={handleChange} />
        <p className="err">{touched.phone&&errors.phone?errors.phone:null}</p>
         </div>
         <MDBBtn type='submit' rounded >Submit</MDBBtn>
        </form>  
        </div>
    
    </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  )
}
