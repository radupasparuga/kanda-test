import React from 'react';
import InputField from "./InputField.js";
import Button from "./Button.js";

const Form = () => {
  return(
    <div className="card mx-auto">
      <div className="card-body">
        <h3 className="card-title">Kanda Exam</h3>
        <InputField label="First Name"/>
        <InputField label="Last Name"/>
        <InputField label="Email"/>
        <InputField label="Password"/>
        <InputField label="Confirm Password"/>
        <Button label="Submit" styling="btn btn-primary"/>
      </div>
    </div>
  )
}

export default Form;