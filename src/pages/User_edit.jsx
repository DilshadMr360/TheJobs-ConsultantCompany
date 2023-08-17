import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Form, Link, useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker';
import MenuItem from '@mui/material/MenuItem';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import axios from 'axios';
import Admin_header from '../components/Admin_header';


const User_edit = () => {

  let navigate=useNavigate()

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedJobRole, setSelectedJobRole] = useState("admin");


  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? format(date, 'MMMM d, yyyy h:mm aa') : '';
    setCustomer({ ...customer, dateofbirth: formattedDate });
  };
  

  const [customer, setCustomer] =useState({

    fullname:"",
    gender:"",
    email:"",
    phonenumber:"",
    specialized:"",
    dateofbirth:""
  })

  //deconstucting

  const { fullname, gender, email, phonenumber, specialized, dateofbirth } = customer;


  const onInputChange =(e) => {
    console.log(e);
    setCustomer({...customer,[e.target.name]:e.target.value})
  }


const onSubmit= async(e) =>{
e.preventDefault(); // using remove the field names in d URL
await axios.post("http://localhost:8080/customer", customer)
navigate("/view-users")
}
  return (
    <>
    <Admin_header/>
    
    <div className='bg-purple-300 max-w-full h-screen'>

    <div className="flex items-center justify-center ">
    <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 md:mt-5'>

      <h2 className="text-lg font-semibold mb-4">Create New User</h2>
      <div className="space-y-4">
        <form>
        <div>
          <label htmlFor="fullName">Enter Full Name:</label>
          <input
            type="text"
            id="fullName"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="jobRole">Job Role:</label>
          <select
            id="jobRole"
            className="border border-gray-300 p-1 w-full"
            value={selectedJobRole}
            onChange={(e) => setSelectedJobRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="consultants">Consultants</option>
            <option value="jobSeekers">Job Seekers</option>
          </select>
        </div>
           {/* Additional fields based on Job Role */}

           {selectedJobRole === "jobSeekers" && (
          <>
            {/* Additional fields for Consultants */}
            {/* Qualifications */}
            <div>
              <label htmlFor='qualifications'>Qualifications:</label>
              <input
                type='text'
                id='qualifications'
                className='border border-gray-300 p-1 w-full'
              />
            </div>
            {/* Job Fields */}
            <div>
              <label htmlFor='jobFields'>Job Fields:</label>
              <input
                type='text'
                id='jobFields'
                className='border border-gray-300 p-1 w-full'
              />
            </div>
            {/* Experience */}
            <div>
              <label htmlFor='experience'>Experience:</label>
              <input
                type='text'
                id='experience'
                className='border border-gray-300 p-1 w-full'
              />
            </div>
          </>
        )}
        {selectedJobRole === "consultants" && (
          <>
            {/* Additional fields for Job Seekers */}
            {/* Specialized Country */}
            <div>
              <label htmlFor='specializedCountry'>Specialized Country:</label>
              <input
                type='text'
                id='specializedCountry'
                className='border border-gray-300 p-1 w-full'
              />
            </div>
            {/* Job Fields */}
            <div>
              <label htmlFor='jobFields'>Job Fields:</label>
              <input
                type='text'
                id='jobFields'
                className='border border-gray-300 p-1 w-full'
              />
            </div>
          </>
        )}
           
        {/* <div>
          <label htmlFor="specializedCountry">Specialized Country:</label>
          <input
            type="text"
            id="specializedCountry"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="jobFields">Job Fields:</label>
          <input
            type="text"
            id="jobFields"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="qualifications">Qualifications:</label>
          <input
            type="text"
            id="qualifications"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            className="border border-gray-300 p-1 w-full"
          />
        </div> */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="border border-gray-300 p-1 w-full"
          />
        </div>

          {/* Buttons */}

          <div className='flex flex-row justify-between md:mt-5'>
            <Link to={'/all-user-page'}>
                            <button
                                type="submit"
                                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300  w-32"
                            >
                                Back
                            </button>
            </Link>

                            <div className='flex'>


                             
                                <button
                                    type="submit"
                                    className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-2 w-32"
                                >
                                    Add User
                                </button>
                            </div>
                        </div>
                        {/* Button End */}
        </form>
      </div>
    </div>
  </div>
  </div>
</>

);
}

export default User_edit;
