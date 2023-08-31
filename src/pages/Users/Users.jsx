import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link, json, redirect } from 'react-router-dom';
import Admin_header from '../../components/Admin_header';
import axios from "axios";
import Swal from "sweetalert2";

export default function () {

    const [users, setUsers] = useState([]);
        const fetchUsers = () => {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            };
            axios.get("http://localhost:8000/api/users", { headers })
                .then(response => {
                    console.log(response.data);
                    setUsers(response.data.users);
                })
                .catch(error => {
                    console.log(error);
                    // display error message in UI with setError
                });
        }

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = (id) => {
        // confirmation dialog box
        let confirmed = true;
        // confirmed = window.confirm("Are you sure you want to delete user " + id);

        if (confirmed) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            };
            axios.delete("http://localhost:8000/api/users/" + id, { headers })
                .then(response => {
                    console.log(response.data);
                    fetchUsers();
                    showAlert(); // Calling      directly
                })
                .catch(error => {
                    // display error message in UI with setError
                    console.log(error);
                });
        }
    };

    const showAlert = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    };


    return (
        <>
            < Admin_header />

            <div className="bg-purple-300 min-h-screen flex items-center justify-center ">
                <div className='container w-full  mx-auto rounded-lg border-purple-800 bg-white border-2 px-10 py-4 md:mb-24  md:mt-1'>

                    <div className='flex flex-row justify-between'>
                        <div className="flex items-start justify-start w-40">
                            <Select
                                id="jobrole"
                                name="jobrole"
                                className='border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full h-[56px] '
                                variant="outlined"
                                defaultValue="all"
                            >
                                <MenuItem value="all">All Users</MenuItem>
                                <MenuItem value="pending">Admin</MenuItem>
                                <MenuItem value="approved">Consultants</MenuItem>
                                <MenuItem value="completed">Job Seekers</MenuItem>
                            </Select>

                        </div>


                        <div className="flex flex-col items-end justify-end border border-gray-300 p-3 rounded">
                            <input
                                type="text"
                                id="search"
                                placeholder="Enter your search"
                            />
                        </div>




                    </div>



                    <div className="flex flex-col space-y-4 ">

                        <div className="flex space-x-4 justify-center">
                            <div className="flex border-2 border-white border-b-gray-300 p-2 rounded-md w-full text-gray-500">
                                <h1 className='w-3/12'>Name</h1>
                                <h1 className='w-3/12' >Email</h1>
                                <h1 className='w-2/12'>Contact Number</h1>
                                <h1 className='w-1/12'>Job Role</h1>
                         <div className="flex-1 text-right"> {/* Create a flex container that takes the remaining space and aligns content to the right */}
            <h1 className='w-4/12'>Action</h1>
        </div>

                            </div>

                        </div>

                        {/* view row component  */}
                        {users ? users.map((user) => (
                            <div className="flex space-x-4 justify-center w-full text-gray-500">
                                <div className="flex border-2 border-gray-300 p-2 rounded-md w-full ">
                                    <h1 className='w-3/12'>{user.name}</h1>
                                    <h1 className='w-3/12' >{user.email}</h1>
                                    <h1 className='w-2/12'>{user.phone}</h1>
                                    <h1 className='w-1/12'>{user.role}</h1>
                                    <Link to={`/users/edit/${user.id}`}>
                                        <button
                                            className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-8 w-32"
                                        >
                                            Edit User
                                        </button>
                                    </Link>
                                    <button
                                        className=" bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                        onClick={() => {
                                            deleteUser(user.id);
                                        }}
                                    >
                                        Delete User
                                    </button>
                                </div>
                            </div>
                        )) : "No users"}
                        {/* button */}

                        <div className='flex flex-row justify-between'>
                            <Link to={'/admin_dashboard'}>
                                <button
                                    type="submit"
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300  w-32"
                                >
                                    Dashboard
                                </button>
                            </Link>

                            <div className='flex'>

                                <Link to={'/users/create'}>

                                    <button
                                        type="submit"
                                        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-950 focus:ring focus:ring-blue-300 ml-auto w-32"
                                    >
                                        Create a user
                                    </button>
                                </Link>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
