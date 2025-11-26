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
    "/asset/ourClients/brewLogo.avif",
    "/asset/ourClients/coderTechnologo.avif",
    "/asset/ourClients/dsd.png",
    "/asset/ourClients/ecdipluslogo.webp",
    "/asset/ourClients/eksalogo.webp",
    "/asset/ourClients/fancyLogo.png",
    "/asset/ourClients/kidezeeLogo.png",
    "/asset/ourClients/meridianLogo.png",
    "/asset/ourClients/nandiinternationalLogo.png",
    "/asset/ourClients/Nestgurulogo.png",
    "/asset/ourClients/rapidiseLogo.jpg",
    "/asset/ourClients/samalaLogo.webp",
    "/asset/ourClients/skyline.webp",
    "/asset/ourClients/unifleetlogo.png",
    "/asset/ourClients/ycLogo.jpg",
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


      <div className="client-slider-container py-5">
        {/* First row: left to right */}
        <div className="client-slider client-slider-left">
          {[...logos,...logos].map((logo, i) => (
            <div key={i} className="client-item">
              <img src={logo} alt="Ourclients" />
            </div>
          ))}
        </div>
        {/* Second row: right to left */}
        <div className="client-slider client-slider-right mt-4">
          {[...logos,...logos].map((logo, i) => (
            <div key={i} className="client-item">
              <img src={logo} alt="Ourclients" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Whatsapp_api;
