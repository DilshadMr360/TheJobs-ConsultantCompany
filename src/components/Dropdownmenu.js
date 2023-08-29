import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const showAlert = () => {
  Swal.fire({
      title: 'Do you want to Logout the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
};

const logout = (navigate) => {
  console.log("Logging out ....");
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
  };
  axios.post('http://localhost:8000/api/logout', null, { headers })
    .then(response => {
      if (response.data.success) {
        console.log("Logged out");
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        showAlert(); // Calling showAlert directly
        navigate("/login");
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
      <Link to="/profile">
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
