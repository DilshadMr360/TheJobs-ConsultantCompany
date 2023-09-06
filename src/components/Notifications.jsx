import React, { useState, useEffect } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';  


const Notifications = () => {

  const [notifications, setNotifications] = useState([]);

    const navigate = useNavigate();
    const fetchNotifications = () => {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      };
      axios.get("http://localhost:8000/api/notifications",{ headers })

        .then(response => {
          console.log(response.data);
          setNotifications(response.data.notifications);
        })
        .catch(error => {
          console.log(error);
          // display error message in UI with setError
        });
    }
  
    useEffect(() => {
      fetchNotifications();
    });

   
  
    return (
      <div className="absolute top-16 right-32 bg-slate-200 border-2 border-gray-300 rounded-md shadow-md min-h-[300px] p-3  w-4/12 z-10">
      {notifications?.length > 0 ? notifications.map((notification) => (
        <div className='border-2 border-gray-500 rounded-lg px-4 py-4 mb-4'>
          <p>{notification.message}</p>
          <p>{notification.created_at}</p>
        </div>
      )) : "You have no notifications"}
      </div>
    );
  };
  
  export default Notifications;
  