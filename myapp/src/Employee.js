import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
import Task from './Task';
function Employee(){
return(
    <>
     <div class="header">
        <label>Site Name</label>
        <label>Dashbord Name</label>
        <label>Emp Name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://img.freepik.com/premium-photo/working-area-modern-office-with-carpet-floor-meeting-room-interior-3d-rendering_156429-176.jpg?w=1380.jpg" alt="" className="B"></img>
            <Link><label>Emp Id</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Task</label></Link>
            <Link to='/Trainings'><label>Trainings</label></Link>
            <Link to='/Login'><label>Sign off</label></Link>
        </aside>
    </div>
    <h1>Tasks Available</h1>
    <table border='1' className='tab'>
        <tr>
            <th>Task Id</th>
            <th>Task </th>
            <th>Objective</th>
            <th>Deadline</th>
        </tr>
    </table>
    <input value='Back' className="emp" />
    <input value='All Tasks' className="emp"/>
    <div className="footer">hello@123</div>
    </>
)
}
export default Employee;