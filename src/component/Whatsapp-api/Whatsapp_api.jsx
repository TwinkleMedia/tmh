import React from "react";
import "./whatsapp_api.css";
import Heading from "../../component/Heading/Heading";
import Iconslider from "./Iconslider";
import image from "./logo";
function Whatsapp_api() {
  return (
    <>
      <div id="our_usp" className="pt-5">
        <Heading headingLabel="Our Clients" />
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <Iconslider products={image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatsapp_api;
