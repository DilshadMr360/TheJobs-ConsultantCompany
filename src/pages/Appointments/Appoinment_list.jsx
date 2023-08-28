import React, { useState } from 'react';
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Admin_header from '../../components/Admin_header';
import axios from "axios";


export default function () {
    return (
        <>
            <Admin_header />

            <div className="bg-purple-300 min-h-screen flex items-center justify-center">
                <div className='container w-full mx-auto rounded-lg border-purple-800 bg-white border-2 px-10 py-4 md:mb-4'>
                    <div className="flex justify-end">
                        <Select
                        className='w-40'
                            variant="outlined"
                            defaultValue="all"
                        >
                            <MenuItem value="all">All Appointment</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="approved">Approved</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Select>
                    </div>

                    <form className="flex flex-col space-y-4 ">



                    <div className="flex space-x-4 justify-center  w-full">
        <div className="flex border-2 border-white border-b-gray-300 p-2 rounded-md w-full text-gray-500">
         <h1 className='w-1/12'>Status</h1>
         <h1 className='w-2/12'>Job Seeker</h1>
         <h1 className='w-2/12'>Appointment</h1>
         <h1 className='w-2/12'>Consultant</h1>
         <h1 className='w-2/12' >Appoint date</h1>
         <h1 className='w-2/12 ml-4'>Action</h1>
        
        </div>
       
    </div>


        {/* view row component  */}

    <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/12'>🕑</h1>
         <h1 className='w-2/12'>John Doe Phil</h1>
         <h1 className='w-2/12'>UX-Designer-Iceland Booking Date</h1>
         <h1 className='w-2/12'>Macclum Harris</h1>
         <h1 className='w-2/12' >8/15/2022 18:00</h1>

  <div className='flex border-2 gap-5 ml-4'>
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

        {/* view row component  */}

        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/12'>✅</h1>
         <h1 className='w-2/12'>John Doe Phil</h1>
         <h1 className='w-2/12'>UX-Designer-Iceland Booking Date</h1>
         <h1 className='w-2/12'>Macclum Harris</h1>
         <h1 className='w-2/12' >8/15/2022 18:00</h1>

  <div className='flex border-2 gap-5 ml-4'>
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


        {/* view row component  */}
        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/12'>🕑</h1>
         <h1 className='w-2/12'>John Doe Phil</h1>
         <h1 className='w-2/12'>UX-Designer-Iceland Booking Date</h1>
         <h1 className='w-2/12'>Macclum Harris</h1>
         <h1 className='w-2/12' >8/15/2022 18:00</h1>

  

        </div>
       
    </div>

     

        {/* view row component  */}
        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/12'>✅</h1>
         <h1 className='w-2/12'>John Doe Phil</h1>
         <h1 className='w-2/12'>UX-Designer-Iceland Booking Date</h1>
         <h1 className='w-2/12'>Macclum Harris</h1>
         <h1 className='w-2/12' >8/15/2022 18:00</h1>

  <div className='flex border-2 gap-5 ml-4'>
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




        {/* view row component  */}

        

    {/* button */}

    <div className='flex flex-row justify-between'>
    <Link to={'/admin'}>


                            <button
                                type="submit"
                                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300  w-32"
                            >
                               
                                Dashboard
                            </button>
                             </Link>
                            <div className='flex'>

                          <Link to={'/appointments/create'}>
                            <button
                                type="submit"
                                className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                            >
                                New 
                            </button>
                          </Link>
                           
                            </div>
                        </div>

</form>

                </div>
            </div>
        </>
    )
}
