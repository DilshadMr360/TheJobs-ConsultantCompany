import React ,{useState}from 'react';
import { Link } from "react-router-dom";


const DropdownMenu = ({ onClose }) => {
  const handleOptionClick = (option) => {
    // Handle option click logic here (e.g., navigate, logout, etc.)
    onClose(); // Close the dropdown after an option is clicked
  };

  return (
    <div className="absolute top-16 right-3 bg-purple border-2 border-gray-300 rounded-md shadow-md min-w-[180px] z-10">
      <Link to={'/profile-page'}>
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

const styles = {
 
};

export default DropdownMenu;