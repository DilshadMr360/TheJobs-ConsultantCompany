import React from 'react';
import { Link } from 'react-router-dom';
import Admin_header from '../components/Admin_header';


const Admin_page = (props) => {
    return (
      <>
            <Admin_header /> 
            
            <div className='bg-purple-300 w-screen h-screen'>
  <div className='flex flex-col md:flex-row'>
    <div className='w-full md:w-3/12 md:mx-5 md:mt-5'>
      <div className='flex flex-col md:flex-row gap-2'>
        <div className='w-full md:w-44 py-10 px-10 bg-purple-400 rounded-lg'>
          <h1 className='text-center font-bold'>Consultants</h1>
          <h1 className='text-center font-bold'>13</h1>
        </div>
        <div className='w-full md:w-44 py-10 px-10 bg-purple-400 rounded-lg'>
          <h1 className='text-center font-bold'>Job Seekers</h1>
          <h1 className='text-center font-bold'>123</h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-2 md:mt-5'>
        <div className='w-full md:w-44 py-10 px-10 bg-purple-400 rounded-lg'>
          <h1 className='text-center font-bold'>Appointments</h1>
          <h1 className='text-center font-bold'>33</h1>
        </div>
        <div className='w-full md:w-44 py-10 px-10 bg-purple-400 rounded-lg'>
          <h1 className='text-center font-bold'>Today</h1>
          <h1 className='text-center font-bold'>5</h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-2 md:mt-5'>
        <div className='w-full md:w-44 py-10 px-10 bg-purple-400 rounded-lg'>
          <h1 className='text-center font-bold'>Approved</h1>
          <h1 className='text-center font-bold'>13</h1>
        </div>
        <div className='w-full md:w-44 py-10 px-10 bg-purple-400 rounded-lg'>
          <h1 className='text-center font-bold'>Pending</h1>
          <h1 className='text-center font-bold'>20</h1>
        </div>
      </div>
    </div>

    <div className='text-center border-2  px-5 mt-5 pb-5'>
      <h1 className='justify-center text-purple-950 font-bold text-2xl md:mt-5'>YOUR RECENT APPLICATIONS</h1>
      <div className="flex border-2 border-gray-300 p-2 rounded-md md:mt-5 px-5 py-5">


<h1 className='w-2/12'>Pending</h1>
         <h1 className='w-2/12'>John Doe Phil</h1>
         <h1 className='w-3/12'>UX-Designer-Iceland Booking Date</h1>
         <h1 className='w-2/12' >8/15/2022 18:00</h1>



         <div className='flex  gap-5 ml-4'>
         <button
                                    type="submit"
                                    className="- bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Accept
                                </button>
         <button
                                    type="submit"
                                    className=" bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Reject
                                </button>
                                </div>
</div>
      </div>
    </div>
  </div>





      </>
    );
  };
  
  export default Admin_page;