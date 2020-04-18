import React from 'react';
import InputField from "./InputField.js";
import Button from "./Button.js";

const Form = () => {
  return(
    <div className="card mx-auto">
      <div className="card-body">
        <h3 className="card-title">Kanda Exam</h3>
        <form>
          <div className="form-row">
            <InputField label="First Name" type="text" styling="form-group col-sm-6"/>
            <InputField label="Last Name"type="text" styling="form-group col-sm-6" />
            <InputField label="Email"type="email" styling="form-group col-sm-12"/>
            <InputField label="Password"type="password" styling="form-group col-sm-6"/>
            <InputField label="Confirm Password"type="password" styling="form-group col-sm-6" />
          </div>
        </form>
        <Button label="Submit" styling="btn btn-primary"/>
      </div>
    </div>
  )
}

export default Form;