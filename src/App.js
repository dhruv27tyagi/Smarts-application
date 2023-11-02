import './App.css';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import NewOperations from './Components/NewOperations';
import InProgress from './Components/InProgress';
//import Server from './Components/Server';



function App() {
  return (
  <>
  
  <Header title="Smarts Console"/>
  <NewOperations Header ="New Alerts"/>
  
  <InProgress/>
  
  

  
  </>
  );
}

export default App;