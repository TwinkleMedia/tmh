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
    { name: "Aryan Client", src: "/asset/ourClients/aryanclient1.png" },
    { name: "ASCC", src: "/asset/ourClients/ASCC.png" },
    { name: "Divyam Client", src: "/asset/ourClients/divyamclient2.png" },
    { name: "EASC", src: "/asset/ourClients/EASClogo.webp" },
    { name: "Fine Logo", src: "/asset/ourClients/finelogo.png" },
    { name: "Four Knots", src: "/asset/ourClients/FOURKNOTS.png" },
    { name: "Hozon Client", src: "/asset/ourClients/HOZONclient4.png" },
    { name: "Merits Education", src: "/asset/ourClients/meritseducation.webp" },
    { name: "Naumika Dhingra", src: "/asset/ourClients/naumikaDhingra.webp" },
    { name: "Brew Logo", src: "/asset/ourClients/brewLogo.avif" },
    { name: "Coder Technologo", src: "/asset/ourClients/coderTechnologo.avif" },
    { name: "DSD", src: "/asset/ourClients/dsd.png" },
    { name: "ECDiplus", src: "/asset/ourClients/ecdipluslogo.webp" },
    { name: "Eksa", src: "/asset/ourClients/eksalogo.webp" },
    { name: "Fancy Logo", src: "/asset/ourClients/fancylogo.png" },
    { name: "Kidezee", src: "/asset/ourClients/kidezeeLogo.png" },
    { name: "Meridian", src: "/asset/ourClients/meridianLogo.png" },
    { name: "Nandi International", src: "/asset/ourClients/nandiInternationalLogo.png" },
    { name: "Nest Guru", src: "/asset/ourClients/Nestgurulogo.png" },
    { name: "Rapidise", src: "/asset/ourClients/rapidiseLogo.jpg" },
    { name: "Samala", src: "/asset/ourClients/samalaLogo.webp" },
    { name: "Skyline", src: "/asset/ourClients/skyline.webp" },
    { name: "Unifleet", src: "/asset/ourClients/unifleetlogo.png" },
    { name: "YC", src: "/asset/ourClients/ycLogo.jpg" },
  ];
  const logoSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Twinkle Media Hub",
    "url": "https://www.twinklemediahub.com", // replace with your site
    "logo": logos.map((logo) => logo.src),
    "sameAs": [
      "https://www.facebook.com/twinklemediahub",
      "https://www.instagram.com/twinklemediahub/",
      "https://www.linkedin.com/company/twinklemediahub/"
    ]
  };
  return (
    <>
      <section id="our-clients" className="client-section py-5" aria-labelledby="our-clients-heading">
        <script type="application/ld+json">{JSON.stringify(logoSchema)}</script>

        <div className="container">
          <Heading headingLabel="Our Clients" id="our-clients-heading" />

          <div className="client-slider-container py-5">
            {/* First row: left to right */}
            <div className="client-slider client-slider-left" role="list">
              {[...logos, ...logos].map((logo, i) => (
                <figure key={i} className="client-item" role="listitem">
                  <img src={logo.src} alt={`Logo of ${logo.name}`} loading="lazy" />
                  <figcaption className="visually-hidden">{logo.name}</figcaption>
                </figure>
              ))}
            </div>

            {/* Second row: right to left */}
            <div className="client-slider client-slider-right mt-4" role="list">
              {[...logos, ...logos].map((logo, i) => (
                <figure key={i} className="client-item" role="listitem">
                  <img src={logo.src} alt={`Logo of ${logo.name}`} loading="lazy" />
                  <figcaption className="visually-hidden">{logo.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whatsapp_api;
