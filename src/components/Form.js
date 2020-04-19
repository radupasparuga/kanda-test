import React from 'react';
import * as yup from 'yup';
import InputField from "./InputField.js";

const Form = () => {
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('First Name is required'),
    lastName: yup
      .string()
      .required('Last Name is required'),
    email: yup
      .string()
      .email('Email address invalid')
      .required('Email address is required'),
    password: yup
      .string()
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test")
  }

  return(
    <div className="card mx-auto">
      <div className="card-body">
        <h3 className="card-title">Kanda Exam</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <InputField label="First Name" type="text" styling="form-group col-sm-6"/>
            <InputField label="Last Name"type="text" styling="form-group col-sm-6" />
            <InputField label="Email"type="email" styling="form-group col-sm-12"/>
            <InputField label="Password"type="password" styling="form-group col-sm-6"/>
            <InputField label="Confirm Password"type="password" styling="form-group col-sm-6" />
          </div>
          <input type="Submit" className="btn btn-primary"/>
        </form>
      </div>
    </div>
  )
}

export default Form;