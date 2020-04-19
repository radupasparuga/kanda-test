import React from 'react';
import Form from './Form.js'
import { StateProvider } from '../state';

import '../styles/App.scss';

const App = () => {
  const initialState = {
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    errors: {},
    isValidated: false
  }

  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-sm-8">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
