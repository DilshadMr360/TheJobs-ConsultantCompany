import React, { useState, useEffect, useRef } from 'react';
import { IoAirplaneSharp, IoHomeOutline, IoPersonCircleOutline, IoNotifications } from 'react-icons/io5';
import DropdownMenu from './Dropdownmenu';
import Notifications from './Notifications';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add a click event listener to the document body
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Remove the click event listener when the component unmounts
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    // Check if the click event occurred outside of the dropdown area
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
      setShowNotification(false);
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    setShowNotification(false);
  };

  const handleNotificationsToggle = () => {
    setShowNotification(!showNotification);
    setShowDropdown(false);
  };

  return (
    <header className="bg-purple-900 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <IoAirplaneSharp size={24} color="white" className="mr-4" />
          <Link to={'/'}>
            <IoHomeOutline size={24} color="white" className="mr-4" />
          </Link>
          <span className="text-white font-bold text-2xl">Jobs Consultant Company</span>
        </div>
        <div className="flex items-center" ref={dropdownRef}>
          <div>
            <Notifications />
          </div>
          <span className="text-white mr-5">{user.name}</span>
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
