import React from 'react';
import { useStateValue } from '../state';
import { toCamelCase } from '../helpers/stringToCamel.js';

import '../styles/InputField.scss';

const InputField = (props) => {
  const [state, dispatch] = useStateValue()

  const setInputValue = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value
    })
  }

  const inputValue = state[toCamelCase(props.label)]

  return (
    <div className={`form-group ${props.styling}`}>
      <label htmlFor={props.label}>{props.label}</label>
      <div className="error">{state.errors[toCamelCase(props.label)]}</div>
      <input 
        value={inputValue}
        onChange={setInputValue}
        type={props.type} 
        className="form-control" 
        name={toCamelCase(props.label)}
      />
    </div>
  )
}

export default InputField;