import React, { useState, useEffect } from 'react';
import { IoAirplaneSharp, IoHomeOutline, IoPersonCircleOutline } from 'react-icons/io5';
import DropdownMenu from './Dropdownmenu'; // 
import { Link } from 'react-router-dom';
import axios from "axios";


const Appointment_table = ({filter = 'all'}) => {
    const [appointments, setAppointments] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    const fetchAppointments = () => {
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };

        axios.get("http://localhost:8000/api/appointments?status=" + filter, { headers })
            .then(response => {
                console.log(response.data);
                setAppointments(response.data.appointments);
            })
            .catch(error => {
                console.log(error);
                // display error message in UI with setError
            });
    }

    useEffect(() => {
        fetchAppointments();
    }, [filter]);

    const deleteAppointment = (id) => {
        // confirmation dialog box
        let confirmed = true;
        confirmed = window.confirm("Are you sure you want to delete appointment " + id);

        if (confirmed) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            };
            axios.delete("http://localhost:8000/api/appointments/" + id, { headers })
                .then(response => {
                    console.log(response.data);
                    fetchAppointments();
                    // Show succes modal
                })
                .catch(error => {
                    // display error message in UI with setError
                    console.log(error);
                });
        }
    }

    const reviewAppointmment = (id, accept = true) => {
        // confirmation dialog box
        let confirmed = true;
        confirmed = window.confirm("Are you sure you want to " + (accept ? "accept" : "reject") + " appointment " + id);

        if (confirmed) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            };
            axios.get("http://localhost:8000/api/appointments/" + id + '/review?accept=' + accept, { headers })
                .then(response => {
                    console.log(response.data);
                    fetchAppointments();
                    // Show succes modal
                })
                .catch(error => {
                    // display error message in UI with setError
                    console.log(error);
                });
        }
    }

    return (
        <table className='w-full'>
            <thead>
                <tr className="text-left">
                    <th className='ps-4'>Status</th>
                    {user.role != 'client' ?
                        <th>Client</th>
                        : null}
                    {user.role != 'consultant' ?
                        <th>Consultant</th>
                        : null}
                    <th>Country</th>
                    <th >Job</th>
                    <th >Time</th>
                    {user.role == 'admin' ?
                        <th>Action</th>
                        : null}
                </tr>
            </thead>
            {/* view row component  */}
            <tbody>
                {appointments ? appointments.map((appointment) => (
                    <tr className='border-2'>
                        <td className="py-5 ps-5">{appointment.status}</td>
                        {user.role != 'client' ?
                            <td>{appointment.client.name}</td>
                            : null}
                        {user.role != 'consultant' ?
                            <td>{appointment.consultant.name}</td>
                        : null}
                        <td>{appointment.country.name}</td>
                        <td>{appointment.job.name}</td>
                        <td>{appointment.time}</td>

                        {user.role == 'admin' ?
                            <td>
                                <button
                                    type="submit"
                                    className="- bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:ring focus:ring-blue-300 ml-auto w-32"
                                    onClick={() => {
                                        reviewAppointmment(appointment.id, true);
                                    }}
                                >
                                    Approve
                                </button>
                                <button
                                    type="submit"
                                    className=" bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:ring focus:ring-blue-300 ml-auto w-32 ms-4"
                                    onClick={() => {
                                        deleteAppointment(appointment.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                            : null}
                    </tr>
                )) : "No appointments"}
                {/* view row component  */}
            </tbody>
        </table>
    );
};
export default Appointment_table;
