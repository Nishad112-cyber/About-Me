import React from "react";
import ParentComponent from "./techdescribe";
import "../../index.css"
function TechCards(props) {
  return (
    <div className="tech-card" >
      <h2>{props.heading}</h2>
      {props.paragraphs.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default TechCards;