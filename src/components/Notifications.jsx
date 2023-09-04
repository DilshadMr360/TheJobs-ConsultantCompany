
import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';  


const Notifications = () => {
    const navigate = useNavigate();
  

   
  
    return (
      <div className="absolute top-16 right-32 bg-slate-200 border-2 border-gray-300 rounded-md shadow-md  w-4/12 z-10">
    
          <div
            className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-gray-200 "
          >
          <div className='border-2 border-gray-400 rounded-md bg-slate-200 px-5 py-5 '>
            <h2 className=' text-start text-sm'>Your have Approved John's Appointment Request and we sent the update to him</h2>
            <h3 className='text-sm '>12 hours</h3>

          </div>
          <div className='border-2 border-gray-400 rounded-md bg-slate-200 px-5 py-5 md:mt-2'>
            <h2 className=' text-start text-sm'>Your have Approved John's Appointment Request and we sent the update to him</h2>
            <h3 className='text-sm '>12 hours</h3>

          </div>
          </div>

  
  
      </div>
    );
  };
  
  export default Notifications;
  