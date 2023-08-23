import React, {useState} from 'react';
import './App.css';
import  Register  from './Register';
import Login from './Login';
import logo from '../src/assests/logo.png'; 
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';
import Admin_page from './pages/Admin_page';
import Job_seekers_page from './pages/Job_seekers_page';
import Create_new_appointment_page from './pages/Create_new_appointment_page';
import Profile_page from './pages/Profile_page';
import Add_user from './pages/Add_user';
import View_user from './pages/View_user';
import Edit_user from './pages/Edit.user';
import All_appointments from './pages/All_appointments';
import Users from './pages/Users';
import Admin_appointment from './pages/Admin_appointment';
import Appoinment_list from './pages/Appoinment_list';
import Consultant_main_page from './pages/Consultant_main_page';
import Consultant_appointments from './pages/Consultant_appointments';



function App() {




  return (



<Router>
      <div className="App">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin_page />} />
          <Route path="/users" element={<Job_seekers_page />} />
          <Route path="/create-new-appointment" element={<Create_new_appointment_page />} />
          <Route path="/dashboard" element={<Job_seekers_page />} />
          <Route path="/profile-page" element={<Profile_page />} />
          <Route path="/view-users" element={<View_user />} />
          <Route path="/add-user" element={<Add_user/>} />
          <Route path="/all-appointment" element={<All_appointments/>} />
          <Route path="/all-user-page" element={<Users/>} />
          <Route path="/appointment-list" element={<Appoinment_list/>} />
          <Route path="/admin-appointment" element={<Admin_appointment/>} />
          <Route path="/profile-page" element={<Profile_page/>} />
          <Route path="/edit-users" element={<Edit_user/>} />
          <Route path="/consultant-dashboard" element={<Consultant_main_page/>} />
          <Route path="/consultant-appointment" element={<Consultant_appointments/>} />
          <Route path="/register-form" element={<Register/>} />
          <Route path="/login-form" element={<Login/>} />

         
       
     
        </Routes>
      </div>
    </Router>



  );
}




export default App;
