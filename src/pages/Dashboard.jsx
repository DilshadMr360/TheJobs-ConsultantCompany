import { useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Login from "../Login";
import Admin_dashboard from "./Dashboards/Admin";
import Consultant_dashboard from "./Dashboards/Consultant";
import Jobseeker_dashboard from "./Dashboards/Jobseeker";

export default function () {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const user =  JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if(!token || !user){
            navigate('/login');
        }
    }, [])

    if (token && user) {        
        if (user.role == 'admin') {
            return (<Admin_dashboard />)
        } else if (user.role == 'consultant') {
            return (<Consultant_dashboard />)
        } else {
            return (<Jobseeker_dashboard />)
        }
    } else{
        return ('You are not logged in, redirecting ...')
    }
}
