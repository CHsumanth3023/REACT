import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function Employee(){
return(
    <>
     <div className="header">
        <label>site name</label>
        <label>dashbord name</label>
        <label>emp name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" className="B"></img>
        
            <Link><label>Emp Id</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Task</label></Link>
            <Link to='/Trainings'><label>Trainings</label></Link>
            <Link><label>Sign off</label></Link>
        </aside>
    </div>
    <center>
    <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" className="A"alt=""></img>
        <table  className='tabTask'>
        <tr>
        
            <ul><th>Name:CHUNDI SUMANTH</th></ul>
            <ul> <th>Phone:9515862995 </th></ul>
            <ul><th>email:sumanth3023@gmail.com</th></ul>
            <ul><th>Emp Id :AC2501</th></ul>
            </tr></table>
            </center>
       
    
            
    
    <div className="footer"></div>

    </>
)
}
export default Employee;