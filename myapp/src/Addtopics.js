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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnXdQ88Dl8W7h68lpqGVbYzCUEGA8UoRSaw&usqp=CAU.jpg" className="empImg"></img>
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
        <Link><label>Search</label></Link>
    </div>
    <div className="addCourse">
    <label className="">Course Name : <input/></label>
    <label className="">Topic Name : <input/></label>
    <input type='button' value='Submit' className="courseSubmit"></input>
    </div>
    <div className="divCourse">
        <table>
            <tr>
                <th className='addTd'>Topic Id</th>
                <th className='addTd'>Course Name</th>
                <th className='addTd'>Course Id</th>
            </tr>
            <tr>
                <td className='addTd'>1</td>
                <td className='addTd'>oops</td>
                <td className='addTd'>1</td>
            </tr>
            <tr>
                <td className='addTd'>2</td>
                <td className='addTd'><input className="topicInput"/></td>
                <td className='addTd'><input className="topicInput"/></td>
            </tr>
            <tr>
                <td className='addTd'>3</td>
                <td className='addTd'><input className="topicInput"/></td>
                <td className='addTd'><input className="topicInput"/></td>
            </tr>
        </table>
    </div>
    
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Admin;