import React, { useContext } from 'react';
import { FormContext } from '../Context/FormContext.js'
import { toCamelCase } from '../helpers/stringToCamel.js'

const InputField = (props) => {
  const { inputValue, setInputValue } = useContext(FormContext)
  console.log(toCamelCase(props.label))

  return(
    <div className={props.styling}>
      <label htmlFor={props.label}>{props.label}</label>
      <input 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        type={props.type} 
        className="form-control" 
        id={props.label}
      />
    </div>
  )
}

export default InputField;