import React from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';
function ForgetPassword(){
    return(
        <>
        <form>
        <h1><center>Forget Password</center></h1>
        <label ><strong>Old Password </strong></label>
           <input type="password" id="email" placeholder="Enter Old password" /><br/>
         <label ><strong>New Password </strong></label>
           <input type="password" id="email" placeholder="Enter new password" /><br/>
           <label ><strong>confirm Password</strong>  </label>
           <input type="password" class="password" id="password" placeholder="Enter confirm Password" /><br/>
          <button type="submit" value="submit" class="button" >Login</button>
          
       </form>
        </>
    )
}
export default ForgetPassword;