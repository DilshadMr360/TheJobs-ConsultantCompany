import React, { useState } from 'react';
import { IoAirplaneSharp, IoHomeOutline, IoPersonCircleOutline } from 'react-icons/io5'; 
import DropdownMenu from './Dropdownmenu'; // 

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-purple-900 p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <IoAirplaneSharp size={24} color="white" className="mr-4" />
        <IoHomeOutline size={24} color="white" className="mr-4" />
        {/* <span className="text-black" style={styles.nameText}>Home</span> */}
      </div>
      <div className="flex items-center">
        <span className="text-black mr-4">Mohamed Dilshad</span>
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

export default Header;
