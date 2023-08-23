import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = (props) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const [termsError, setTermsError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // when the page is reloaded then going to lose  the state

    if (!termsAccepted) {
      // Show an error message if terms are not accepted
      setTermsError(" Accept the terms of use.");
      return;
    }

    axios.post('http://localhost:8000/api/register', {
      'name': name,
      'email': email,
      'phone': number,
      'password': password,
      'password_confirmation': confirmPassword
    })
      .then(response => {
        if (response.data.success) {
          console.log('Registration successful');
          localStorage.setItem('token', response.data.token);
          switch (response.data.user.role) {
            case 'client':
              navigate("/users");
              console.log("You are logged in as a client");
              break;
            case 'consultant':
              // navigate to consultant dashboard
              console.log("You are logged in as a consultant");
              break;
            case 'admin':
              // navigate to admin dashboard
              console.log("You are logged in as an admin");
              break;
          }
        }
      })
      .catch(error => {
        let errors = error.response.data.errors;
        setEmailError(errors.email ?? null);
        setNumberError(errors.phone ?? null);
        setNameError(errors.name ?? null);
        setPasswordError(errors.password ?? null);

      });

  }

  return (
    <>
      <div className="bg-purple-300 min-h-screen py-4">

        <div>
          <h2 className="text-purple-800 font-bold text-4xl text-center pl-16 w-8/12">Register</h2>

        </div>


        <div className="container mx-auto w-5/12 bg-white border-2 rounded-lg border-purple-800 mt-5 px-6 py-3">

          <div>
            <h1 className="text-gray-500 pb-2 border-b border-gray-500 font-bold inline-block">
              Create a new Account
            </h1>
          </div>


          <div>

          </div>


          <form className="flex flex-col space-y-2 " onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              placeholder="Enter full name"
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
            <div>

            </div>
            <label htmlFor="email" className="text-gray-500" >Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"

            />
            {emailError && <p className="text-red-500">{emailError}</p>}

            <label htmlFor="email">Contact Number</label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Enter your number"
              id="number"
              name="number"
              pattern="[0-9]*"
              maxLength={10}
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"

            />
            {numberError && <p className="text-red-500">{numberError}</p>}

            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="***********"
              id="password"
              name="password"
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"

            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <label htmlFor="password">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="***********"
              id="confirm_password"
              name="confirm_password"
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"

            />
            {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}



            <button onClick={handleSubmit} type="submit"
              className="bg-purple-800  text-white px-4 py-2 rounded-md hover:bg-purple-950  focus:ring focus:ring-blue-300 "

            >Register</button>
          </form>
          <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between mt-4">
            <div className="flex flex-row w-full justify-between items-center mb-2 md:mb-0">
              <Link to={'/login-form'} className="link-btn w-6/12 md:w-8/12">
                Already have an account? Login here.
              </Link>
              <label className="md:w-6/12 text-gray-500 text-center md:text-left">
            <input
              type="checkbox"
              className="mr-2"
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                setTermsError(''); // Clear terms error when checkbox is clicked
              }}
            />
            I accept the terms of use
          {termsError && <p className="text-red-500">{termsError}</p>}
          </label>
            </div>
          </div>



        </div>

      </div>
    </>



  )



}

export default Register;