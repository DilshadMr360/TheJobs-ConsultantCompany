import React, { useState, useEffect } from 'react';
import { IoCheckboxSharp, IoTime, IoCloseCircleSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Appointment_table = ({ filter = 'all' }) => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

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

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  };

  const approveAppointment = (id) => {
    // Confirmation dialog box for approving appointment
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to approve appointment " + id + "?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };
        axios.get("http://localhost:8000/api/appointments/" + id + '/review?accept=true', { headers })
          .then(response => {
            console.log(response.data);
            fetchAppointments();
            // Show success modal
            showAlert("Success", "Appointment has been approved successfully.", "success");
          })
          .catch(error => {
            // Display error message in UI with setError
            console.log(error);
          });
      }
    });
  };

  
  const rejectAppointment = (id) => {
    // Confirmation dialog box for approving appointment
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Reject appointment " + id + "?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };
        axios.get("http://localhost:8000/api/appointments/" + id + '/review?accept=false', { headers })
          .then(response => {
            console.log(response.data);
            fetchAppointments();
            // Show success modal
            showAlert("Success", "Appointment has been Rejected Successfully.", "success");
          })
          .catch(error => {
            // Display error message in UI with setError
            console.log(error);
          });
      }
    });
  };

  const deleteAppointment = (id) => {
    // Confirmation dialog box for deleting appointment
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        };
        axios.delete("http://localhost:8000/api/appointments/" + id, { headers })
          .then(response => {
            console.log(response.data);
            fetchAppointments();
            // Show success modal
            showAlert("Deleted", "The appointment has been deleted successfully.", "success");
          })
          .catch(error => {
            // Display error message in UI with setError
            console.log(error);
          });
      }
    });
  };

  return (
    <table className='w-full md:mt-4'>
      <thead>
        <tr className="text-left">
          <th className='ps-4'>Status</th>
          {user.role !== 'client' ?
            <th>Client</th>
            : null}
          {user.role !== 'consultant' ?
            <th>Consultant</th>
            : null}
          <th>Country</th>
          <th>Job</th>
          <th>Time</th>
          {user.role === 'admin' ?
            <th>Action</th>
            : null}
        </tr>
      </thead>
      <tbody>
        {appointments ? appointments.map((appointment) => (
          <tr className='border-2' key={appointment.id}>
            <td className="py-5 ps-5">
              {appointment.status === 'approved' ? (
                <IoCheckboxSharp size={20} className='border-1 rounded-lg text-green-600' />
              ) : appointment.status === 'rejected' ? (
                <IoCloseCircleSharp size={22} className='border-1 rounded-lg text-red-600 ' />
              ) : (
                <IoTime size={20} style={{ color: 'F29339' }} />
              )}
            </td>
            {user.role !== 'client' ?
              <td>{appointment.client.name}</td>
              : null}
            {user.role !== 'consultant' ?
              <td>{appointment.consultant.name}</td>
              : null}
            <td>{appointment.country.name}</td>
            <td>{appointment.job.name}</td>
            <td>{appointment.time}</td>
            {user.role === 'admin' && appointment.status === 'pending' ? (
              <td className='w-48'>
                <button
                  type="button"
                  className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:ring focus:ring-blue-300 ml-auto w-32 mt-1"
                  onClick={() => approveAppointment(appointment.id)} // Pass the appointment id
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:ring focus:ring-blue-300 w-32 mt-1"
                  onClick={() => rejectAppointment(appointment.id)} // Pass the appointment id
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:ring focus:ring-blue-300 w-32 mt-1 mb-1"
                  onClick={() => deleteAppointment(appointment.id)} // Pass the appointment id
                >
                  Delete                </button>
              </td>
            ) : null}
          </tr>
        )) : <tr><td colSpan="6">No appointments</td></tr>}
      </tbody>
    </table>
  );
};

export default Appointment_table;
