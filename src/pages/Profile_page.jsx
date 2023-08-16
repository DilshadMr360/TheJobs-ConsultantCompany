import React from 'react';
import Header from "../components/Header";
import TextField from '@mui/material/TextField';

const Profile_page = (props) => {
  return (
    <>
      <Header />

      <div>
        <h1 className='text-purple-800 font-bold text-2xl text-center md:w-7/12 md:mx-8  py-0 md:mt-3'>Profile Page</h1>
      </div>
      <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-2 md:mt-1'>

        <div className='mx-auto bg-white rounded-lg '>
          <div className='mb-6 '>
            {/* <h2 className='text-2xl font-semibold mb-4'>Profile Page</h2> */}
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
                />
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
                />
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
                  placeholder='Enter Your contactnumber '
                  className='mt-1 md:w-72'
                />
              </div>
         
            </div>
          </div>

     

          <button className='user_button bg-purple-500 text-white px-4 py-2 rounded w-40'>
            Update
          </button>

          <div className=''>
          <div className='mt-6'>
            {/* <h2 className='text-2xl font-semibold mb-4'>Password</h2> */}
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                Current Password
                </label>
                <TextField
                  id='currentpassword'
                  name='currentpassword'
                  placeholder='Enter your Current Password'
                  className='mt-1 md:w-72 '
                />
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
                  placeholder='Enter your new Password'
                  className='mt-1 md:w-72 '
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <TextField
                  id='confirmpassword'
                  name='confirmpassword'
                  placeholder='Confirm Your Password'
                  className='mt-1 md:w-72'
                />
              </div>
            </div>
          </div>
          
      

          <button className='bg-purple-500 text-white px-4 py-2 rounded md:mt-5'>
            Update Password
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile_page;
