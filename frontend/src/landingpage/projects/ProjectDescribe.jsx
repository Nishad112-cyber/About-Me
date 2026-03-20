import React from "react";
import ZerodhaPage from "../../images/Zerodha-Page.png"
import wanderpage from "../../images/wanderlust.avif"
import dashboard from"../../images/Dasboard.png"
import ProjectCard from "./ProjectCard";
import { Button } from "bootstrap";
function ProjectDescribe(){
    return(
      <div>

        <div className="row mt-5" >
          <div className="col-6">
            <ProjectCard
          imagepng={ZerodhaPage}
          projectname="Zerodha-Clone"
          problem="Description"
          description="A clean and responsive UI clone of Zerodha’s trading dashboard."
          techstack="Tech-Stack"
           language="React , Node.js, Express.js, Html, CSS, Bootstrape, MaterialUI, "  
          livelink="https://zerodha-clone-5-jddr.onrender.com"
          githublink="https://github.com/Nishad112-cyber/Zerodha-Clone"
        />
        </div>

        <div className="col-6">
            <ProjectCard
          imagepng={wanderpage}
          projectname="WanderLust"
          problem="Description"
          description="A full-stack travel platform for exploring destinations and managing bookings."
          techstack="Tech-Stack"
          language=" Node.js, Express.js, Html, CSS, Bootstrape, MaterialUI,Mongoose, EJS "

          livelink="https://wanderlust-mern-i96d.onrender.com/listings"
          githublink="https://github.com/Nishad112-cyber/WanderLust-MERN"
         
        />
        </div>
      </div>

         
         <div className="row mt-5" >
          <div className="col-6">
            <ProjectCard
          imagepng={dashboard}
          projectname="Zerodha-Dshboard"
          problem="Description"
          description="A clean and responsive UI clone of Zerodha’s trading dashboard."
          techstack="Tech-Stack"
          language="React , Node.js, Express.js, Html, CSS, Bootstrape, MaterialUI, Mongoose"
          livelink="https://zerodha-clone-6-0ivl.onrender.com"
          githublink="https://github.com/Nishad112-cyber/Zerodha-Clone"
        />
        </div>

        <div className="col-6">
            <ProjectCard
          imagepng={ZerodhaPage}
          projectname="Zerodha-Clone"
          problem="Description"
          description="A clean and responsive UI clone of Zerodha’s trading dashboard."
          techstack="Tech-Stack"
          livelink="https://zerodha-clone-5-jddr.onrender.com"
          githublink="https://github.com/Nishad112-cyber"
        />
        </div>
      </div>
           

      </div>
    )
}

export default ProjectDescribe;