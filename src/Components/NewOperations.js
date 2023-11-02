import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Server from './Server';

export default function NewOperations(props) {
  return (
    
      <div className="InProgressPan">
        <div className="card">
          <div className="card-header">
          {props.Header}
          </div>
          <div className="Alerts-panel">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Server />}></Route>
            </Routes>
          </BrowserRouter>
          </div>
      
    </div>
    </div>
  );
};