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
        <Link to='/Addtopics'><label>AddTopics</label></Link>
        <Link to='/ViewReports'><label>ViewReports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link to='/Search'><label>Search</label></Link>
    </div>
    <table>
        <tr>
            <th className="viewTh">Sr</th>
            <th className="viewTh">Report Id</th>
            <th className="viewTh">Task</th>
            <th className="viewTh">Status</th>
            <th className="viewTh">Start time</th>
            <th className="viewTh">End Time</th>
            <th className="viewTh">Emp Id</th>
            <th className="viewTh">Action</th>
        </tr>
        <tr>
            <td className="viewTh">1</td>
            <td className="viewTh">1</td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh">1</td>
            <td className="viewTh"><Link to='/View'><input type="button" value='View' className="topicInput1"/></Link></td>
        </tr>
    </table>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Admin;