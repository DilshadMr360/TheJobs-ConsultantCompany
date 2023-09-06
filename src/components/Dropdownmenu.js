import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const logout = (navigate) => {
  // Show SweetAlert2 confirmation dialog
  Swal.fire({
    title: 'Do you want to logout?',
    showCancelButton: true,
    confirmButtonText: 'Yes, logout',
    cancelButtonText: 'No, cancel',
    icon: 'warning',
  }).then((result) => {
    if (result.isConfirmed) {
      // User clicked "Yes, logout"
      console.log('Logging out...');

      // Send a logout request to your API
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      };
      axios.post('http://localhost:8000/api/logout', null, { headers })
        .then(response => {
          console.log('Logged out');
        })
        .catch(error => {
          console.log(error);
        });

      // Remove user data from local storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');

      // Navigate to the login page
      navigate('/login');
    }
  });
};

const DropdownMenu = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'logout') {
      // Call the logout function with navigation
      logout(navigate);
    }
  };

  return (
    <div className="absolute top-16 right-3 bg-slate-200 border-2 border-gray-300 rounded-md shadow-md min-w-[180px] z-10">
      <Link to="/profile">
        <div
          className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-slate-400"
          onClick={() => handleOptionClick('profile')}
        >
          Profile
        </div>
      </Link>
      <div
        className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-gray-400"
        onClick={() => handleOptionClick('logout')}
      >
        Logout
      </div>
    </div>
  );
};

export default DropdownMenu;
