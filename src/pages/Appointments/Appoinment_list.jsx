import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Admin_header from '../../components/Admin_header';
import Consultant_header from '../../components/Consultant_header';
import Appointment_table from '../../components/Appointments_table';
import axios from 'axios';

export default function () {
    const [filter, setFilter] = useState('all');
    const [filterSearch, setFilterSearch] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));

    const fetchAppointments = () => {
        const headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };
    
        axios.get("http://localhost:8000/api/appointments?status=" + filter + "&search=" + filterSearch, { headers })

          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
            // display error message in UI with setError
          });
          console.log("Fetching appointments with filter:", filter, "and filterSearch:", filterSearch);
      }
    
      useEffect(() => {
        fetchAppointments();
      }, [filter, filterSearch]);
    


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
                        <div className="flex justify-between mb-1">
                            <div className="flex justify-start ">
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
                                </Select>
                            </div>
                            <div className="flex justify-end border border-gray-300 p-3 rounded">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={filterSearch}
                                    onChange={(e) => setFilterSearch(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <Appointment_table filter={filter} filterSearch={filterSearch} />


                        </div>
                        {/* button */}
                        <div className='flex flex-row justify-between md:mt-5'>
                            <Link to={'/'}>
                                <button
                                    type="submit"
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 w-32"
                                >
                                    Dashboard
                                </button>
                            </Link>
                            {user.role != 'consultant' ?
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

                                : null}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
