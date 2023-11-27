import React from "react";
import {Link} from 'react-router-dom';
import './Admin.css';
function Admin(){
return(
    <>
     <div className="header">
        <label>Site Name</label>
        <label>Admin Dashboard</label>
        <label>Employee name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnXdQ88Dl8W7h68lpqGVbYzCUEGA8UoRSaw&usqp=CAU" alt="" className="B"></img>
        
            <Link><label>Emp Id</label></Link>
            <Link><label>Profile</label></Link>
            <Link to='/ViewEmployee'><label>ViewEmployee</label></Link>
            <Link to='/Login'><label>Sign off</label></Link>
        </aside>
    </div>
    <div className="navAdmin">
        <Link to='/AddCourse'><label>AddCourse</label></Link>
        <Link to='/AddTopics'><label>AddTopics</label></Link>
        <Link to='/ViewReports'><label>ViewReports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link><label>Search</label></Link>
    </div>
    <div mailto classname="footer">anarghyacommunications</div>
    </>
)
}
export default Admin;