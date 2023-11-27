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
            
        <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?w=1060&t=st=1700198685~exp=1700199285~hmac=f2fe1ff3b4ded1e3d68697f78cb6d2d775bbc37bd5b78b0608d4da69ecc76785" alt="" className="B"></img>
            <Link><label>Emp Id</label></Link>
            <Link><label>Profile</label></Link>
            <Link to='/ViewEmployee'><label>ViewEmployee</label></Link>
            <Link to='/Login'><label>Sign off</label></Link>
        </aside>
    </div>
    <div className="navAdmin">
        <Link to='/AddCourse'><label>AddCourse</label></Link>
        <Link to='/Addtopics'><label>AddTopics</label></Link>
        <Link to='/ViewReports'><label>ViewReports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link to='/Search'><label>Search</label></Link>
    </div>
    <table>
        <tr>
            <th className="viewTh2">Name : <input/></th>
            <th className="viewTh2">Department : <input/></th>
            <th className="viewTh2">Role : <input/></th>
        </tr>
        <tr>
            <th className="viewTh2">Email : <input/></th>
            <th className="viewTh2">Phone : <input/></th>
            <td className="viewTh2"></td>
        </tr>
    </table>
    <hr></hr>
    <input value='Edit' type="button" className="viewBack1" />
    <input value='Save' type="button" className="viewBack1" />
    <Link to='/Admin'><input value='Back' type="button" className="viewBack3" /></Link>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Admin;
