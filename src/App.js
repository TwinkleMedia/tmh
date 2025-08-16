import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./pages/Home/Home";
import Our_work from "./pages/Work/Our_work";
// Removed unused imports:
// import About from "./pages/About/About";
// import Service from "./pages/service/Service";
// import Influencer from "./pages/Influencer/Influencer.js";
// import Our_usp from "./component/Ourusp/Our_usp.jsx";
// import Blog from "./pages/Blog/Blog.js";
// import Whatsappbutton from "./pages/Whatsapp/Whatsappbutton.jsx";
// import { Helmet } from "react-helmet";

import Whatsapp_api from "./component/Whatsapp-api/Whatsapp_api.jsx";
import HomePortfolio from "./pages/home-portfolio/HomePortfolio.js";
import HomeGrid from "./pages/home-grid/HomeGrid.js";
import TestimonialSection from "./pages/testimonial/TestimonialSection.js";
import Why from "./pages/Why/Why.js";
import FaQ from "./pages/FAQ/FaQ.js";
import ReelSlider from "./reelssection/ReelSlider.js";
import BehindTheSeen from "./pages/BTS/BehindTheSeen.js";
import AnimatedVideos from "./pages/animationsection/AnimatedVideos.js";
import ClientTestimonial from "./pages/clienttestmonial/ClientTestimonial.jsx";

export default function App() {
  // Removed unused isLoading state since it's not being used

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="body">
        <Home />
        <Why />
        <Our_work />
        <BehindTheSeen />
        <HomePortfolio />
        <HomeGrid />
        <AnimatedVideos />
        <ReelSlider />
        <ClientTestimonial />
        <TestimonialSection />
        <FaQ />
        <Whatsapp_api />
      </div>
    </>
  );
}