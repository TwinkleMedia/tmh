import React, { Suspense } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Service from './pages/service/Service';
// import Scrollingg from './component/ScrollingText/Scrollingg.js';
import Blog from './pages/Blog/Blog.js';
import Influencer from './pages/Influencer/Influencer.js';
import Our_usp from './component/Ourusp/Our_usp.jsx';
import Whatsapp_api from './component/Whatsapp-api/Whatsapp_api.jsx';
import Home_portfolio from './pages/Portfolio/Home_portfolio.js';

import HomePortfolio from './pages/home-portfolio/HomePortfolio.js';
import HomeGrid from './pages/home-grid/HomeGrid.js';
import TestimonialSection from './pages/testimonial/TestimonialSection.js';
import HomeAd from './pages/home-ad/HomeAd.js';
// import Loadder from './pages/Loadder/Loadder.jsx';
import Whatsappbutton from './pages/Whatsapp/Whatsappbutton.jsx';
import { Helmet } from 'react-helmet';
// import reelslider from './pages/Reel.js';
import Why from './pages/Why/Why.js';
import FaQ from './pages/FAQ/FaQ.js';

import ReelSlider from './reelssection/ReelSlider.js';
import Plans from './pages/Ourplans/Plans.js';
export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  return (
    <>

{/* {isLoading?(<Loadder/>):( */}

   <div style={{overflow:'hidden'}}>
  {/* //   <Suspense  fallback={<Loadder/>}> */}

  <Home/>
  {/* <About/> */}
  {/* <Service/> */}
  {/* <Scrollingg/> */}
  <Why/>
  <HomePortfolio/>
  <HomeAd/>
  <HomeGrid/>
<ReelSlider/>
<Plans/>
  <TestimonialSection/>
  <FaQ/>
  {/* <Our_usp/> */}
  <Whatsapp_api/> {/*This is collaboration / client */}
  {/* <Influencer/> */}
  {/* <Blog/> */}
  
    {/* </Suspense> */}
  </div>
    {/* )
 }  */}
    </>
    
  )
}
