    import React, { useState, useEffect } from 'react';
    import TextField from '@mui/material/TextField';
    import Select from '@mui/material/Select';
    import MenuItem from '@mui/material/MenuItem';
    import { Link, useParams,useNavigate} from 'react-router-dom';
    import Admin_header from '../../components/Admin_header';
    import axios from 'axios';
    import Swal from "sweetalert2";


const Edit_User = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [jobFields, setJobFields] = useState('');
  const [fullnamerror, setFullNameError] = useState('');
  const [phonenumbererror, setPhoneNumberError] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [confirmpassworderror, setConfirmPasswordError] = useState('');
  const [specializedCountryError, setSpecializedCountryError] = useState('');
  const [jobFieldsError, setJobFieldsError] = useState('');
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

    axios.get("http://localhost:8000/api/users/" + userId, { headers })
      .then(response => {
        let user = response.data.user;
        setFullName(user.name);
        SetEmail(user.email);
        setSelectedRole(user.role); // TODO CHANGE TO SetRole
        setPhoneNumber(user.phone);
        setSelectedJobs(response.data.jobs);
        setSelectedCountries(response.data.countries);
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
    setSelectedRole(event.target.value);
    setSelectedCountries([]);
    setJobFields('');
  };

  const validateSpecializedCountry = () => {
    if (selectedRole == 'consultant' && selectedCountries.length == 0) {
      setSpecializedCountryError('Please select a country.');
      return false;
    } else {
      setSpecializedCountryError('');
      return true;
    }
  };

const validateJobFields = () => {
  if (selectedRole == 'consultant' && selectedJobs.length == 0) {
    setJobFieldsError('Please enter the job fields.');
    return false;
  } else {
    setJobFieldsError('');
    return true;
  }
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

    if (selectedRole.length == 0) {
      setRoleError('Please select a user role.');
      valid = false;
    } else {
      setRoleError('');
    }

    if (!validateSpecializedCountry()) {
      valid = false;
    }

    if (!validateJobFields()) {
      valid = false;
    }

    if (valid) {
      // first sweet alert 
      Swal.fire({
        title: "Do you want to update this user?",
        showCancelButton: true,
        confirmButtonText: "Yes, add user",
        cancelButtonText: "No, cancel",
        icon: "question",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Updating user ....");
          const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
          };
          console.log(headers);
          axios.put('http://localhost:8000/api/users/' + userId, {
            name: fullname,
            email: email,
            phone: phonenumber,
            role: selectedRole,
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
                setRoleError(errors.role ?? null)
                setEmailError(errors.email ?? null);
                setPhoneNumberError(errors.phone ?? null);
                setFullNameError(errors.name ?? null);
                setPasswordError(errors.password ?? null);
              }
            });
        } else {
          console.log("User canceled.");
        }
      });
    } else {
      console.log("Invalid form");
    }
    

  const showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "User Updated Succeesfully",
        icon: "success",
    });
};
  };
  return (
    <>
      <Admin_header />

        <div className='bg-purple-300 max-w-full min-h-screen'>
          <div className="flex items-center justify-center ">
            <div className='container w-full md:w-6/12 mx-auto rounded-lg border-purple-800 bg-white border-2 px-5 py-5 md:mt-5'>
              <h2 className="text-lg font-semibold mb-4"> Edit User</h2>
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
                    <label htmlFor="jobRole">User Role:</label>
                    <Select
                      id="role"
                      name='role'
                      className="border border-gray-300 p-1 w-full"
                      value={selectedRole}
                      displayEmpty
                      onChange={handleRoleChange}
                    >
                      <MenuItem disabled value="">
                        <em>Select a Role</em>
                      </MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="consultant">Consultant</MenuItem>
                      <MenuItem value="client">Job Seeker</MenuItem>
                    </Select>
                  </div>
                  {roleError && <p className="text-red-500">{roleError}</p>}



                  {selectedRole === 'consultant' && (
                    <>
                      <div>
                        <label htmlFor="specializedCountry">Specialized Country:</label>
                        <div className="flex flex-wrap gap-1">
                          <Select
                            multiple
                            value={selectedCountries}
                            onChange={(e) => setSelectedCountries(e.target.value)}
                            className=' w-full'
                          >
                            {countries.map((country) => (
                              <MenuItem key={country.id} value={country.id}>
                                {country.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </div>
                        {specializedCountryError && (
                          <p className="text-red-500">{specializedCountryError}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="jobfields">Job Fieds:</label>
                        <Select
                          multiple
                          value={selectedJobs}
                          onChange={(e) => setSelectedJobs(e.target.value)}
                          className=' w-full'
                        >
                          {jobs.map((job) => (
                            <MenuItem key={job.id} value={job.id}>
                              {job.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {jobFieldsError && (
                          <p className="text-red-500">{jobFieldsError}</p>
                        )}
                      </div>
                    </>
                  )}


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
}
export default Edit_User;
