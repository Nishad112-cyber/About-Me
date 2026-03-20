import React from "react";
import mentainenceIMG from "../../images/mentainence.png" 
import uptimeIMG from "../../images/uptime.png"
import securityIMG from "../../images/security.png"
import trustIMG from "../../images/trust.png"


function Work(){
    return(
        <div className="row mt-5">
           <div className="col-2 ms-3">
           <img src={mentainenceIMG} alt="mentainence"  style={{width:"25%"}} />
           <h3> Maintenance</h3>
           <p>We provide regular updates, backups, and expert support to keep your presence running smoothly and efficiently.</p>
           </div>

           <div className="col-3 ms-1">
           <img src={uptimeIMG} alt="mentainence"  style={{width:"25%"}} />
           <h3>24*7 Uptime</h3>
           <p>Our infrastructure and expertise ensure 24×7 uptime, providing uninterrupted access to our services.</p>
           </div>

           <div className="col-3 ms-2">
           <img src={securityIMG} alt="mentainence"  style={{width:"25%"}} />
           <h3>Data Security</h3>
           <p>Protect your digital assets with our ironclad data security measures and regular vulnerability scans.</p>
           </div>

           <div className="col-3 ms-2">
           <img src={trustIMG} alt="mentainence"  style={{width:"25%"}} />
           <h3>Your Trust</h3>
           <p>Your trust is our top priority, and we are committed to upholding it, ensuring that you feel confident.</p>
           </div>
        </div>
    )
}

export default Work;