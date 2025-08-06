import React from "react";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import "./portfoliopage.css";
import graphicImg from "./Background-Image/Graphic.png";
// Animation imports
import AOS from "aos";
import "aos/dist/aos.css";
// Carousel Imports
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PortfolioContent from "./PortfolioContent";

export default function PortfolioPage() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  });

  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  return (
    <>
      <div className="portfolioPageHead" id="PortfolioPage">
        <Breadcrumbs
          breadheading={"Portfolio"}
          breadcrumbsLabel={"Portfolio"}
        />
      </div>

      {/* <div className='container-fluid portfolio-back'>
  <div className='container port-section'>
    <h5>Twinkle Media Hub </h5>
    <h1 className='portfolio-heading pt-4'>
      Advotising <br/> Web Desiging <br/> <span className='port-span'>Graphics Desiging</span> 
    </h1>
  </div>
</div> 
<div className='container-fluid portfolio-web'>

  <div className='container port-web-section'>
   <h2 className='port-web-heading text-white'>Website Design</h2>
    
  </div>
</div>

<div className='container-fluid portfolio-graphic'>

  <div className='container port-web-section'>
   <h2 className='port-web-heading text-white'>Graphics Design</h2>
    
  </div>
</div>

<div className='container-fluid portfolio-reels'>

  <div className='container port-web-section'>
   <h2 className='port-web-heading text-white'>Reels</h2>
    
  </div>
</div> */}
      <PortfolioContent/>
    </>
  );
}
