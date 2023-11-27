import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';

function Task(){
return(
    <>
     <div className="header">
        <label>Site Name</label>
        <label>Dashbord Name</label>
        <label>Emp Name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZq5Z1bD3PTMhQXBX_31CyEw8wNCjWHjLl3yDkRvjrYKoPIJ0qdcaB1ZNIPoSyqIazJ68&usqp=CAU" alt="" className="B"></img>
            <Link><label>Emp Id</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Task</label></Link>
            <Link to='/Trainings'><label>Trainings</label></Link>
            <Link><label>Sign off</label></Link>
        </aside>
    </div>
    <table  className='tabTasks'>
        <tr>
            <th>Task</th>
            <th>Discription </th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status </th>
            <th>Start Date</th>
            <th>End Date</th>
        </tr>
        <tr>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
        </tr>
    </table>
    <input value='Sumbit' className="task" />
    <Link to='/AllTask'> <input value='All Tasks' className="task"/></Link>
     
    <div className="footer"></div>
    </>
)
}
export default Task;