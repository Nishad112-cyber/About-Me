import React from "react";
import Project from "./Project";


function ProjectCard({
  imagepng,
  projectname,
  problem,
  description,
  techstack,
  heading,
  paragraph,
  livelink,
  githublink,
  language,
  
}) {
  return (
    <div className="container">
      <div className="row g-4 align-items-center ">
        <div className="col-md-6 col-12 w-100">
          <img src={imagepng}  
          className="homephoto "
           
          alt="" />

          <div className="ground  ">
          <h5 className="ms-5 mt-2">{projectname}</h5>
          <p><b>{problem}</b></p>
          <p>{description}</p>
          <p>
            <b>{techstack}</b>
            </p>
             
             <p>{language}</p>

          <h3>{heading}</h3>
          <p>{paragraph}</p>
          
            
            <div>
                <a href={livelink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary me-2">
                Live Demo
                </button>
             </a>

               <a href={githublink} target="_blank" rel="noopener noreferrer">
                 <button className="btn btn-outline-secondary">
                 GitHub Code
                </button>
             </a>
           </div>

              
        </div>
         
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
