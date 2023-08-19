import React, { useState } from 'react';
import Header from "../components/Header";
import TextField from '@mui/material/TextField';

const Profile_page = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUpdateProfile = () => {
    if (!fullName.trim()) {
      setFullNameError('Please enter your Full Name.');
    } else {
      setFullNameError('');
    }

    if (!email.trim()) {
      setEmailError('Please enter your Email.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid Email.');
    } else {
      setEmailError('');
    }

   if (!contactNumber) {
  setContactNumberError('Please enter your Contact Number.');
} else if (!/^\d{10}$/.test(contactNumber)) {
  setContactNumberError('Please enter a valid 10-digit contact number.');
} else if (!/^[0-9]*$/.test(contactNumber)) {
  setContactNumberError('Please enter numeric characters only.');
} else {
  setContactNumberError('');
}

    // Continue with the update profile logic
  };

  const handleUpdatePassword = () => {
    if (!currentPassword.trim()) {
      setCurrentPasswordError('Please enter your current password.');
    } else if (currentPassword.trim().length < 8) {
      setCurrentPasswordError('Password must be at least 8 characters.');
    } else {
      setCurrentPasswordError('');
    }
  
    if (!newPassword.trim()) {
      setNewPasswordError('Please enter a new password.');
    } else if (newPassword.trim().length < 8) {
      setNewPasswordError('Password must be at least 8 characters.');
    } else {
      setNewPasswordError('');
    }
  
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Please confirm your password.');
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };
  
  return (
    <>
      <Header />

      <div>
        <h1 className='text-purple-800 font-bold text-2xl text-center md:w-7/12 md:mx-8  py-0 md:mt-3'>Profile Page</h1>
      </div>
      <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-2 md:mt-1'>

        <div className='mx-auto bg-white rounded-lg '>
          <div className='mb-6 '>
            <div className='grid grid-cols-2 gap-4 w-full'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Full Name
                </label>
                <TextField
                  id='fullName'
                  name='fullName'
                  placeholder='Enter Your Full Name'
                  className='mt-1 md:w-72'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {fullNameError && <p className='text-red-500'>{fullNameError}</p>}
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <TextField
                  id='email'
                  name='email'
                  placeholder='Enter Your Email'
                  className='mt-1 md:w-72'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className='text-red-500'>{emailError}</p>}
              </div>
            </div>
          </div>

          <div className='mb-6 '>
            <div className='grid grid-cols-2 gap-4 w-full'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Contact Number
                </label>
                <TextField
  id='contactnumber'
  name='contactnumber'
  placeholder='Enter Your contactnumber'
  className='mt-1 md:w-72'
  value={contactNumber}
  onChange={(e) => setContactNumber(e.target.value)}
  onKeyPress={(e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  }}
/>
                {contactNumberError && <p className='text-red-500'>{contactNumberError}</p>}
              </div>
            </div>
          </div>

          <button className='user_button bg-purple-500 text-white px-4 py-2 rounded w-40' onClick={handleUpdateProfile}>
            Update
          </button>

          <div className='mt-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Current Password
                </label>
                <TextField
                  id='currentpassword'
                  name='currentpassword'
                  type='password'
                  placeholder='Enter your Current Password'
                  className='mt-1 md:w-72'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                {currentPasswordError && <p className='text-red-500'>{currentPasswordError}</p>}
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  New Password
                </label>
                <TextField
                  id='newpassword'
                  name='newpassword'
                  type='password'
                  placeholder='Enter your new Password'
                  className='mt-1 md:w-72'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {newPasswordError && <p className='text-red-500'>{newPasswordError}</p>}
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <TextField
                  id='confirmpassword'
                  name='confirmpassword'
                  type='password'
                  placeholder='Confirm Your Password'
                  className='mt-1 md:w-72'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && <p className='text-red-500'>{confirmPasswordError}</p>}
              </div>
            </div>
          </div>

          <button className='bg-purple-500 text-white px-4 py-2 rounded md:mt-5' onClick={handleUpdatePassword}>
            Update Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile_page;
