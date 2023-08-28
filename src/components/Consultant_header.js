import React, { useState } from 'react';
import { IoAirplaneSharp, IoBriefcaseOutline, IoPersonCircleOutline } from 'react-icons/io5'; 
import DropdownMenu from './Dropdownmenu'; // 
import { Link } from 'react-router-dom';

const Consultant_header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-purple-900 p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <IoBriefcaseOutline size={24} color="white" className="mr-4" />
        <Link to={'/'}>
        <span className="text-white">Dashboard</span>
        </Link>
        <Link to={'/consultant_appointment/list'}>
        <span className="text-white">Appointments</span>
        </Link>


      </div>
      <div className="flex items-center">
        <span className="text-white mr-4">Consutlant</span>
        <button onClick={handleDropdownToggle} className="flex items-center">
          <IoPersonCircleOutline size={30} color="white" />
        </button>
        {showDropdown && <DropdownMenu />}
      </div>
    </div>
  </header>
  
  );
};

const styles = {

};

export default Consultant_header;
