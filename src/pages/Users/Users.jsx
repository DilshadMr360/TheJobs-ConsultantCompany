import React, { useState } from 'react';
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Admin_header from '../../components/Admin_header';
import axios from "axios";


export default function () {

    return (
        <>
            < Admin_header />

            <div className="bg-purple-300 min-h-screen flex items-center justify-center ">
                <div className='container w-full  mx-auto rounded-lg border-purple-800 bg-white border-2 px-10 py-4 md:mb-24  md:mt-1'>

                    <div className='flex flex-row justify-between'>
                        <div className="flex items-start justify-start w-40">
                        <Select
                                id="jobrole"
                                name="jobrole"
                                className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px] '
                                variant="outlined"
                                defaultValue="all"
                        >
                            <MenuItem value="all">User Roles</MenuItem>
                            <MenuItem value="pending">Admin</MenuItem>
                            <MenuItem value="approved">Consultants</MenuItem>
                            <MenuItem value="completed">Job Seekers</MenuItem>
                        </Select>

                        </div>


                       


                        <div className="flex flex-col items-end justify-end border border-gray-300 p-3 rounded">
    <input
        type="text"
        id="search"
        placeholder="Enter your search"    
    />
</div>




                    </div>

                    

                    <form className="flex flex-col space-y-4 ">



                        <div className="flex space-x-4 justify-center">
                            <div className="flex border-2 border-white border-b-gray-300 p-2 rounded-md w-full text-gray-500">
                                <h1 className='w-3/12'>Name</h1>
                                <h1 className='w-3/12' >Email</h1>
                                <h1 className='w-2/12'>Contact Number</h1>
                                <h1 className='w-2/12'>Job Role</h1>
                                <h1 className='w-2/12'>Action</h1>

                            </div>

                        </div>


                        {/* view row component  */}

                        <div className="flex space-x-4 justify-center w-full text-gray-500">
                            <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
                                <h1 className='w-3/12'>Albert John Pieris</h1>
                                <h1 className='w-3/12' >john123@gmail.com</h1>
                                <h1 className='w-2/12'>0776543216</h1>
                                <h1 className='w-2/12'>Consultant</h1>
                                <Link to={'/edit-users'}>
                              <button
                                    type="submit"
                                    className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Edit User 
                                </button>
                                </Link>
                            </div>

                        </div>


                        {/* view row component  */}

                        <div className="flex space-x-4 justify-center w-full text-gray-500">
                            <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
                                <h1 className='w-3/12'>Albert John Pieris</h1>
                                <h1 className='w-3/12' >john123@gmail.com</h1>
                                <h1 className='w-2/12'>0776543216</h1>
                                <h1 className='w-2/12'>Consultant</h1>
                                <Link to={'/edit-users'}>
                              <button
                                    type="submit"
                                    className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Edit User 
                                </button>
                                </Link>
                            </div>

                        </div>




                        {/* view row component  */}

                        <div className="flex space-x-4 justify-center w-full text-gray-500">
                            <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
                                <h1 className='w-3/12'>Albert John Pieris</h1>
                                <h1 className='w-3/12' >john123@gmail.com</h1>
                                <h1 className='w-2/12'>0776543216</h1>
                                <h1 className='w-2/12'>Consultant</h1>
                                <Link to={'/edit-users'}>
                              <button
                                    type="submit"
                                    className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Edit User 
                                </button>
                                </Link>
                            </div>

                        </div>



                               
                           
                        {/* view row component  */}

                        <div className="flex space-x-4 justify-center w-full text-gray-500">
                            <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
                                <h1 className='w-3/12'>Albert John Pieris</h1>
                                <h1 className='w-3/12' >john123@gmail.com</h1>
                                <h1 className='w-2/12'>0776543216</h1>
                                <h1 className='w-2/12'>Consultant</h1>
                                <Link to={'/edit-users'}>
                              <button
                                    type="submit"
                                    className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Edit User 
                                </button>
                                </Link>
                            </div>

                        </div>

                        {/* view row component  */}

                        <div className="flex space-x-4 justify-center w-full text-gray-500">
                            <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
                                <h1 className='w-3/12'>Albert John Pieris</h1>
                                <h1 className='w-3/12' >john123@gmail.com</h1>
                                <h1 className='w-2/12'>0776543216</h1>
                                <h1 className='w-2/12'>Consultant</h1>
                                <Link to={'/edit-users'}>
                              <button
                                    type="submit"
                                    className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Edit User 
                                </button>
                                </Link>
                            </div>

                        </div>

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

                            <Link to={'/add-user'}>

                                <button
                                    type="submit"
                                    className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Create a user
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
