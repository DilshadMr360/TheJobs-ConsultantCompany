import React, {useState} from 'react';
import './App.css';
import  Register  from './Register';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';


function App() {




  return (



<Router>
      <div className="App">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>



  );
}




export default App;
