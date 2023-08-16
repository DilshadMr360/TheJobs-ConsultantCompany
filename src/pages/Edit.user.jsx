import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Form, Link, useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker';
import MenuItem from '@mui/material/MenuItem';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import axios from 'axios';


const Edit_user = () => {

  let navigate=useNavigate()

  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? format(date, 'MMMM d, yyyy h:mm aa') : '';
    setCustomer({ ...customer, dateofbirth: formattedDate });
  };
  

  const [customer, setCustomer] =useState({

    fullname:"",
    gender:"",
    email:"",
    phonenumber:"",
    specialized:"",
    dateofbirth:""
  })

  //deconstucting

  const { fullname, gender, email, phonenumber, specialized, dateofbirth } = customer;


  const onInputChange =(e) => {
    console.log(e);
    setCustomer({...customer,[e.target.name]:e.target.value})
  }


const onSubmit= async(e) =>{

}
  return (
    <div>

   <form onSubmit={(e)=>onSubmit(e)}>
        <div className='new_appointment_form'>
            
        <h1 className='welcome_text'> Edit User</h1>

              <div className='new_appointment_form_row'>
                
            <label  className='appointment_row' htmlFor="FullName">Full Name </label>
            <label className='appointment_row2' htmlFor="Gender">Gender </label>
            </div>
            <div className='new_appointment_form_row'>
            <TextField
            id="fullname"
            name="fullname"
            placeholder="Enter Your Full Name"
            className='appointment_textfield'
            value={fullname}
            onChange={(e)=>onInputChange(e)}
            />
            <TextField
            id="gender"
            name="gender"
            placeholder="Gender"
            className='appointment_textfield'
            value={gender}
            onChange={(e)=>onInputChange(e)}
            />

            </div>

            <div className='new_appointment_form_row'>
                
                <label  className='appointment_row' htmlFor="Email">Email </label>
                <label className='appointment_row2' htmlFor="PhoneNumber"> PhoneNumber </label>
                </div>
                <div className='new_appointment_form_row'>
                <TextField
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className='appointment_textfield'
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
                <TextField
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter Your Phone Number"
                className='appointment_textfield'
                value={phonenumber}
                onChange={(e)=>onInputChange(e)}
                />
    
                </div>
    

                <div className='new_appointment_form_row'>
                
                <label  className='appointment_row' htmlFor="specialized">Specialized </label>
                <label className='appointment_row2' htmlFor="dob"> Date of Birth </label>
                </div>
                <div className='new_appointment_form_row'>
                <TextField
                id="specialized"
                name="specialized"
                placeholder="Enter Your speciality"
                className='appointment_textfield'
                value={specialized}
                onChange={(e)=>onInputChange(e)}
                />
         <div className="date-picker-container">
         <DatePicker
  id="Date"
  name="dateofbirth"
  selected={selectedDate ? new Date(selectedDate) : null} // Convert the string to a Date object
  onChange={(date) => {
    handleDateChange(date);
  }}
  placeholderText="Select a date"
  className="appointment_textfield"
  showTimeSelect
  timeFormat="HH:mm"
  timeIntervals={15}
  timeCaption="Time"
  dateFormat="MMMM d, yyyy h:mm aa"
/>

    </div>
                
    
                </div>


      <div className='new_appointment_form_row'>
                
                <label  className='appointment_row' htmlFor="password">Password </label>
                <label className='appointment_row2' htmlFor="confirmpassword"> Confirm Password </label>
                </div>
                <div className='new_appointment_form_row'>
                <TextField
                id="password"
                name="password"
                placeholder="Enter Your Password"
                className='appointment_textfield'
                />
                <TextField
                id="confirm_password"
                name="confirm_password"
                placeholder="Enter Confirm Password"
                className='appointment_textfield'
                />
    
                </div>

    
    
            <div className='appoitment-bottom-button'>
            <Link to="/consultant-dashboard">
                <button className="main_user_button" type="submit">
            Back to Dashboard
        </button>
        </Link>
        <button className="main_user_button" type="submit">
          Submit 
        </button>
        </div>
        
        </div>
        </form>

    </div>
  );
};

export default Edit_user;
