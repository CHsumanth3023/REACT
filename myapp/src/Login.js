import React, { useState } from "react";
  import {Link, useNavigate} from 'react-router-dom';
  import './Login.css';
  import Employee from './Employee';


 function Login(){
   const[email,setEmail]=useState("");
   const[password,setpassword]=useState("");
   const[consoleMessage,setErrorMessage]=useState("");
   const navigate=useNavigate();

   function verifyLogin(e){
    e.preventDefault();

    if(email===""){
      setErrorMessage("please enter a email.");
    }
    else if (password===""){
      setErrorMessage("plase enter a passeord.");
    }
    else if (email==="emp@gmail.com"&&password==="Suman777"){
      alert("Welcome to Employee Dashboard.");
      navigate('/Employee')
    }
    else if(email==="admin@gmail.com"&& password==="Suman777"){
      alert("Welcome to Admin Dashboard.");
      navigate('/Admin')
    }
    else if (email!=="Sumanth777@gmail.com"){
      setErrorMessage("please enter a valid password.");
    }
    else{
      setErrorMessage("Please enter a valid password.");
    }
   }
     return(
    <div class="wrapper">
      
       <h1 class="heading">Login Form</h1> 
        <label ><strong> Email: </strong></label>
         <input 
         type="text" 
         id="email"
          placeholder="Enter your Email"
          value={email} 
          className="inputLogin"
          onChange={(e) => setEmail(e.target.value)}
          />
           
         <label><strong>Password:</strong></label>
          <input 
          type="password" 
          class="password" 
          id="password" 
          placeholder="Enter your Password"
          className="inputLogin" 
          onChange={(e) => setpassword(e.target.value)}
          /><br/>
         <Link to ="/Forgetpassword" class="forgot">Forgetpassword</Link><br></br>
      <button type="submit" className="button" onClick={verifyLogin}>Login</button><br></br>
       
       <Link to ='/Register' class="forgot">Register now</Link>
     
    </div>
   )

  }
export default Login;
export{useNavigate};