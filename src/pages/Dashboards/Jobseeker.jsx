import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Header from '../../components/Header';
import axios from "axios";
import { IoCheckboxSharp, IoTime } from 'react-icons/io5';
import Appointment_table from '../../components/Appointments_table';


const Jobseeker_dashboard = (props) => {

    const [appointments, setAppointments] = useState([]);

    const [selectedDate, setSelectedDate] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));


    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    }

    const fetchAppointments = () => {
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };
        axios.get("http://localhost:8000/api/appointments", { headers })
            .then(response => {
                console.log(response.data);
                setAppointments(response.data.appointments);
            })
            .catch(error => {
                console.log(error);
                // display error message in UI with setError
            });
    }

    useEffect(() => {
        fetchAppointments();
    }, []);



    return (
        <>
            <Header />
            <div className='bg-purple-300 h-screen'>
                <div className="max-w-3xl mx-auto justify-center">
                    <h2 className="text-gray-500 font-bold text-3xl pt-5">
                        Welcome {user.name}
                    </h2>
                </div>
                <div className="flex mt-5">
                    <div className='container w-full max-w-3xl mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 '>
                        <div>
                            <h4 className="text-gray-500 pb-2 border-gray-500 font-bold inline-block">Your Upcoming Appointment</h4>
                            <hr className="border-1 border-purple-800" />
                        </div>

                        <div className="min-h-[400px] md:mt-3">
  <Appointment_table/>
                        </div>

                        <div className='flex flex-row justify-end'>
                            <div className='flex'>

                                <Link to={'/appointments/create'}>
                                    <button
                                        type="submit"
                                        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                    >
                                        New
                                    </button>
                                </Link>
                                <Link to={'/appointments/list'}>
                                    <button
                                        type="submit"
                                        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-2 w-32"
                                    >
                                        All
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

export default Jobseeker_dashboard;