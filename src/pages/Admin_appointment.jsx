import React, { useState } from 'react';
import Header from "../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import Admin_header from '../components/Admin_header';
import MenuItem from '@mui/material/MenuItem';

export default function () {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    const [emailError, setEmailError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [jobTitleError, setJobTitleError] = useState('');
    const [dateError, setDateError] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setDateError('');
    }

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setCountryError('');
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError('');
    };

    const handleJobTitleChange = (event) => {
        const value = event.target.value;
        setJobTitle(value);
        setJobTitleError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (!email) {
            setEmailError('Please enter your email.');
            valid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        }

        if (!selectedCountry) {
            setCountryError('Please select a country.');
            valid = false;
        }

        if (!jobTitle) {
            setJobTitleError('Please enter your job title.');
            valid = false;
        }

        if (!selectedDate) {
            setDateError('Please select a date.');
            valid = false;
        }

        if (valid) {
            // Your form submission logic here
        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <>
            <Admin_header />

            <div className="user-navbar">
            </div>

            <div className="bg-purple-300 min-h-screen flex items-center justify-center">
                <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 md:mt-3 '>
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
                                    value={jobTitle}
                                    onChange={handleJobTitleChange}
                                />
                                {jobTitleError && <p className="text-red-500">{jobTitleError}</p>}
                            </div>

                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="email">Email</label>
                                <TextField
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {emailError && <p className="text-red-500">{emailError}</p>}
                            </div>
                        </div>

                        <div className='md:flex md:justify-between md:w-full'>
                            <div className='md:w-6/12 md:ml-2'>
                                <label htmlFor="appointmentDateTime">Appointment Date & Time</label>
                                <DatePicker
                                    id="Date"
                                    name="Date"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    placeholderText="Select a date"
                                    className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-72  h-[55px]'
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                                {dateError && <p className="text-red-500">{dateError}</p>}
                            </div>



                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="prefercountry">Country</label>
                                <Select
                                    id="country"
                                    name="country"
                                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px]"
                                    variant="outlined"
                                    displayEmpty
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                >
                                    <MenuItem disabled value="">
                                        <em>Select a country</em>
                                    </MenuItem>
                                    <MenuItem value="canada">Canada</MenuItem>
                                    <MenuItem value="dubai">Dubai</MenuItem>
                                    <MenuItem value="us">US</MenuItem>
                                    <MenuItem value="maldives">Maldives</MenuItem>
                                </Select>
                                {countryError && <p className="text-red-500">{countryError}</p>}
                            </div>
                        </div>

                        <div className='md:flex md:justify-between md:w-full'>
                      
                        </div>

                        <div>
                            <h4 className="text-gray-500 pb-2 border-b border-gray-500 font-bold inline-block">Schedule</h4>
                        </div>

                        <div className='flex flex-row justify-between'>
                            <div className='flex justify-start'>
                                <Link to={'/appointment-list'}>
                                    <button                     
                                        type="submit"
                                        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                    >
                                        Back 
                                    </button>
                                </Link>
                            </div>
                            <div className='flex'>
                                <button                     
                                    type="submit"
                                    className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                >
                                    Save 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
