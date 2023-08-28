import React, { useState } from 'react';
import { IoAirplaneSharp, IoHomeOutline, IoPersonCircleOutline } from 'react-icons/io5'; 
import DropdownMenu from './Dropdownmenu'; // 
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-purple-900 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <IoAirplaneSharp size={24} color="white" className="mr-4" />
          <Link to={'/'}>
            <IoHomeOutline size={24} color="white" className="mr-4" />
          </Link>
          <span className="text-white font-bold text-2xl">Wecome to Jobs</span>
        </div>
        <div className="flex items-center">
          <span className="text-white mr-4">{user.name}</span>
          <button onClick={handleDropdownToggle} className="flex items-center">
            <IoPersonCircleOutline size={30} color="white" />
          </button>
          {showDropdown && <DropdownMenu />}
        </div>
      </div>
    </header>
  );
};
export default Header;
