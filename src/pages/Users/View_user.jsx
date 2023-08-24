import Header from "../../components/Header";
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


export default function()  {

// in order to update the user store 

    const [customers, setCustomers]= useState([])


    //every time page is  need to show user informtion thaty why use useeffect 
    
    useEffect(()=>{
        loadCustomers();
    }, []);

    //asyn awaint using cz js is reading the files line by line

    const loadCustomers = async () =>{
        const result=await axios.get('http://localhost:8080/customers')
       // console.log(result.data);
       setCustomers(result.data);

         
    }



    return(

        <>
         {/* <Header/> */}
         <div className="user-navbar">
         <h2 className="welcome_text">Welcome to the Jobs</h2>
         <Link to={'/add-user-in-view-user'}>
         <button className="user_button" type="submit">Add Users</button>
         </Link>
        <button className="user_button" type="submit">View Appointments</button>
        <Link to="/profile-page">
        <button className="user_button" type="submit">Profile</button>
        </Link>
        <button className="user_button" type="submit">Logout</button>
         </div>
      
  


        <div className="user_content">

  
        <div className="user_content_table">
                      <h2 className="welcome_text">View Users</h2>
               
         <div>    
        <input className="underline_user_row" type="text" value="ID" />
        <input className="underline_user_row" type="text" value="Full Name" />
        <input className="underline_user_row" type="text" value="Email" />
        <input className="underline_user_row" type="text" value="Specialized" />
        <input className="underline_user_row" type="text" value="Phone Number" />
        </div>   

        <div>
  {/* map is creating a new array from the function and passing to every array element */}
  {/* whenever a user creates it, it will show here and below, index using count the numbers */}
  {customers.map((customer, index) => (
    <div className="cunsultant_appointment_details_edit_delete_row" >
      <input type="text" value={index+1}key={index}/>
      <input type="text" value={customer.fullname} />
      <input type="text" value={customer.email} />
      <input type="text" value={customer.specialized} />
      <input type="text" value={customer.phonenumber} />
    </div>
  ))}
</div>


   


      






            </div>
      
            
            <div className="main_user-navbar">
            <Link to="/add-user-in-view-user">
            <button className="main_user_button" type="submit">
            Add Users
            </button>
            </Link>
        <button className="main_user_button" type="submit">
            View Appointments
        </button>
                </div>
             </div>
             </>
    )
}



