import React from "react";

function ConnectCard({
  logopng,
  heading,
  clickid,
  type   
}) {

  let link = "";

  if (type === "email") {
    link = `mailto:${clickid}`;
  } 
  else if (type === "phone") {
    link = `tel:${clickid}`;
  } 
  else if (type === "whatsapp") {
    link = `https://wa.me/${clickid}`;
  } 
  else {
    link = clickid; 
  }

  return (
    <div className="cardA1">
      
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "10px" 
      }}>
        <span>{logopng}</span>
        <span><b>{heading}</b></span>
      </div>

      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button>
          <h5>{clickid}</h5>
        </button>
      </a>

    </div>
  );
}

export default ConnectCard;