import React from 'react';

const FormData = {
  firstName: "test",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export const FormContext = React.createContext(FormData)