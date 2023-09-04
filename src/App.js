import './App.css';
import Register from './Register';
import Login from './Login';
import logo from '../src/assests/logo.png';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate, } from 'react-router-dom';
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
  const token = localStorage.getItem('authToken');

  const ProtectedRoute = ({ user, children }) => {
    console.log(user);
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  return (

    <Router>
      <div className="App">
        <Routes>

          <Route path='/appointments/create' element={
            <ProtectedRoute user={token}>
              <Create_new_appointment_page />
            </ProtectedRoute>
          }></Route>

          <Route path='/appointments/list' element={
            <ProtectedRoute user={token}>
              <Appoinment_list />
            </ProtectedRoute>
          }></Route>
          

          <Route path='/users/create' element={
            <ProtectedRoute user={token}>
              <Add_user />
            </ProtectedRoute>
          }></Route>


          <Route path='/users/edit/:userId' element={
            <ProtectedRoute user={token}>
              <Edit_user />
            </ProtectedRoute>
          }></Route>


          <Route path='/users/view' element={
            <ProtectedRoute user={token}>
              <View_user />
            </ProtectedRoute>
          }></Route>


<Route path='/users/all' element={
            <ProtectedRoute user={token}>
              <Users />
            </ProtectedRoute>
          }></Route>



          <Route path='/appointments/createclient' element={
            <ProtectedRoute user={token}>
              <Consultant_appointment />
            </ProtectedRoute>
          }></Route>


<Route path='/appointments/createconsultant' element={
            <ProtectedRoute user={token}>
              <Consultant_appointment />
            </ProtectedRoute>
          }></Route>



          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile_page />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments/list" element={<Appoinment_list />} />
          {/* <Route path="/appointments/createconsultant" element={<Appoinment_list />} />
          <Route path="/appointments/createclient" element={<Appoinment_list />} /> */}

        </Routes>
      </div>
    </Router>

  );
}




export default App;
