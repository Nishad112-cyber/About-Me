import React from "react";

function MiniProjectCard({ title, desc, tech1, tech2, live, github, icon }) {
  return (
    <div className="mini-card">

      <div className="top-design"></div>

      <div className="icon">
        <img src={icon} alt="project" />
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="tags">
        <span>#{tech1}</span>
        <span>#{tech2}</span>
      </div>

      <div className="buttons">
       
        <a href={github} target="_blank">GitHub</a>
      </div>

    </div>
  );
}

export default MiniProjectCard;