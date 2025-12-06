import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './media.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import PortfolioPage from './component/All-pages/PortfolioPage';
import Socialmediamarketing from './component/All-pages/Allservices/Socialmediamarketing';
import Webdevlopment from './component/All-pages/Allservices/Webdevlopment';
import Seo from './component/All-pages/Allservices/Seo';
import BulkWhatsapp from './component/All-pages/Allservices/BulkWhatsapp';
import DirectMarketing from './component/All-pages/Allservices/DirectMarketing';

import GraphicsDesigning from './component/All-pages/Allservices/GraphicsDesigning';
import PayPerClick from './component/All-pages/Allservices/PayPerClick';
import About_us from './pages/About_us/About_us';
import ContactForm from './component/Contact/ContactForm';

import Career from './pages/Career/Career';
import InfluencersPage from './pages/Influencer/InfluencersPage';
import CollaborationsPage from './pages/collaborations-page/CollaborationsPages';
import Contact from './pages/Contact/Contact';
import Service from './pages/service/Service';
import BlogList from './pages/BlogPage-shiv/BlogList';
import BlogPg from './pages/BlogPage-shiv/BlogPg';
import ProductShoot from './component/All-pages/Allservices/ProductShoot';
import Whatsappbutton from './pages/Whatsapp/Whatsappbutton';
import ScrollTop from './ScrollTop';
import ModelPage from './component/modelmarketing/modelPage';
import Page404 from './component/404Page/Page404';
import MainInfluencer from './component/Influencermodel/mainInfluencer';
import { hydrate, render } from 'react-dom';
import CommercialAds from './component/All-pages/Allservices/CommercialAds';
import Team from './component/All-pages/Allservices/Team';
import Careerpage from './pages/Contact/Careerpage';
import Cursorfollow from './Cursorfollow';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // const xyz = (
  <BrowserRouter>
    <Cursorfollow />
    <Header />



    <Whatsappbutton />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About_us />} />
      {/* <Route path="/portfolio" element={<PortfolioPage/>}/> */}
      <Route path="/socialmediamarketing" element={<Socialmediamarketing />} />
      <Route path="/websitedevlopment" element={<Webdevlopment />} />
      <Route path="/bulkWhatsapp" element={<BulkWhatsapp />} />
      <Route path="/directmarketing" element={<DirectMarketing />} />
      <Route path="/model-marketing" element={<ModelPage />} />
      <Route path="/model-infuencer" element={<MainInfluencer />} />



      {/* <Route path="/career" element={<Career/>}/> */}
      <Route path="/commercialAds" element={<CommercialAds />} />
      <Route path="/graphicsDesigning" element={<GraphicsDesigning />} />
      <Route path="/payPerClick" element={<PayPerClick />} />
      <Route path="/seo" element={<Seo />} />
      <Route path="/mediaProduction" element={<ProductShoot />} />
      {/* <Route path="/contact" element={<ContactForm/>}/> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Careerpage />} />
      <Route path="/team" element={<Team />} />
      {/* <Route path="/blog" element={<BlogPg/>}/> */}
      <Route path="/Influencers" element={<InfluencersPage />} />
      {/* <Route path="/collaborations" element={<CollaborationsPage/>}/> */}
      <Route path="/services" element={<Service />} />
      <Route path="*" element={<Page404 />} />

    </Routes>
    <ScrollTop />
    <Footer />
  </BrowserRouter>
);

// const rootElement = document.getElementById('root');

// if(rootElement.hasChildNodes()){
//   hydrate(xyz,rootElement);
// }
// else{
//   render(xyz, rootElement);
// }