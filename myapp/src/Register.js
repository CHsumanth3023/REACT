import React from "react";
import './Register.css';
function Register(){
    return(
        <>
        <form>
   
   <h2><center>Register form</center></h2>

           <label><strong>First name:</strong></label>
           <input type="text" id="name" placeholder="Enter your first name" required /><br></br>
           <label><strong>Last name:</strong></label>
           <input type="text" id="name" placeholder="Enter your last name" required/><br></br>
           <label><strong>Phone number:</strong></label>
            <input type="number" id="number" placeholder="Enter your phone number" required/><br></br>
            <label><strong>Email:</strong></label>
            <input type="email" id="email" placeholder="Enter your email" required/><br></br>
            <label><strong>Password:</strong></label>
            <input type="text" id="password" placeholder="Enter your password" required/><br></br>     
            <button>Register</button>
           
               <p>Don't have an account?</p>
               
   </form>

                    </>
        )
    }
    export default Register;