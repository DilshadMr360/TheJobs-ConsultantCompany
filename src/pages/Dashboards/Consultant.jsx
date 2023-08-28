import React from 'react';
import { Link } from 'react-router-dom';
import Consultant_header from '../../components/Consultant_header';


const Consultant_dashboard = (props) => {
  return (
    <>
      <Consultant_header /> 
       
      {/* COntainer */}

      <div className='bg-purple-400  h-screen'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-3/12 md:mx-5 md:mt-5'>
            <div className='flex flex-col md:flex-row gap-2'>
              <div className='w-full md:w-44 py-10 px-10 bg-purple-500 rounded-lg'>
                <h1 className='text-center font-bold'>Consultants</h1>
                <h1 className='text-center font-bold'>13</h1>
              </div>
              <div className='w-full md:w-44 py-10 px-10 bg-purple-500 rounded-lg'>
                <h1 className='text-center font-bold'>Job Seekers</h1>
                <h1 className='text-center font-bold'>123</h1>
              </div>
            </div>

          </div>

          <div className='text-center border-2  px-5  mt-5 md:pb-5 w-full '>
            <h1 className='justify-center text-purple-950 font-bold text-2xl md:mt-5'>YOUR RECENT APPLICATIONS</h1>
            <div className="flex border-2 border-gray-300 p-2 rounded-md md:mt-5 px-5 ">


              <h1 className='w-1/12'>🕑</h1>
              <h1 className='w-4/12'>John Doe Phil</h1>
              <h1 className='w-4/12'>UX-Designer-Iceland Booking Date</h1>
              <h1 className='w-2/12' >8/15/2022 18:00</h1>

            </div>

            <div className="flex border-2 border-gray-300 p-2 rounded-md md:mt-5 px-5 ">


              <h1 className='w-1/12'>✅</h1>
              <h1 className='w-4/12'>John Doe Phil</h1>
              <h1 className='w-4/12'>UX-Designer-Iceland Booking Date</h1>
              <h1 className='w-2/12' >8/15/2022 18:00</h1>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};
  
export default Consultant_dashboard;