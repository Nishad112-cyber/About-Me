import React from "react";
import ZerodhaPage from "../../images/Zerodha-Page.png"
import wanderpage from "../../images/wanderlust.avif"
import dashboard from"../../images/Dasboard.png"
import ProjectCard from "./ProjectCard";
import MiniProjectCard from "./MiniProjectCard";
import simonimage from "../../images/simon-image.png"
import weather from "../../images/Weather-app.png"
import camera from "../../images/cameraimage.png"
import zoomapp from "../../images/Zoom-App.png"

function ProjectDescribe(){
    return(
      <div>
       <div className="HeadingSpace">
        <div className="headCentre"><h3>Featured Full-Stack MERN Projects</h3></div>
        <div className="row LargeCard mt-5" >
          <div className="col-lg-6 col-md-12">
            <ProjectCard
          imagepng={ZerodhaPage}
          projectname="Zerodha-Clone"
          problem="Description"
          description="Zerodha Trading Platform UI Clone with Modern Responsive Design"
          techstack="Tech-Stack"
           language="React , Node.js, Express.js, Html, CSS, Bootstrape, MaterialUI, "  
          livelink="https://zerodha-clone-5-jddr.onrender.com"
          githublink="https://github.com/Nishad112-cyber/Zerodha-Clone"
        />
        </div>

        <div className="col-lg-6 col-md-12">
            <ProjectCard
          imagepng={wanderpage}
          projectname="WanderLust"
          problem="Description"
          description="Full-Stack Travel Platform with Session-Based Authentication & MVC Architecture."
          techstack="Tech-Stack"
          language=" Node.js, Express.js, MongoDB, EJS, Bootstrap, JavaScript, Session Authentication "

          livelink="https://wanderlust-mern-i96d.onrender.com/listings"
          githublink="https://github.com/Nishad112-cyber/WanderLust-MERN"
         
        />
        </div>
      </div>
    </div>
         
         <div className="row LargeCard mt-5 g-4" >
          <div className="col-lg-6 col-md-12">
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

        <div className="col-lg-6 col-md-12">
            <ProjectCard
          imagepng={zoomapp}
          projectname="Zoom-App(WebRTC)"
          problem="Description"
         description="A real-time video conferencing web app that allows users to join meeting rooms and communicate via video and audio."
          techstack="Tech-Stack"
          language="Node.js, Express.js, MongoDB, React.js, WebRTC, Socket.IO, JavaScript, JWT Authentication"
          livelink="https://zoomapp-4webrtc.onrender.com"
          githublink="https://github.com/Nishad112-cyber/ZoomApp-WebRTC"
        />
        </div>



        
      </div>
           
           <div className="row SmallConainer">
            <div className="miniheading"><h1>Mini Frontend Projects</h1></div>
            <div className="indivisulMini col-lg-4 col-md-6 col-12 ">
      <MiniProjectCard
            title="Simon Game"
            desc="Memory game built using JavaScript."
            tech1="JavaScript"
            tech2="CSS"
            
            github="https://github.com/Nishad112-cyber/Simon-game"
            icon={simonimage}
        />   
          </div>

            <div className="indivisulMini col-4 ">
           <MiniProjectCard
            title="Weather App"
            desc="Weather app with small API feature"
            tech1="JavaScript"
            tech2="CSS"
           
            github="https://github.com/Nishad112-cyber/Weather-App"
            icon={weather}
        />          
         </div>

         <div className="indivisulMini col-lg-4 col-md-6 col-12 ">
           <MiniProjectCard
            title="Cemera Home"
            desc="Cemera homepage show by only html"
            tech1="HTML"
           
            
            github="https://github.com/Nishad112-cyber/CameraFeature"
            icon={camera}
       />  
             </div>

      </div>
      </div>
    )
}

export default ProjectDescribe;