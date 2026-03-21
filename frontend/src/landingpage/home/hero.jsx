import React from "react";
import "../../index.css"
import Icons from "./work";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h4>Hi, I’m</h4>

          <h1 className="fw-bold text-primary">
            Dileep Nishad
          </h1>

          <h5 className="mb-3">
            Full-Stack MERN Developer
          </h5>

          <p>
            I build scalable web applications with clean UI 
            and secure backend systems.
          </p>

          <div className="Homebotton">

          <div className="mt-3 d-flex gap-3">
              <Link className="nav-link" to="/Projects">
              <button className="btn btn-primary">View Projects</button>
             </Link>

           <a href="/Dileep_Nishad_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-dark">Download Resume</button>
          </a>
         </div>
             </div>    


          <div className="mt-4">
               <Icons />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 text-center">
          <img
            src="your-image.png"
            alt="profile"
            className="img-fluid hero-img"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;