import React, { useEffect, useState } from "react";
import Heading from "../../component/Heading/Heading";
import Iconslider from "./Iconslider";

function Whatsapp_api() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch("https://twinklemediahub.com/admin/sidenavabar/get_client_logos.php") // Change to your server path
      .then((res) => res.json())
      .then((data) => setLogos(data))
      .catch((err) => console.error("Error fetching logos:", err));
  }, []);

  return (
    <>
      <div id="our_usp" className="pt-5">
        <Heading headingLabel="Our Clients" />
      </div>

      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 ">
              {logos.length > 0 ? (
                <Iconslider products={logos} />
              ) : (
                <p>Loading client logos...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatsapp_api;
