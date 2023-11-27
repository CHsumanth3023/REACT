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
        <Link to='/ViewReport'><label>ViewReports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link to='/Search'><label>Search</label></Link>
    </div>
    <table>
        <tr>
            <th className="viewTh2">Emp Id : <input className="ViewInput"/></th>
            <th className="viewTh2">Emp Name : <input className="ViewInput"/></th>
            <th className="viewTh2">Dept : <input className="ViewInput"/></th>
            <th className="viewTh2">Role : <input className="ViewInput"/></th>
        </tr>
        <tr>
            <th className="viewTh2">Email : <input className="ViewInput"/></th>
            <th className="viewTh2">Phone : <input className="ViewInput"/></th>
            <td className="viewTh2"></td>
            <td className="viewTh2"></td>
        </tr>
    </table>
    <hr></hr>
    <table>
        <tr>
            <th className="viewTh2">Report Id : <input className="ViewInput"/></th>
            <th className="viewTh2">Task : <input className="ViewInput"/></th>
            <th className="viewTh2">Description : <input className="ViewInput"/></th>
            <th className="viewTh2">Status : <input className="ViewInput"/></th>
        </tr>
        <tr>
            <th className="viewTh2">Strat Time : <input className="ViewInput"/></th>
            <th className="viewTh2">End Time : <input className="ViewInput"/></th>
            <th className="viewTh2">Start Date : <input className="ViewInput"/></th>
            <th className="viewTh2">End Date : <input className="ViewInput"/></th>
        </tr>
    </table>
    <Link to='/ViewReport'><input value='Back' type="button" className="viewBack" /></Link>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Admin;