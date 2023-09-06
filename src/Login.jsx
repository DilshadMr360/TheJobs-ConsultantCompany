import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data?.success) {
          console.log("Logged in");
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          // setSuccessAlertVisible(true);
          showAlert();
          navigate("/");
        } else {
          setPasswordError(response.data?.message[0]);
        }
      })
      .catch((error) => {
        if(error.response.data){
          let errors = error.response.data.errors;
          setPasswordError('');
          setEmailError(errors.email ?? null);
          setPasswordError(errors.password ?? null);
        } else{
          setPasswordError('Unable to connect');
        }
      });
  };

  const showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "login successful",
        icon: "success",
    });
};

  return (
    <>
      <div className="bg-purple-300  h-screen pt-4">
        <div className="container mx-auto my-auto w-5/6 md:w-5/12 bg-white border-2 rounded-lg border-purple-800 mt-5 px-5 py-3">
          <h2 className="text-purple-800 font-bold text-4xl text-center pb-5">
            Sign In
          </h2>

    
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              className="border p-2 rounded-md focus:outline-none focus:border-purple-800"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
            <label htmlFor="password" className="text-black">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="***********"
              id="password"
              name="password"
              className="border p-2 rounded-md focus:outline-none focus:border-purple-800"
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
            <button
              type="submit"
              className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300"
            >
              Log In
            </button>
          </form>
          <Link to={"/register"}>
            <button className="link-btn text-black md:mt-5">
              Don't have an account?{" "}
              <span className="text-purple-800 font-bold">Register here</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
