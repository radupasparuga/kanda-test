import React from 'react';
import Form from './Form.js'

import '../styles/App.scss';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
