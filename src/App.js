import React, {useState} from 'react';
import './App.css';
import  Register  from './Register';
import Login from './Login';
import logo from '../src/assests/logo.png'; 
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';
import Admin_page from './pages/Admin_page';
import Job_seekers_page from './pages/Job_seekers_page';
import Create_new_appointment_page from './pages/Appointments/Create_appointment';
import Profile_page from './pages/Profile_page';
import Add_user from './pages/Users/Add_user';
import View_user from './pages/Users/View_user';
import Edit_user from './pages/Users/Edit.user';
import All_appointments from './pages/Appointments/All_appointments';
import Users from './pages/Users/Users';
import Admin_appointment from './pages/Admin_appointment';
import Appoinment_list from './pages/Appointments/Appoinment_list';
import Consultant_main_page from './pages/Consultant_main_page';
import Consultant_appointment from './pages/Consultant_appointment';
import Edit_appointment from './pages/Appointments/Edit_appointment';
import Consultant_appointments_list from './pages/Consultant_appointments_list';



function App() {




  return (



<Router>
      <div className="App">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        {/*
          see sharp
          if(loggedin){
            if(admin){
              /appointments/all
              /appointments/view
              /appointments/create
              /appointments/edit

              /user
            }
            if(client){
              /appointments/all - for this client only
              /appointments/view
              /appointments/create
            }
          }
        */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/admin_dashboard" element={<Admin_page />} />
          <Route path="/client_dashboard" element={<Job_seekers_page />} />
          <Route path="/consultant_dashboard" element={<Consultant_main_page/>} />

          <Route path="/profile" element={<Profile_page />} />

          <Route path="/admin_appointment" element={<Admin_appointment/>} />
          <Route path="/consultant_appointment" element={<Consultant_appointment/>} />

         
          <Route path="/appointments/all" element={<All_appointments/>} />
          <Route path="/appointments/create" element={<Create_new_appointment_page />} />
          <Route path="/appointments/edit" element={<Edit_appointment/>} />
          <Route path="/appointments/list" element={<Appoinment_list/>} />
          <Route path="/consultant_appointment/list" element={<Consultant_appointments_list/>} />

          <Route path="/users/create" element={<Add_user/>} />
          <Route path="/users/edit/:userId" element={<Edit_user/>}  />
          <Route path="/users/view" element={<View_user />} />
          <Route path="/users/all" element={<Users/>} />

         
     
        </Routes>
      </div>
    </Router>



  );
}




export default App;
