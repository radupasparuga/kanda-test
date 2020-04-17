import React from 'react';
import InputField from "./InputField.js";

const Form = () => {
  return(
    <div className="card mx-auto">
      <div className="card-body">
        <h3 className="card-title">Kanda Exam</h3>
        <InputField label="test"/>
      </div>
    </div>
  )
}

export default Form;