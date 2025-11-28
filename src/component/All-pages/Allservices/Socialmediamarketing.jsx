import React from "react";
import "./social-media.css";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import './Socialmedia.css'
import Heading from "../../Heading/Heading";
export default function SocialMediaMarketing() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* =================== SEO =================== */}
      <Helmet>
        <title>
          Best Social Media Marketing Agency in Navi Mumbai | Twinkle Media Hub
        </title>
        <link
          rel="canonical"
          href="https://www.twinklemediahub.com/socialmediamarketing"
        />

        <meta
          name="description"
          content="Twinkle Media Hub is the best Social Media Marketing Agency in Navi Mumbai. We help brands grow on Facebook, Instagram, LinkedIn, and YouTube with performance-driven strategies."
        />

        <meta
          name="keywords"
          content="Twinkle Media Hub, Social Media Marketing Agency Navi Mumbai, social media marketing company Mumbai, Facebook marketing, Instagram ads, LinkedIn marketing, YouTube campaigns, digital marketing agency Navi Mumbai"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Social Media Marketing Agency in Navi Mumbai | Twinkle Media Hub"
        />
        <meta property="og:site_name" content="Twinkle Media Hub Pvt. Ltd." />
        <meta
          property="og:url"
          content="https://www.twinklemediahub.com/socialmediamarketing"
        />
        <meta
          property="og:description"
          content="Boost your online presence with Twinkle Media Hub, Navi Mumbai's top social media marketing agency. We craft strategies for Facebook, Instagram, LinkedIn & YouTube."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.twinklemediahub.com/assets/social-media-marketing-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Social Media Marketing Agency in Navi Mumbai | Twinkle Media Hub"
        />
        <meta
          name="twitter:description"
          content="Twinkle Media Hub helps brands grow on social media platforms with performance-driven marketing strategies."
        />
        <meta
          name="twitter:image"
          content="https://www.twinklemediahub.com/assets/social-media-marketing-banner.jpg"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Social Media Marketing",
              "provider": {
                "@type": "Organization",
                "name": "Twinkle Media Hub Pvt. Ltd.",
                "url": "https://www.twinklemediahub.com",
                "logo": "https://www.twinklemediahub.com/logo.png"
              },
              "areaServed": {
                "@type": "City",
                "name": "Navi Mumbai"
              },
              "description": "Twinkle Media Hub is the best Social Media Marketing Agency in Navi Mumbai. We offer services for Facebook, Instagram, LinkedIn, YouTube, and more to boost your brand's online presence."
            }
          `}
        </script>
      </Helmet>

      {/* =================== HERO + BREADCRUMBS =================== */}
      <div className="smm-hero-section">
        {/* <Breadcrumbs
          breadheading={"Social Media (SMM)"}
          breadcrumbsLabel={"Social Media (SMM)"}
        /> */}
        <section className="hero-section">
          <div className="hero-content">
            <Allservices
              Serviceh1={"Social Media Marketing Agency"}
              Serviceh1span={"In Navi Mumbai"}
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle">
              Partner with Twinkle Media Hub Pvt Ltd and elevate your digital presence today.
            </p>

            <p className="description">
              As a premier social media marketing agency, we craft impactful digital
              strategies that boost engagement and drive conversions. Our mission is
              to transform your brand’s presence with measurable results.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>

          <div className="hero-image">
            <img src='./asset/upscaled.png' alt="Growth Chart" />
          </div>
        </section>
        {/* <Allservices
          // Serviceh1={"Social Media Marketing Agency"}
          // Serviceh1span={"In Navi Mumbai"}
          h4para={""}
        /> */}
      </div>

      {/* =================== MAIN CONTENT =================== */}
      <div className="container smm-container socialContainer mt-4">

        {/* Intro paragraph */}
        <section className="smm-section">
          <div className="companyInfo">
            <div className="data">
              <h3 className="socialTeamh3">How Our Social Team Can Help?</h3>
              <span className="animate-border center-line"></span>

              <p>
                At Twinkle Media Hub Pvt Ltd, we specialize in driving digital
                success through tailored social media marketing strategies. As a
                premier <b>social media marketing agency</b> in Mumbai, we
                understand the nuances of digital engagement across platforms like
                Facebook (FB), LinkedIn, Instagram, and YouTube. Our mission is to
                humanize your brand's online presence, making meaningful connections
                that drive growth and foster lasting relationships.
              </p>
              <p>
                Our dedicated team of social media experts is committed to deliver
                exceptional results. We begin by understanding your business
                objectives, conducting in-depth market research, and crafting a
                customized strategy that aligns with your brand identity. From
                compelling content creation to strategic ad campaigns and community
                management, we ensure every aspect of your social presence is
                optimized for success.
              </p>
              <button className="serv-btn">Get Quote</button>

            </div>
 <img
            src="/asset/smm-gif.gif"
            alt="Marketing consulting"
            style={{ width: "100%", maxWidth: "450px" }}
          />
          </div>
         
        </section>

        {/* How our services help */}
        <section className="smm-section">

        </section>



        {/* Process section */}
        <section className="smm-section">
          <h3>Our Social Media Marketing Agency Process</h3>
          <span className="animate-border center-line"></span>
          {/* 
          <div className="smm-process-list">
            <p>
              <b>1. Strategy Development:</b> We kick off with a thorough analysis
              of your current social media presence and competitor landscape.
            </p>
            <p>
              <b>2. Content Creation:</b> Our creative team crafts engaging content
              that resonates with your audience across platforms.
            </p>
            <p>
              <b>3. Campaign Management:</b> We implement targeted ad campaigns
              that drive traffic, increase conversions, and maximize ROI.
            </p>
            <p>
              <b>4. Community Engagement:</b> Building meaningful relationships
              with your audience is key to sustained growth.
            </p>
            <p>
              <b>5. Analytics and Reporting:</b> We provide detailed analytics to
              measure effectiveness and improvement opportunities.
            </p>
          </div> */}
          <div className="features-grid">

            {/* 1 */}
            <div className="text-box">
              <h3>Strategy Development:</h3>
              <p>
                We kick off with a thorough analysis
                of your current social media presence and competitor landscape.
              </p>
            </div>

            {/* 2 */}
            <div className="image-box">
              <img src="/asset/mock1.png" alt="mockups" />
            </div>

            {/* 3 */}
            <div className="text-box">
              <h3>Content Creation:</h3>
              <p>
                Our creative team crafts engaging content
                that resonates with your audience across platforms.
              </p>
            </div>
            <div className="image-box">
              <img src="/asset/mock2.png" alt="mockups" />
            </div>
            {/* 4 */}
            <div className="image-box">
              <img src="/asset/mock3.jpg" alt="mockups" />
            </div>

            {/* 5 */}
            <div className="text-box">
              <h3>Campaign Management</h3>
              <p>
                We implement targeted ad campaigns
                that drive traffic, increase conversions, and maximize ROI.
              </p>
            </div>
            <div className="image-box">
              <img src="/asset/mock4.png" alt="mockups" />
            </div>
            {/* 6 */}
            <div className="text-box">
              {/* <img src="/icons/rocket.svg" className="icon" alt="" /> */}
              <h3>Community Engagement</h3>
              <p>
                Building meaningful relationships
                with your audience is key to sustained growth.
              </p>
            </div>
            {/* 7 */}
            {/* <div className="text-box">
              <img src="/icons/rocket.svg" className="icon" alt="" />
              <h3>Analytics and Reporting</h3>
              <p>
                We provide detailed analytics to
                measure effectiveness and improvement opportunities.
              </p>
            </div> */}

          </div>
        </section>

        {/* Final CTA */}
        <section className="smm-section ctaSection">
          <div className="finalCta">
            <h3>Get Started with Twinkle Media Hub</h3>
            <span className="animate-border center-line"></span>

            <p className="ctap">
              Partner with Twinkle Media Hub Pvt Ltd and elevate your digital
              presence today. Whether you're based in Mumbai or beyond, our{" "}
              <b>social media marketing services</b> are designed to drive
              tangible results. Contact us to schedule a consultation and discover
              how we can transform your social media strategy into a competitive
              advantage.
            </p>
          </div>
          <img src="./asset/social2.jpg" alt="" />
        </section>
      </div>
    </>
  );
}
