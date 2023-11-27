import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function Employee(){
return(
    <>
     <div className="header">
        <img src="https://media.licdn.com/dms/image/D5616AQGsXz-uaJq2Xg/profile-displaybackgroundimage-shrink_200_800/0/1694684403459?e=2147483647&v=beta&t=NMv_B7mvAFKrHAyBT-BIGuDPlkio8ZSFkkx0G1QE-vo" className="imgEmp"></img>
        <label>Employee Dashboard</label>
        <label>Employee name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://img.freepik.com/free-photo/business-woman-with-tablet-standing-office_1303-25394.jpg" className="empImg"></img>
            <Link><label>Emp Id</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Task</label></Link>
            <Link to='/Trainings'><label>Trainings</label></Link>
            <Link><label>Sign off</label></Link>
        </aside>
    </div>
    <h1><ins>Training Done</ins></h1>
    <table className='tabTrain'>
        <tr>
            <th>Sl.no</th>
            <th>Course Name </th>
            <th>Topic Name</th>
            <th>Status </th>
            <th>Start Date</th>
            <th>End Date</th>
        </tr>
    </table>
    <Link to='/Employee'><input value='Back' type="button" className="tran" /></Link>
    <Link to='/GetTrained'><input value='GetTrained' type="button" className="tran"/></Link>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Employee;