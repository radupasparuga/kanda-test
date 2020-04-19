import React from 'react';
import { useStateValue } from '../state';
import { toCamelCase } from '../helpers/stringToCamel.js'

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
    <div className={props.styling}>
      <label htmlFor={props.label}>{props.label}</label>
      <span>{state.errors[toCamelCase(props.label)]}</span>
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