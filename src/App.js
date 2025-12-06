import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./pages/Home/Home";
import Our_work from "./pages/Work/Our_work";
// import About from "./pages/About/About";
// import Service from "./pages/service/Service";
// import Scrollingg from './component/ScrollingText/Scrollingg.js';
// import Influencer from "./pages/Influencer/Influencer.js";
// import Our_usp from "./component/Ourusp/Our_usp.jsx";
import Whatsapp_api from "./component/Whatsapp-api/Whatsapp_api.jsx";
import HomePortfolio from "./pages/home-portfolio/HomePortfolio.js";
import HomeGrid from "./pages/home-grid/HomeGrid.js";
// import Blog from "./pages/Blog/Blog.js";

import TestimonialSection from "./pages/testimonial/TestimonialSection.js";
// import Loadder from './pages/Loadder/Loadder.jsx';
// import Whatsappbutton from "./pages/Whatsapp/Whatsappbutton.jsx";
// import { Helmet } from "react-helmet";
// import reelslider from './pages/Reel.js';
import Why from "./pages/Why/Why.js";
import FaQ from "./pages/FAQ/FaQ.js";
import ReelSlider from "./reelssection/ReelSlider.js";
import BehindTheSeen from "./pages/BTS/BehindTheSeen.js";
import AnimatedVideos from "./pages/animationsection/AnimatedVideos.js";
import ClientTestimonial from "./pages/clienttestmonial/ClientTestimonial.jsx";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
        {/* <About /> */}
        {/* <Service /> */}
        {/* <Scrollingg /> */}

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
        {/* <Our_usp /> */}
        <Whatsapp_api />
        {/* <Influencer /> */}
        {/* <Blog /> */}
      </div>
      {/* )} */}
    </>
  );
}
