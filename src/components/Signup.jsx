import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import rocketImg from '../images/rocket.png'
export const Signup = () => {
   const validate = Yup.object({  
    firstName: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    phone:Yup.string().min(10,"Phone no must be 10 digits").max(10,"Phone no must be 10 digits").required("Phone is required feild").matches(/^[0-9]+$/, "Must be only digits")
    })
  
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone:"",
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone No" name="phone" type="text" />
            <button className="btn btn-dark mt-3" id='bt1' type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" id='bt2' type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
    </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  )
}
