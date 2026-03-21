import React from "react";
import { SiReact,  SiJavascript, SiExpress, SiHtml5  } from 'react-icons/si';
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
function Icons(){
    return(
        <div style={{ display: 'flex', gap: '5rem', fontSize: '50px' }}>
      <SiReact color="#61DAFB" />
      <IoLogoNodejs  color="#339933" />
      <SiJavascript color="#F7DF1E" />
      <SiExpress color="#000000" />
      <SiHtml5 color="#E34F26" />
      <IoLogoCss3 color="#1572B6" />
    </div>
    )
}

export default Icons;