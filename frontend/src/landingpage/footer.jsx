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

          <p>
            <b>Phone</b>: 
            <a href="tel:+918081257992">
           +91 8081257992
           </a>
             </p>

        <p>
          <b>WhatsApp</b>: 
         <a href="https://wa.me/918081257992" target="_blank">
           Chat on WhatsApp
           </a>
        </p>

         <p>
             <b>E-mail</b>: 
             <a href="mailto:nishadguptad@gmail.com">
               nishadguptad@gmail.com
             </a>
           </p>           
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
         
            <ul className="navbar-nav ms-auto">
            
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
            
                         <li className="nav-item">
                          <Link className="nav-link" to="/Projects">Projects</Link>
                        </li>
            
                        <li className="nav-item">
                          <Link className="nav-link" to="/About">About</Link>
                        </li>
            
                        <li className="nav-item">
                          <Link className="nav-link" to="/Tech">Tech</Link>
                        </li>
            
                          <li className="nav-item">
                          <Link className="nav-link" to="/Services">Services</Link>
                        </li>
            
                        <li className="nav-item">
                          <Link className="nav-link" to="/Content">Contact</Link>
                        </li>
            
                      </ul>

        </div>


       </div>
    );
}

export default Footer;