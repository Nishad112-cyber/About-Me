import React from "react";

function ServiceCard({ title, description }) {
  return (
    <div className="card p-3">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;