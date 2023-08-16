import React, { useState } from 'react';
import Header from "../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";


export default function () {

    return (
        <>
            <Header />

            <div className="bg-purple-300 min-h-screen flex items-center justify-center">
                <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 '>
                    <div className="flex justify-end">
                        <Select
                            variant="outlined"
                            defaultValue="all"
                        >
                            <MenuItem value="all">All Appointments</MenuItem>
                        </Select>
                    </div>

                    <form className="flex flex-col space-y-4 ">



                    <div className="flex space-x-4 justify-center  w-full">
        <div className="flex border-2 border-white border-b-gray-300 p-2 rounded-md w-full text-gray-500">
         <h1 className='w-1/3'>Appointment</h1>
         <h1 className='w-1/3' >Consultant</h1>
         <h1 className='w-1/3'>Appointment Date</h1>
        
        </div>
       
    </div>


        {/* view row component  */}

    <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/3'>UX-Engieering-Canada <span> 2023-08-08</span></h1>
         <h1 className='w-1/3' >Dailia Lands</h1>
         <h1 className='w-1/3'>2023-08-09 4.17 PM</h1>
        
        
        </div>
       
    </div>

        {/* view row component  */}

        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/3'>UX-Engieering-Canada <span> 2023-08-08</span></h1>
         <h1 className='w-1/3' >Dailia Lands</h1>
         <h1 className='w-1/3'>2023-08-09 4.17 PM</h1>
        
        
        </div>
       
    </div>


        {/* view row component  */}

        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/3'>UX-Engieering-Canada <span> 2023-08-08</span></h1>
         <h1 className='w-1/3' >Dailia Lands</h1>
         <h1 className='w-1/3'>2023-08-09 4.17 PM</h1>
        
        
        </div>
       
    </div>


        {/* view row component  */}

        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/3'>UX-Engieering-Canada <span> 2023-08-08</span></h1>
         <h1 className='w-1/3' >Dailia Lands</h1>
         <h1 className='w-1/3'>2023-08-09 4.17 PM</h1>
        
        
        </div>
       
    </div>


        {/* view row component  */}

        <div className="flex space-x-4 justify-center w-full text-gray-500">
        <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
        <h1 className='w-1/3'>UX-Engieering-Canada <span> 2023-08-08</span></h1>
         <h1 className='w-1/3' >Dailia Lands</h1>
         <h1 className='w-1/3'>2023-08-09 4.17 PM</h1>
        
        
        </div>
       
    </div>

    {/* button */}

    <div className='flex flex-row justify-between'>
    <Link to={'/dashboard'}>

                            <button
                                type="submit"
                                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300  w-32"
                            >
                               
                                Back
                            </button>
                             </Link>
                            <div className='flex'>

                          <Link to={'/create-new-appointment'}>
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
