import React, { useState, useEffect, useRef } from 'react';
import { IoNotifications, IoBriefcaseOutline, IoPersonCircleOutline } from 'react-icons/io5'; 
import DropdownMenu from './Dropdownmenu';
import Notifications from './Notifications';
import { Link } from 'react-router-dom';

const Admin_header = () => {
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
        <div className="flex items-center gap-4">
          <IoBriefcaseOutline size={24} color="white" className="mr-4" />
          <Link to={'/'}>
            <span className="text-white">Dashboard</span>
          </Link>
          <Link to={'/users/all'}>
            <span className="text-white">Users</span>
          </Link>
          <Link to={'/appointments/list'}>
            <span className="text-white">Appointments</span>
          </Link>
        </div>
        <div className="flex items-center" ref={dropdownRef}>
          <div>
            <button onClick={handleNotificationsToggle}>
              <IoNotifications size={28} color="white" className="mx-5" />
            </button>
            {showNotification && <Notifications />}
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

export default Admin_header;
