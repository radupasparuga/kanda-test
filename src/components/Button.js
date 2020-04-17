import React from 'react';

const Button = (props) => {
  return(
    <button type="button" className={props.styling}>
      {props.label}
    </button>
  )
}

export default Button;