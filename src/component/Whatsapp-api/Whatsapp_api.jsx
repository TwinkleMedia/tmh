import React, { useEffect, useState } from "react";
import Heading from "../../component/Heading/Heading";
// import Iconslider from "./Iconslider";
import './icon.css'
function Whatsapp_api() {
  // const [logos, setLogos] = useState([]);

  // useEffect(() => {
  //   fetch("https://twinklemediahub.com/admin/sidenavabar/get_client_logos.php") // Change to your server path
  //     .then((res) => res.json())
  //     .then((data) => setLogos(data))
  //     .catch((err) => console.error("Error fetching logos:", err));
  // }, []);
  const logos = [
    "/asset/ourClients/aryanclient1.png",
    "/asset/ourClients/ASCC.png",
    "/asset/ourClients/divyamclient2.png",
    "/asset/ourClients/EASClogo.webp",
    "/asset/ourClients/fineorgokemclient3.png",
    "/asset/ourClients/FOURKNOTS.png",
    "/asset/ourClients/HOZONclient4.png",
    "/asset/ourClients/meritseducation.webp",
    "/asset/ourClients/naumikaDhingra.webp",
  ]
  return (
    <>
      <div id="our_usp" className="pt-5">
        <Heading headingLabel="Our Clients" />
      </div>

      {/* <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 ">
              {logos.length > 0 ? (
                <Iconslider products={logos.map((logo, index) => ({
                  id: index + 1,
                  image: logo
                }))} />
              ) : (
                <p>Loading client logos...</p>
              )}
            </div>
          </div>
        </div>
      </div> */}


      <div className="container py-5">
        <div className="row justify-content-center">
          {logos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 client-item">
              <div className="client-box">
                <img src={logo} alt="client-logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Whatsapp_api;
