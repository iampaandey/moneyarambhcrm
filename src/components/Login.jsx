import React from 'react'
import isvg from "../images/iv.svg"
import './css/style.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useDispatch} from 'react-redux'
import { toast } from "react-toastify"
import { useHistory } from 'react-router-dom'
import { login } from './redux/features/userSlice'




const Login = () => {
    const init={
        email:"",
        password:"",
    }
    const history = useHistory();
    const dispatch = useDispatch();
    const loginSchema =Yup.object({
        email:Yup.string().email().required("Please enter an email"),
        password:Yup.string().min(6).required("Please enter a password"),
        token:Yup.string().min(7,'Token must contain 7 characters').max(7,"Token must contain 7 characters").required("Token is required feild")
    })
    const {values,handleChange,handleBlur,handleSubmit,errors,touched}= useFormik({
        initialValues:init,
        validationSchema:loginSchema,
        onSubmit:(values)=>{
            
            const formData = values;
            dispatch(login({formData,history,toast}));
            
        }
    })
  return (
    <>
     
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={isvg} alt="inn" className="img-fluid"/>
        </div>
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3>Sign In</h3>
              <p className="mb-4">Welcome back to Moneyarambh.com . Have a great day!!!</p>
            </div>
            <div>
        User Credentials =
          Email:test296@gmail.com
          Password:test@user
          Token:5121150
        
      </div>
            <form onSubmit={handleSubmit} >
              <div className="form-group first">
                <input type="text" name='email' placeholder='Email' className="form-control" autoComplete='false' id="username" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                <p className='err'>{touched.email&&errors.email?errors.email:null}</p>
              </div>
              <div className="form-group last mb-4">
                <input type="password" name='password' placeholder='Password' className="form-control" autoComplete='false' id="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                <p className='err'>{touched.password&&errors.password?errors.password:null}</p>
              </div>
              <div className="form-group last mb-4">
                <input type="password" name='token' className="form-control" placeholder='Token' autoComplete='false' id="token" value={values.token} onChange={handleChange} onBlur={handleBlur}/>
                <p className='err'>{touched.token&&errors.token?errors.token:null}</p>
              </div>
              
      

              <button type="submit"  className="btn btn-block btn-primary" id='bn'>
                Sign In
                </button>

              
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
    </>
  )
}

export default Login