import React from "react";

import ServiceCard from "./ServicesCard";

function ServicesList() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">My Services</h2>

      <div className="row">

        <div className="col-md-4">
          <ServiceCard 
            title="Frontend Development"
            description="I build responsive UI using React."
          />
        </div>

        <div className="col-md-4">
          <ServiceCard 
            title="Backend Development"
            description="I work with Node.js and Express."
          />
        </div>

        <div className="col-md-4">
          <ServiceCard 
            title="Full Stack"
            description="Complete MERN applications."
          />
        </div>

      </div>

      
    </div>
  );
}

export default ServicesList;