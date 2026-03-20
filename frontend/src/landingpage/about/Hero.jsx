import React from "react";
import DileepImg from "../../images/DileepNishad.jpeg";
import "../../index.css";
function Hero() {
  return (
    <div>
      <div className="image-container">
        <img src={DileepImg} className="photo" alt="DileepImage" />
      </div>
      <div className="title">
        <h3> Dileep Nishad</h3>
        <h5>Founder & CEO Nivaro</h5>
          <h1 className="mt-5">About Founder</h1>
      </div>
      <div className="Info">
      
        <p className="ms-5 mt-5">
          I am Dileep Nishad, a passionate MERN Stack Developer currently
          pursuing B.Tech in Information Technology. I enjoy building modern,
          responsive, and user-friendly web applications using technologies like
          React, Node.js, and MongoDB. I have hands-on experience in developing
          full-stack projects and solving real-world problems through code. I am
          continuously learning and improving my skills to stay updated with the
          latest technologies. My goal is to build impactful digital solutions
          and grow as a professional developer.
        </p>
      </div>
    </div>
  );
}

export default Hero;
