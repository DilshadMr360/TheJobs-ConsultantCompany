import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link, useParams,useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Swal from "sweetalert2";
import Admin_header from '../components/Admin_header';
import Consultant_header from '../components/Consultant_header';

const Profile_page = (props) => {
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [jobFields, setJobFields] = useState('');
  const [experience, setExperience] = useState('');
  const [fullnamerror, setFullNameError] = useState('');
  const [phonenumbererror, setPhoneNumberError] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [confirmpassworderror, setConfirmPasswordError] = useState('');


  //getting the countirs for DB  and storing it as countires
  // store all the user selected countirs in selected countries
  const user = JSON.parse(localStorage.getItem('user'));

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  const [selectedJobs, setSelectedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  const { userId } = useParams();

  const navigate = useNavigate();


  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('authToken')
    };

    axios.get("http://localhost:8000/api/profile/" , { headers })
      .then(response => {
        let user = response.data.user;
        setFullName(user.name);
        SetEmail(user.email);
        setPhoneNumber(user.phone);
        setSelectedJobs(response.data.jobs);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:8000/api/countries')
      .then(response => {
        setCountries(response.data.countries);
      });

    axios.get('http://localhost:8000/api/jobs')
      .then(response => {
        setJobs(response.data.jobs);
      });
  }, []);

  const handleCountryCheckboxChange = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleRoleChange = (event) => {
    setSelectedCountries([]);
    setJobFields('');
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!fullname) {
      setFullNameError('Please enter your Full name.');
      valid = false;
    } else {
      setFullNameError('');
    }

    if (!email) {
      setEmailError('Please enter your Email.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!phonenumber) {
      setPhoneNumberError('Please enter your Contact Number.');
      valid = false;
    } else if (phonenumber.length < 10) {
      setPhoneNumberError('Phone number must be at least 10 digits.');
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    if (password && password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password && !confirmpassword) {
      setConfirmPasswordError('Please confirm your Password.');
      valid = false;
    } else if (password && confirmpassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    
    if (valid) {
      console.log("Updating user ....");
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      };
      console.log(headers);
      axios.put('http://localhost:8000/api/profile/', {
        name: fullname,
        email: email,
        phone: phonenumber,
        password: password,
        password_confirmation: confirmpassword,
        jobs: selectedJobs,
        countries: selectedCountries
      }, { headers })
        .then(response => {
          if (response.data.success) {
            console.log('Post Request Success');
            showAlert();
            navigate("/users/all")

          }
        })
        .catch(error => {
          let errors = error.response.data.errors;
          if (errors) {
            setEmailError(errors.email ?? null);
            setPhoneNumberError(errors.phone ?? null);
            setFullNameError(errors.name ?? null);
            setPasswordError(errors.password ?? null);
          }
        });
    } else {
      console.log("Invalid form");
    }
  };


  const showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "User Updated Succeesfully",
        icon: "success",
    });
};  
  return (
    <>
         {user.role == 'admin' ?
                    <Admin_header/>
                    : null}
                {user.role == 'consultant' ?
                    <Consultant_header />
                    : null}
                {user.role == 'client' ?
                    <Header />
                    : null}

      
      <div className='bg-purple-300 max-w-full min-h-screen'>
 
          <div className="flex items-center justify-center ">
            
            <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 md:mt-5'>
              <h2 className="text-lg font-semibold mb-4"> Update Profile</h2>
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
                  {/* ... other form fields */}
                  <div className='flex flex-row justify-between md:mt-5'>
                    <Link to={'/users/all'}>
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
                        Update User
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
};

export default Profile_page;
