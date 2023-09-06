import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Admin_header from '../../components/Admin_header';
import axios from "axios";
import Appointment_table from '../../components/Appointments_table';



const Admin_dashboard = (props) => {

  const [appointments, setAppointments] = useState([]);
  const [dashboard, setDashboard] = useState([]);

  const fetchDashboard = () => {
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
    };
    axios.get("http://localhost:8000/api/dashboard", { headers })
        .then(response => {
            console.log(response.data);
            setDashboard(response.data.dashboard);
        })
        .catch(error => {
            console.log(error);
            // display error message in UI with setError
        });
}

  useEffect(() => {
      fetchDashboard();
  }, []);
  
  return (
    <>
      <div className='bg-purple-300 min-h-screen'>
      <Admin_header />
        <div className="container mx-auto">
          <div className='md:mx-5 md:mt-5'>
            <div className='flex flex-wrap justify-center flex-row gap-2 md:mt-5'>
            <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Total Users</h1>
                <h1 className='text-center font-bold'>{dashboard.users_total}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Consultants</h1>
                <h1 className='text-center font-bold'>{dashboard.users_consultant}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Job Seekers</h1>
                <h1 className='text-center font-bold'>{dashboard.users_client}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Admins</h1>
                <h1 className='text-center font-bold'>{dashboard.users_admin}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Appointments</h1>
                <h1 className='text-center font-bold'>{dashboard.appointments_count}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Today</h1>
                <h1 className='text-center font-bold'>{dashboard.appointments_today}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Approved</h1>
                <h1 className='text-center font-bold'>{dashboard.appointments_approved}</h1>
              </div>
              <div className='py-10 bg-purple-400 rounded-lg min-w-[120px] overflow-hidden'>
                <h1 className='text-center font-bold'>Pending</h1>
                <h1 className='text-center font-bold'>{dashboard.appointments_pending}</h1>
              </div>
            </div>
          </div>

          <div className='border-2  px-5 mt-5 pb-5 w-full'>
            <h1 className='justify-center text-purple-950 font-bold text-2xl text-center md:mt-5'>YOUR RECENT APPLICATIONS</h1>
            <div className="overflow-auto">
              <Appointment_table/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default Admin_dashboard;