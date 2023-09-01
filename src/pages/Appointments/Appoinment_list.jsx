import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Admin_header from '../../components/Admin_header';
import Consultant_header from '../../components/Consultant_header';
import axios from "axios";
import Appointment_table from '../../components/Appointments_table';

export default function () {
    const [filter, setFilter] = useState('all');
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <div className="h-screen bg-purple-300">
                {user.role == 'admin' ?
                    <Admin_header />
                    : null}
                {user.role == 'consultant' ?
                    <Consultant_header />
                    : null}
                {user.role == 'client' ?
                    <Header />
                    : null}
                <div className="flex">
                    <div className='container  w-full mx-auto rounded-lg border-purple-800 bg-white border-2 px-10 py-4 md:mb-4 mt-10 min-h-[500px]'>
                        <div className="flex justify-end">
                            <Select
                                className='w-40'
                                variant="outlined"
                                defaultValue="all"
                                onChange={event => {
                                    setFilter(event.target.value);
                                }}
                            >
                                <MenuItem value="all">All Appointment</MenuItem>
                                <MenuItem value="pending">Pending</MenuItem>
                                <MenuItem value="approved">Approved</MenuItem>
                                <MenuItem value="completed">Completed</MenuItem>
                            </Select>
                        </div>

                        <div className="flex flex-col space-y-4">
                          <Appointment_table filter={filter}/>
                        </div>
                        {/* button */}
                        <div className='flex flex-row justify-between'>
                            <Link to={'/'}>
                                <button
                                    type="submit"
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300"
                                >
                                    Dashboard
                                </button>
                            </Link>
                            <div className='flex'>
                                <Link to={'/appointments/create'}>
                                    <button
                                        type="submit"
                                        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto"
                                    >
                                        New
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
