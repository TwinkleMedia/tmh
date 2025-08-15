import React from "react";
import "./Service.css";
import Heading from "../../component/Heading/Heading";
import TerminalIcon from "@mui/icons-material/Terminal";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet";

export default function Service() {
  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <div id="services" className="">
      <Helmet>
        <title>
          Twinkle Media Hub Services Best for SEO, PPC, Social Media, Website
          Development
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/services" />
        <meta
          name="description"
          content="Twinkle Media Hub Pvt. Ltd. -  Best e-commerce Digital Marketing Services with advanced designer consultants at affordable packages for SEO, PPC & Social Media experts. Top professional branding agency to outsource Website Design & Development Companies - India"
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, PPC, Social Media Marketing, Email Marketing, Graphic design, Direct Marketing, Web Development, Video Editing, Email Marketing, Bulk WhatsApp marketing,"
        />
        <meta
          property="og:title"
          content="Twinkle Media Hub Services Best for SEO, PPC, Social Media, Website
          Development"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/services" />
        <meta
          property="og:description"
          content="Twinkle Media Hub Pvt. Ltd. -  Best e-commerce Digital Marketing Services with advanced designer consultants at affordable packages for SEO, PPC & Social Media experts. Top professional branding agency to outsource Website Design & Development Companies - India"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Breadcrumbs breadheading={"Services"} breadcrumbsLabel={"Services"} />
      <Heading headingLabel="Best Digital Marketing Agency in Mumbai" />
      <div className="container">
        <div className="row">

              <ServiceCard
            url="CommercialAds"
            icon={<TerminalIcon />}
            heading="Commercial Ads"
          ><br/><br/>
          </ServiceCard>

          <ServiceCard
            url="socialmediamarketing"
            icon={<TerminalIcon />}
            heading="SOCIAL MEDIA MARKETING (SMM)"
            className="test"
          ><br/><br/>
          </ServiceCard>

          <ServiceCard
            url="websitedevlopment"
            icon={<TerminalIcon />}
            heading="WEB DEVELOPMENT"
          ><br/><br/>
          </ServiceCard>

          <ServiceCard
            url="seo"
            icon={<TerminalIcon />}
            heading="SEO (SEARCH ENGINE OPTIMIZATION)"
          ><br/><br/>
          </ServiceCard>
          <ServiceCard
            url="GraphicsDesigning"
            icon={<TerminalIcon />}
            heading="GRAPHIC DESIGN"
          ><br/><br/>
          </ServiceCard>
      
          <ServiceCard
            url="bulkWhatsapp"
            icon={<TerminalIcon />}
            heading="BULK WHATASPP MARKETING"
          ><br/><br/>
          </ServiceCard>
          <ServiceCard
            url="Directmarketing"
            icon={<TerminalIcon />}
            heading="DIRECT MARKETING"
          ><br/><br/>
          </ServiceCard>
          <ServiceCard
            url="PayPerClick"
            icon={<TerminalIcon />}
            heading="PAY PER CLICK"
          >
            <br/><br/>
          </ServiceCard>
          <ServiceCard
            url="mediaProduction"
            icon={<TerminalIcon />}
            heading="Media Production"
          ><br/><br/>
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}
