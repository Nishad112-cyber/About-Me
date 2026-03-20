import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";


function Footer() {
    return ( 
       <div className="row  footer ">

        <div className='col-4'>
         <h2>Nivaro</h2>
         <ul>
         <li>
         <p>Meerut , Uttar Pradesh</p>
         </li>
         <li>
         <p>India</p>
         </li>

        <p><b>Phone</b>: +91 8081257992</p>
        <p><b>WhatsApp</b>: +91 9125573695</p>
         <p><b>E-mail</b>: <Link>nishadguptad@gmail.com</Link></p>
         </ul>
        </div>

       <div className='col-4 '>
        <ul>
           
             <h2>Categories</h2>
            
             <li>
             <p>Services in details</p>
             </li>
             <li>
                <p>Upadates</p>
             </li>
             
        </ul>
          
        </div>

          <div className='col-4 '>
         <h2>Important Links</h2>
         <ul>
            <p>
             About
            </p>
             <p>
             Services
            </p>
             <p>
             Tech
            </p>
             <p>
             Projects
            </p>
             <p>
             Contact
            </p>
             
         </ul>

        </div>


       </div>
    );
}

export default Footer;