import React from "react";
import { Link } from 'react-router-dom';
import './Landing.css';
function Landing(){
    return(
        <>
        <table>
            <tr>
            <td>
            <img src="https://static.wixstatic.com/media/2fb119_19ff2376b94e4fd09b975b2b63853ec8~mv2.png/v1/crop/x_0,y_39,w_1751,h_418/fill/w_538,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANARGHYA%20Logo%20.png" className="img1"></img>
            </td>
            <td></td>
            <td></td>
            </tr>
            <tr>
                <td><p>Welcome to Anarghya Communications, your gateway to innovative software
   and digital excellence. We sculpt digital experiences, weaving cutting-edge code
    and creative mastery. Our bespoke software transcends expectations, while our
    avant-garde marketing strategies paint vibrant online landscapes. At Anarghya,
    we don't offer services; we curate digital narratives that captivate and convert.
    Join us in the dance of bytes and pixels, where every step is a leap into the future</p></td>
                <td></td>
                <td><img src="https://previews.123rf.com/images/nd3000/nd30001704/nd3000170401554/76600044-happy-business-colleagues-working-in-company-office.jpg.jpg" className="img2"></img></td>
            </tr>
             </table>
            < Link type="button" to="/Login"><input value="Explore Now" className="input"/></Link>
            
        </>
    )
}
export default Landing;