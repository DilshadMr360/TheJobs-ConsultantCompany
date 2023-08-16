import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Please enter your email.");
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      return;
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    console.log(email);
  };

  return (
    <>
      <div className=" bg-purple-300 h-screen">
        <div>
          <h2 className="text-purple-800 font-bold text-4xl text-center w-8/12 mx-3">
            Login
          </h2>
        </div>

        <div className="container mx-auto w-5/6 md:w-5/12 bg-white border-2 rounded-lg border-purple-800 mt-5 px-5 py-3">
          <div>
            <h1 className="text-gray-500 pb-2 border-b border-gray-500 font-bold inline-block">
              Log in to an existing account
            </h1>
          </div>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
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

            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
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

            <button
              type="submit"
              className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300"
            >
              Log In
            </button>
          </form>

          <Link to={"/register-form"}>
            <button className="link-btn text-black">
              Don't have an account ? Register here.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
