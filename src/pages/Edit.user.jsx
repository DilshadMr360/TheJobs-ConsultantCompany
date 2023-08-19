import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import Admin_header from '../components/Admin_header';

const Edit_User = () => {
  const [selectedJobRole, setSelectedJobRole] = useState('admin');
  const [fullname, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [specializedCountry, setSpecializedCountry] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [jobFields, setJobFields] = useState('');
  const [experience, setExperience] = useState('');

  const [fullnamerror, setFullNameError] = useState('');
  const [phonenumbererror, setPhoneNumberError] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [jobTitleError, setJobTitleError] = useState('');
  const [confirmpassworderror, setConfirmPasswordError] = useState('');
  const [specializedCountryError, setSpecializedCountryError] = useState('');
  const [qualificationsError, setQualificationsError] = useState('');
  const [jobFieldsError, setJobFieldsError] = useState('');
  const [experienceError, setExperienceError] = useState('');

  const handleRoleChange = (event) => {
    setSelectedJobRole(event.target.value);
  };

  const validateSpecializedCountry = () => {
    if (selectedJobRole === 'consultants' && !specializedCountry) {
      setSpecializedCountryError('Please enter the specialized country.');
      return false;
    }
    setSpecializedCountryError('');
    return true;
  };

  const validateJobFields = () => {
    if ((selectedJobRole === 'consultants' || selectedJobRole === 'jobSeekers') && !jobFields) {
      setJobFieldsError('Please enter the job fields.');
      return false;
    }
    setJobFieldsError('');
    return true;
  };

  const validateQualifications = () => {
    if (selectedJobRole === 'jobSeekers' && !qualifications) {
      setQualificationsError('Please enter your qualifications.');
      return false;
    }
    setQualificationsError('');
    return true;
  };

  const validateExperience = () => {
    if (selectedJobRole === 'jobSeekers' && !experience) {
      setExperienceError('Please enter your experience.');
      return false;
    }
    setExperienceError('');
    return true;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!jobTitle) {
      setJobTitleError('Please enter your job title.');
      valid = false;
    }

    if (!fullname) {
      setFullNameError('Please enter your Full name.');
      valid = false;
    }

    if (!email) {
      setEmailError('Please enter your Email.');
      valid = false;
    }

    if (!phonenumber) {
      setPhoneNumberError('Please enter your Contact Number.');
      valid = false;
    }

    if (!password) {
      setPasswordError('Please enter a Password.');
      valid = false;
    }

    if (!confirmpassword) {
      setConfirmPasswordError('Please confirm your Password.');
      valid = false;
    } else if (confirmpassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
      valid = false;
    }

    if (!validateSpecializedCountry()) {
      valid = false;
    }

    if (!validateJobFields()) {
      valid = false;
    }

    if (!validateQualifications()) {
      valid = false;
    }

    if (!validateExperience()) {
      valid = false;
    }

    if (valid) {
      // Your form submission logic here
    }
  };

  return (
    <>
      <Admin_header />

      <div className='bg-purple-300 max-w-full h-screen'>
        <div className="flex items-center justify-center ">
          <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 md:mt-5'>
            <h2 className="text-lg font-semibold mb-4">Create New User</h2>
            <div className="space-y-4">
              <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="fullname">Full Name</label>
                  <TextField
                    id="fullname"
                    name="fullname"
                    placeholder="Enter Your Full name"
                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {fullnamerror && <p className="text-red-500">{fullnamerror}</p>}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                  {emailerror && <p className="text-red-500">{emailerror}</p>}
                </div>
                <div>
                  <label htmlFor="phonenumber">Contact Number</label>
                  <TextField
                    id="phonenumber"
                    name="phonenumber"
                    placeholder="Enter Your Contact Number"
                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {phonenumbererror && <p className="text-red-500">{phonenumbererror}</p>}
                </div>
                <div>
                  <label htmlFor="jobRole">Job Role:</label>
                  <Select
                    id="jobRole"
                    className="border border-gray-300 p-1 w-full"
                    value={selectedJobRole}
                    onChange={handleRoleChange}
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="consultants">Consultants</MenuItem>
                    <MenuItem value="jobSeekers">Job Seekers</MenuItem>
                  </Select>
                </div>

                <div>
                      <label htmlFor='password'>Password:</label>
                      <input
                        type='password'
                        id='password'
                        className='border border-gray-300 p-1 w-full'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {passworderror && <p className="text-red-500">{passworderror}</p>}
                    </div>
                    <div>
                      <label htmlFor='confirmpassword'>Confirm Password:</label>
                      <input
                        type='password'
                        id='confirmpassword'
                        className='border border-gray-300 p-1 w-full'
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {confirmpassworderror && <p className="text-red-500">{confirmpassworderror}</p>}
                    </div>
            
                {selectedJobRole === 'consultants' && (
                  <>
                    <div>
                      <label htmlFor='specializedCountry'>Specialized Country:</label>
                      <input
                        type='text'
                        id='specializedCountry'
                        className='border border-gray-300 p-1 w-full'
                        value={specializedCountry}
                        onChange={(e) => setSpecializedCountry(e.target.value)}
                      />
                      {specializedCountryError && <p className="text-red-500">{specializedCountryError}</p>}
                    </div>
                    <div>
                      <label htmlFor='jobFields'>Job Fields:</label>
                      <input
                        type='text'
                        id='jobFields'
                        className='border border-gray-300 p-1 w-full'
                        value={jobFields}
                        onChange={(e) => setJobFields(e.target.value)}
                      />
                      {jobFieldsError && <p className="text-red-500">{jobFieldsError}</p>}
                    </div>
                  </>
                )}
                {selectedJobRole === 'jobSeekers' && (
                  <>
                    <div>
                      <label htmlFor='qualifications'>Qualifications:</label>
                      <input
                        type='text'
                        id='qualifications'
                        className='border border-gray-300 p-1 w-full'
                        value={qualifications}
                        onChange={(e) => setQualifications(e.target.value)}
                      />
                      {qualificationsError && <p className="text-red-500">{qualificationsError}</p>}
                    </div>
                    <div>
                      <label htmlFor='experience'>Experience:</label>
                      <input
                        type='text'
                        id='experience'
                        className='border border-gray-300 p-1 w-full'
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      />
                      {experienceError && <p className="text-red-500">{experienceError}</p>}
                    </div>
                    <div>
                  <label htmlFor="jobtitle">Job Field:</label>
                  <TextField
                    id="jobtitle"
                    name="jobtitle"
                    placeholder="Enter Your Job Title"
                    className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                  {jobTitleError && <p className="text-red-500">{jobTitleError}</p>}
                </div>
                  </>
                )}
                {/* ... other form fields */}
                <div className='flex flex-row justify-between md:mt-5'>
                  <Link to={'/all-user-page'}>
                    <button
                      type="button"
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
                      Edit User
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit_User;
