import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const logout = (navigate) => {
  console.log("Logging out ....");
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  };
  axios.post('http://localhost:8000/api/logout', null, { headers })
    .then(response => {
      if (response.data.success) {
        console.log("Logged out");
        localStorage.removeItem('token');
        navigate("/");
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const DropdownMenu = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // Handle option click logic here (e.g., navigate, logout, etc.)
    if (option === 'logout') {
      logout(navigate);
    }
  };

  return (
    <div className="absolute top-16 right-3 bg-purple border-2 border-gray-300 rounded-md shadow-md min-w-[180px] z-10">
      <Link to="/profile-page">
        <div
          className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-gray-200"
          onClick={() => handleOptionClick('profile')}
        >
          Profile
        </div>
      </Link>
      <div
        className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-gray-200"
        onClick={() => handleOptionClick('logout')}
      >
        Logout
      </div>
      <div
        className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-gray-200"
        onClick={() => handleOptionClick('notification')}
      >
        Notification
      </div>
    </div>
  );
};

export default DropdownMenu;
