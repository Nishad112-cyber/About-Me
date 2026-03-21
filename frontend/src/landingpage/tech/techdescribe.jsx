import React from "react";
import TechCards from "./techCard";

function ParentComponent() {
 
  const frontendSkills =["HTML5", "CSS3","JavaScript","React.js","Bootstrap", "Responsive Design"]
  const BackendSkills =["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs", "JWT Authentication"];
  const toolsSkills = ["Git","VSCode","Postman","Figma"," Render", "Chrome DevTools"];
  const languages = ["Java", "JavaScript", "SQL", "Hindi", "English", "Basic Telugu"];


  return (
    <div>
        <div className="row cardskillsground">
  <div>
      <h2 className="head"  style={{textAlign:"center"}}>My Tech Skills</h2>
  </div>
      <div className="col-3">
      <TechCards heading="Frontend" paragraphs={frontendSkills} />
      </div>

      <div className="col-3">
       <TechCards heading="Backend" paragraphs={BackendSkills} />
       </div>

        <div className="col-3">
      <TechCards heading="Tools" paragraphs={toolsSkills} />
      </div>

      <div className="col-3">
       <TechCards heading="Languages" paragraphs={languages} />
       </div>

    </div>
    </div>
  );

  
}

export default ParentComponent;