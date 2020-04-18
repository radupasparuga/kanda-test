import React from 'react';

const InputField = (props) => {
  return(
    <div className={props.styling}>
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} className="form-control" id={props.label}></input>
    </div>
  )
}

export default InputField;