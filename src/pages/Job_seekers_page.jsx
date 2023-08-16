import React, { useState } from 'react';
import Header from "../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";

export default function () {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    }

    return (
        <>
            <div className="user-navbar">
                <Header />
            </div>

            <div className="bg-purple-300 min-h-screen flex items-center justify-center">
                <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 '>
                    <div>
                        <h4 className="text-gray-500 pb-2 border-b border-gray-500 font-bold inline-block">Your Upcoming Appointment</h4>
                    </div>

                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <div className='md:flex md:justify-between md:w-full'>
                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="jobtitle">Job Field</label>
                                <TextField
                                    id="jobtitle"
                                    name="jobtitle"
                                    placeholder="Enter Your Job Title"
                                    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
                                />
                            </div>
                            
                            <div className='md:w-6/12 md:ml-2'>
                                <label htmlFor="prefercountry">Country</label>
                                <Select
                                    id="country"
                                    name="country"
                                    value=""
                                    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
                                >
                                    <option value="UK">UK</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Quwait">Quwait</option>
                                </Select>
                            </div>
                        </div>

                        {/* ... (similar responsive adjustments for other form fields) */}

                        <div className='md:flex md:justify-between md:w-full'>
                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="date">Date</label>
                                <div>
                                    <DatePicker
                                        id="Date"
                                        name="Date"
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        placeholderText="Select a date"
                                        className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                            </div>
                            <div className='md:w-6/12 md:ml-2'>
                                <label htmlFor="status">Status</label>
                             <Select
    id="status"
    name="status"
    value=""
    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
    style={{ minWidth: '120px' }} // Adjust the width as needed
>
    <option value="Pending">Pending</option>
    <option value="Approved">Approved</option>
    <option value="Done">Done</option>
</Select>

                            </div>
                        </div>

                        <div className='md:flex md:justify-between md:w-full'>
                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="consultantName">Consultant Name</label>
                                <TextField
                                    id="consultantName"
                                    name="consultantName"
                                    placeholder="Enter Consultant Name"
                                    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
                                />
                            </div>
                            <div className='md:w-6/12 md:ml-2'>
                                <label htmlFor="appointmentDateTime">Appointment Date & Time</label>
                                <DatePicker
                                    id="Date"
                                    name="Date"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    placeholderText="Select a date"
                                    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </div>
                        </div>

                        <div>
                        <h4 className="text-gray-500 pb-2 border-b border-gray-500 font-bold inline-block">Schedule</h4>
                    </div>

                    <div>
                        <h4 className="text-gray-400 text-center text-2xl py-10 px-10">Your Appointment is Pending </h4>
                    </div>

                        <div className='flex flex-row justify-end'>
                         
                            <div className='flex'>

                        <Link to={'/create-new-appointment'}>
                            <button                     
                                type="submit"
                                className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                            >
                                New 
                            </button>
                            </Link>
                            <Link to={'/all-appointment'}>
                            <button
                                type="submit"
                                className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-2 w-32"
                            >
                                All 
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
