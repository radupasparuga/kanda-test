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
    confirmPassword: ""
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
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
