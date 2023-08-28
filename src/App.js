import './App.css';
import Register from './Register';
import Login from './Login';
import logo from '../src/assests/logo.png'; 
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';
import Create_new_appointment_page from './pages/Appointments/Create_appointment';
import Add_user from './pages/Users/Add_user';
import View_user from './pages/Users/View_user';
import Edit_user from './pages/Users/Edit.user';
import All_appointments from './pages/Appointments/All_appointments';
import Users from './pages/Users/Users';
import Appoinment_list from './pages/Appointments/Appoinment_list';
import Consultant_appointment from './pages/Appointments/Consultant_appointment';
import Edit_appointment from './pages/Appointments/Edit_appointment';
import Consultant_appointments_list from './pages/Appointments/Consultant_appointments_list';
import Dashboard from './pages/Dashboard';
import Profile_page from './pages/Profile_page'
import { useEffect, useState } from 'react';

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile_page />} />


          <Route path="/" element={<Dashboard />} />
          <Route path="/consultant_appointment" element={<Consultant_appointment />} />

         
          <Route path="/appointments/all" element={<All_appointments />} />
          <Route path="/appointments/create" element={<Create_new_appointment_page />} />
          <Route path="/appointments/edit" element={<Edit_appointment />} />
          <Route path="/appointments/list" element={<Appoinment_list />} />
          <Route path="/consultant_appointment/list" element={<Consultant_appointments_list />} />

          <Route path="/users/create" element={<Add_user />} />
          <Route path="/users/edit/:userId" element={<Edit_user />} />
          <Route path="/users/view" element={<View_user />} />
          <Route path="/users/all" element={<Users />} />

        </Routes>
      </div>
    </Router>

  );
}




export default App;
