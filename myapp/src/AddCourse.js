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
        <Link to='/AddTopics'><label>AddTopics</label></Link>
        <Link to='/ViewReports'><label>ViewReports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link><label>Search</label></Link>
    </div>
    <div className="addCourse">
    <label className="">Course Name : <input/></label>
    <input type='button' value='Submit' className="courseSubmit"></input>
    </div>
    <div className="divCourse">
        <table>
            <tr>
                <th className='addTd'>Course Id</th>
                <th className='addTd'>Course Name</th>
            </tr>
            <tr>
                <td className='addTd'>1</td>
                <td className='addTd'>Html</td>
            </tr>
            <tr>
                <td className='addTd'>2</td>
                <td className='addTd'>JavaScript</td>
            </tr>
            <tr>
                <td className='addTd'>3</td>
                <td className='addTd'>React</td>
            </tr>
        </table>
    </div>
    
    <div mailto classname="footer">anarghyacommunications</div>
    </>
)
}
export default Admin;