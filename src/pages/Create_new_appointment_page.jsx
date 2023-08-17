import React, { useState } from 'react';
import Header from "../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';


export default function () {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    // const [selectedCountry, setSelectedCountry] = useState(''); // State to store selected country

    // const handleCountryChange = (event) => {
    //   setSelectedCountry(event.target.value); // Update selectedCountry when an option is selected
    // };

 

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
                        <h4 className="text-gray-500 pb-2  font-bold inline-block">Book an Appointment</h4>
                        <hr className="border-1 border-purple-800"/>
                    
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

                        </div>



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
                                        className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-72 h-[55px]'
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='md:flex md:justify-between md:w-full'>

                        <div className='md:w-6/12 md:ml-2'>
                                <label htmlFor="prefercountry">Country</label>

                                <Select
                                id="country"
                                name="country"
                                className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px] '
                                variant="outlined"
                                defaultValue="all"
                        >
                            <MenuItem value="all">Canada</MenuItem>
                            <MenuItem value="pending">Dubai</MenuItem>
                            <MenuItem value="approved">US</MenuItem>
                            <MenuItem value="completed">Maldives</MenuItem>
                        </Select>
                    

                            </div>
                        </div>


                        <div className='flex flex-row w-full justify-between '>

                            <div>
                                <h1 className='text-gray-500'>Appointment slots available for selected criteria</h1>
                            </div>
                            <div className=''>
                        
                            </div>
                        </div>




                        {/* Buttons */}

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
                            <Link to={'/'}>
                                <button
                                    type="submit"
                                    className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-2 w-32"
                                >
                                    Submit
                                </button>
                                </Link>
                            </div>
                        </div>
                        {/* Button End */}
                    </form>
                </div>
            </div>
        </>
    )
}
