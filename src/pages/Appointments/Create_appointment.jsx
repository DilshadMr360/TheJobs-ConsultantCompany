import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import { Link, useNavigate } from "react-router-dom";
import Admin_header from '../../components/Admin_header';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import Swal from "sweetalert2";
import Consultant_header from '../../components/Consultant_header';
import Header from '../../components/Header';


export default function () {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [countries, setCountries] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [selectedconsultant, setSelectedConsultant] = useState(null);
    const [consultants, setConsultants] = useState([]);
    const [consultantError, setConsultantError] = useState([]);
    const [countryError, setCountryError] = useState('');
    const [jobError, setJobTitleError] = useState('');
    const [dateError, setDateError] = useState('');
    const [clients, setClients] = useState('');
    const [clientsError, setClientsError] = useState('');

    const [successAlertVisible, setSuccessAlertVisible] = useState(false);


    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        axios.get('http://localhost:8000/api/countries')
            .then(response => {
                setCountries(response.data.countries);
            });

        axios.get('http://localhost:8000/api/jobs')
            .then(response => {
                setJobs(response.data.jobs);
            });
        if(user.role == 'admin')
        {
            fetchClients();
        }
    }, []);

    useEffect(() => {
        fetchConsultants();


    }, [selectedJob, selectedCountry]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setDateError('');
    }

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setCountryError('');
    };

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(clients);
        let valid = true;

        if (!selectedCountry) {
            setCountryError('Select a country.');
            valid = false;
        } else {
            setCountryError('');
        }

        if (!selectedJob) {
            setJobTitleError('Please enter your job title.');
            valid = false;
        } else {
            setJobTitleError('')
        }

        if (!selectedDate) {
            setDateError('Please select a date.');
            valid = false;
        } else {
            setDateError('');
        }

        if (!selectedconsultant) {
            setConsultantError('Select a Consultant.');
            valid = false;
        } else {
            setConsultantError('');
        }

        if (!selectedClient && user.role == 'admin') {
            setClientsError('Choose Client Name');
            valid = false;
        } else {
            setClientsError('');
        }


        if (valid) {
            // Valid form data, show the confirmation dialog
            Swal.fire({
                title: "Do you want to create an appointment?",
                showCancelButton: true,
                confirmButtonText: "Yes, add appointment",
                cancelButtonText: "No, cancel",
                icon: "question",
            }).then((result) => {
                if (result.isConfirmed) {
                    // User confirmed, proceed with user creation

                    console.log("Creating appointment ....");
                    const headers = {
                        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                    };

                    const appointmentData = {
                        country_id: selectedCountry,
                        job_id: selectedJob,
                        consultant_id: selectedconsultant,
                        client_id: selectedClient,
                        time: selectedDate
                    };

                    axios.post('http://localhost:8000/api/appointments', appointmentData, { headers })
                        .then(response => {
                            if (response.data.success) {
                                console.log('Appointment saved successfully');
                                setSuccessAlertVisible(true);
                                // Handle success, maybe redirect or show a success message
                                navigate("/appointments/list");
                                localStorage.removeItem('token');
                                showAlert(); // Call the showAlert function here
                            }
                        })
                        .catch(error => {
                            console.error('Error saving appointment:', error);
                            // Handle error, maybe show an error message
                        });
                }
            });
        }

        // Define showAlert function outside of the if block
        const showAlert = () => {
            Swal.fire({
                title: "Success",
                text: "Appointment created successfully",
                icon: "success",
            });
        };
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const fetchConsultants = () => {
        axios.get(`http://localhost:8000/api/consultants?job_id=` + selectedJob + `&country_id=` + selectedCountry)
            .then(response => {
                setConsultants(response.data.users);
            });
    }

    const fetchClients = () => {
        const headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };
        axios.get("http://localhost:8000/api/users?role=client", { headers })
          .then(response => {
            setClients(response.data.users);
          })
          .catch(error => {
            console.log(error);
          });
    }

    return (
        <>
            {user.role == 'admin' ?
                <Admin_header />
                : null}
            {user.role == 'consultant' ?
                <Consultant_header />
                : null}
            {user.role == 'client' ?
                <Header />
                : null}

            <div className="user-navbar">
            </div>


            {/* Success alert */}
            {successAlertVisible && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your application has been successfully created.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setSuccessAlertVisible(false)}>
                        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <title>Close</title>
                            <path d="M14.348 14.849a1 1 0 01-1.415 1.414l-2.122-2.122-2.122 2.122a1 1 0 11-1.415-1.414l2.122-2.122-2.122-2.122a1 1 0 111.415-1.414l2.122 2.122 2.122-2.122a1 1 0 111.415 1.414l-2.122 2.122 2.122 2.122z" />
                        </svg>
                    </span>
                </div>
            )}
            <div className="bg-purple-300 min-h-screen flex items-center justify-center">
                <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 md:mt-3 '>
                    <div>
                        <h4 className="text-gray-500 pb-2 border-b border-gray-500 font-bold inline-block">Your Upcoming Appointment</h4>
                    </div>

                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

                        {user.role == 'admin' ?
                            <div className='md:flex md:justify-between md:w-full'>
                                <div className='mb-4 w-[348px] md:mr-2 md:mt-3'>
                                    <label htmlFor="jobtitle">This appointment is for</label>
                                    <Select
                                        value={selectedClient}
                                        onChange={(e) => setSelectedClient(e.target.value)}
                                        className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-[305px] h-[56px]"
                                        variant="outlined"
                                    >
                                        {clients.length > 0 ? clients.map((client) => (
                                            <MenuItem key={client.id} value={client.id}>
                                                {client.name}
                                            </MenuItem>
                                        )) :
                                            <MenuItem key={''} value={''} selected={true}>
                                                No job seekers
                                            </MenuItem>
                                        }
                                    </Select>
                                    {clientsError && <p className="text-red-500">{clientsError}</p>}
                                </div>
                            </div> 
                        : null}

                        <div className='md:flex md:justify-between md:w-full'>
                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="jobtitle">Job Field</label>
                                <Select
                                    value={selectedJob}
                                    onChange={(e) => setSelectedJob(e.target.value)}
                                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px]"
                                    variant="outlined"
                                >
                                    {jobs.map((job) => (
                                        <MenuItem key={job.id} value={job.id}>
                                            {job.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {jobError && <p className="text-red-500">{jobError}</p>}
                            </div>

                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="prefercountry">Country</label>
                                <Select
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px]"
                                    variant="outlined"
                                >
                                    {countries.map((country) => (
                                        <MenuItem key={country.id} value={country.id}>
                                            {country.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {countryError && <p className="text-red-500">{countryError}</p>}
                            </div>

                        </div>

                        <div className='md:flex md:justify-between md:w-full'>

                            <div className='mb-4 md:w-6/12 md:mr-2'>
                                <label htmlFor="jobtitle">Consultant</label>
                                <Select
                                    value={selectedconsultant}
                                    onChange={(e) => setSelectedConsultant(e.target.value)}
                                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px]"
                                    variant="outlined"
                                    disabled={!(selectedCountry && selectedJob)}
                                >
                                    {consultants.length > 0 ? consultants.map((consultant) => (
                                        <MenuItem key={consultant.id} value={consultant.id}>
                                            {consultant.name}
                                        </MenuItem>
                                    )) :
                                        <MenuItem key={''} value={''} selected={true}>
                                            No Consultants available for this criteria
                                        </MenuItem>
                                    }
                                </Select>
                                {consultantError && <p className="text-red-500">{consultantError}</p>}
                            </div>


                            <div className='md:w-6/12 md:ml-2'>
                                <label htmlFor="appointmentDateTime">Appointment Date & Time</label>
                                <DatePicker
                                    id="Date"
                                    name="Date"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    placeholderText="Select a date"
                                    className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-[305px] h-[55px] md:mr-2'
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    minDate={Date.now()}
                                />
                                {dateError && <p className="text-red-500">{dateError}</p>}
                            </div>



                        </div>

                        <div className='md:flex md:justify-between md:w-full'>

                        </div>

                        <div className='flex flex-row justify-between'>
                            <div className='flex justify-start'>
                                <Link to={'/appointments/list'}>
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
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
