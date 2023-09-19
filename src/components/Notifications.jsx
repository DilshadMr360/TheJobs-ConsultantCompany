import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';

const Notifications = ({ }) => {
  const [notifications, setNotifications] = useState([]);
  const [unread, setUnread] = useState(false);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const fetchNotifications = () => {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('authToken')
    };
    axios.get("http://localhost:8000/api/notifications", { headers })
      .then(response => {
        response.data.notifications.forEach(notification => {
          if (!notification.read) {
            setUnread(true)
          }
        });
        // Reverse the order of notifications to show the latest at the top
        setNotifications(response.data.notifications.reverse());
      }).then(() => {
        // mark_read();
      })
      .catch(error => {
        console.log(error);
        // Display error message in UI with setError
      });
  }

  const mark_read = () => {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('authToken')
    };
    axios.get("http://localhost:8000/api/notifications/read", { headers })
      .then(response => {
        setUnread(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    setInterval(() => {
      fetchNotifications();
    }, 5000);  
  }, []);

  return (
    <>
      <button onClick={() => { setPopup(!popup); mark_read(); }} className="relative">
        <IoNotifications size={28} color="white" className="mx-5" />
        {unread ? <div className="absolute top-0 right-6 h-2 w-2 bg-red-500 rounded-full"></div> : null}
      </button>
      {popup ?
        <div className="absolute top-16 right-32 bg-gray-50  rounded-md shadow-md min-h-[300px] w-4/12 z-10 flex flex-col justify-between">
          <div className="overflow-y-auto max-h-[300px] p-3">
            {notifications?.length > 0 ? notifications.map((notification) => (
              <div className='rounded-lg px-4 py-4 mb-4 bg-purple-200 ' key={notification.id}>
                <p>{notification.message}</p>
                <p>{notification.created_at}</p>
              </div>
            )) : <div className='text-start'>
               "You have no notifications"  
               </div>
               }
              
          </div>
          <div className='align-bottom text-right mx-2 my-2 items-end'>
            <button onClick={mark_read} >Mark all as read</button>
          </div>
        </div>
        : null}
    </>
  );
};

export default Notifications;
