import React from "react";
import "./Heading.css";

export default function Heading({ headingLabel }) {
  return (
    <div className="heading ">
      {/* <span>{headingLabel}</span> */}
      {headingLabel == "our team" ? (
        <h4>{headingLabel}</h4>
      ) : (
        <h2>{headingLabel}</h2>
      )}

      {/*(headingLabel!='testimonials')?<h3>{headingLabel}</h3>:<h2>{headingLabel}</h2>*/}
    </div>
  );
}
