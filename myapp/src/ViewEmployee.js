import React from "react";
import {Link} from 'react-router-dom';
import './Admin.css';
function Admin(){
return(
    <>
     <div className="header">
        <img src="https://media.licdn.com/dms/image/D5616AQGsXz-uaJq2Xg/profile-displaybackgroundimage-shrink_200_800/0/1694684403459?e=2147483647&v=beta&t=NMv_B7mvAFKrHAyBT-BIGuDPlkio8ZSFkkx0G1QE-vo" className="imgEmp"></img>
        <label>Admin Dashboard</label>
        <label>Employee name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
            <img src="https://img.freepik.com/free-photo/business-woman-with-tablet-standing-office_1303-25394.jpg" className="empImg"></img>
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
    <table className="tab4">
        <tr>
            <th className="th2">Sr</th>
            <th className="th2">Emp Id</th>
            <th className="th2">Name</th>
            <th className="th2">Role</th>
            <th className="th2">Joining</th>
            <th className="th2">Date</th>
            <th className="th2">Dept</th>
            <th className="th2">Phone</th>
            <th className="th2">Email</th>
            <th className="th2">Address</th>
        </tr>
        <tr>
            <td className='td3'>1</td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
        </tr>
        <tr>
            <td className='td3'>2</td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
        </tr>
        <tr>
            <td className='td3'>3</td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
        </tr>
    </table>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Admin;