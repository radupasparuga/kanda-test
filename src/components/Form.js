import React from 'react';
import * as yup from 'yup';
import { useStateValue } from '../state';
import InputField from "./InputField.js";

const Form = () => {
  const [state, dispatch] = useStateValue()
  let errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {...state}
    delete formData.errors
    validationSchema.validate(state, {abortEarly: false})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        err.inner.forEach(errObj => {
          errors[errObj.path] = errObj.message
        })
        dispatch({
          field: "errors",
          value: errors
        })
      })
  }

  return(
    <div className="card mx-auto">
      <div className="card-body">
        <h3 className="card-title">Kanda Exam</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <InputField label="First Name" type="text" styling="form-group col-sm-6" />
            <InputField label="Last Name" type="text" styling="form-group col-sm-6" />
            <InputField label="Email" type="email" styling="form-group col-sm-12"/>
            <InputField label="Password" type="password" styling="form-group col-sm-6"/>
            <InputField label="Confirm Password" type="password" styling="form-group col-sm-6" />
          </div>
          <input type="Submit" className="btn btn-primary"/>
        </form>
      </div>
    </div>
  )
}

export default Form;