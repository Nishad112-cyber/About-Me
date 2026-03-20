import React from "react";
import Hero from "./hero";
import Vision from "./vision";
import Work from "./work";
import Describe from "./describe";

function Homepage(){
    return(
        <div>
          <Hero/>
          <Vision/>
          <Work/>
          <Describe/>
        </div>
    )
}

export default Homepage;