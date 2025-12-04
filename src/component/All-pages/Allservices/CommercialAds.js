import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import './Socialmedia.css'
import './Commercialpage.css'
export default function CommercialAds() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        {/* Title & Canonical */}
        <title>
          Best Commercial Ads Company in Mumbai & Navi Mumbai - Twinkle Media Hub
        </title>
        <link
          rel="canonical"
          href="https://www.twinklemediahub.com/commercialAds"
        />

        {/* Meta Description */}
        <meta
          name="description"
          content="Twinkle Media Hub is the leading Commercial Ads Company in Mumbai & Navi Mumbai. We create high-quality, engaging, and impactful commercial advertisements for TV, social media, and digital platforms."
        />

        {/* Meta Keywords (optional, not important for Google) */}
        <meta
          name="keywords"
          content="Commercial ads in Mumbai, commercial ads company in Mumbai, ad film production, commercial ads services, video ads, TV commercials, corporate ads, best ad agency in Mumbai"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Best Commercial Ads Company in Mumbai & Navi Mumbai - Twinkle Media Hub"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Pvt. Ltd."
        />
        <meta
          property="og:url"
          content="https://www.twinklemediahub.com/commercialAds"
        />
        <meta
          property="og:description"
          content="Twinkle Media Hub creates professional and creative commercial ads that captivate audiences and boost brand visibility."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.twinklemediahub.com/assets/commercial-ads-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Commercial Ads Company in Mumbai & Navi Mumbai - Twinkle Media Hub"
        />
        <meta
          name="twitter:description"
          content="Professional commercial ads that boost brand visibility. TV, social media & digital campaigns by Twinkle Media Hub."
        />
        <meta
          name="twitter:image"
          content="https://www.twinklemediahub.com/assets/commercial-ads-banner.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Commercial Advertisement Production",
        "provider": {
          "@type": "Organization",
          "name": "Twinkle Media Hub Pvt. Ltd.",
          "url": "https://www.twinklemediahub.com",
          "logo": "https://www.twinklemediahub.com/logo.png"
        },
        "areaServed": {
          "@type": "City",
          "name": "Mumbai"
        },
        "description": "Twinkle Media Hub is the leading Commercial Ads Company in Mumbai & Navi Mumbai. We create high-quality, engaging, and impactful commercial advertisements for TV, social media, and digital platforms."
      }
    `}
        </script>
      </Helmet>


      <div>
        {/* <Breadcrumbs
          breadheading={"Commercial Ads"}
          breadcrumbsLabel={"Commercial Ads"}
        /> */}
        <section className="hero-section commercialSection">
          <div className="hero-content commercial-content">
            <Allservices
              Serviceh1={"Commercial Ad "}
              Serviceh1span={"Production in Mumbai"}
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle">
              Partner with Twinkle Media Hub Pvt Ltd and elevate your digital presence today.
            </p>

            <p className="description">
              At Twinkle Media Hub Pvt Ltd, we bring your brand’s story to life through visually stunning and strategically designed commercial advertisements. Whether for television, social media, or digital campaigns, our ads are crafted to captivate, connect, and convert.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>

          <div className="hero-image commercial-image">
            <img src='./asset/commercialban.png' alt="Shoot" />
          </div>
        </section>
        {/* <Allservices
          Serviceh1={"Twinkle Media Hub for"}
          Serviceh1span={"Commercial Ad Production in Mumbai"}
          h4para={""}
        /> */}
      </div>

      <div className="container">
        <div className="sw-main-content mt-5">
          {/* <p>
            At Twinkle Media Hub Pvt Ltd, we bring your brand’s story to life
            through visually stunning and strategically designed commercial
            advertisements. Whether for television, social media, or digital
            campaigns, our ads are crafted to captivate, connect, and convert.
          </p> */}
        </div>
        <section class="why-choose">
          <h2>Why Choose Us?</h2>
          <p>Mumbai’s fast-paced market demands ads that not only look great but also resonate deeply with the audience. Our team blends creativity, storytelling, and marketing strategy to deliver commercials that leave a lasting impression.</p>
          <div class="choose-grid">
            <div class="choose-card">
              <i class="fa-solid fa-lightbulb"></i>
              <h3>Creative + Strategic</h3>
              <p>Ads that evoke emotions and sell.</p>
            </div>

            <div class="choose-card">
              <i class="fa-solid fa-video"></i>
              <h3>Modern Film Equipment</h3>
              <p>Latest cinema cameras & lighting setups.</p>
            </div>

            <div class="choose-card">
              <i class="fa-solid fa-users"></i>
              <h3>Expert Team</h3>
              <p>Concept–script–shoot & post under one roof!</p>
            </div>

            <div class="choose-card">
              <i class="fa-solid fa-chart-line"></i>
              <h3>Brand ROI Growth</h3>
              <p>Ads designed to convert — not just look good.</p>
            </div>
          </div>
        </section>

        {/* <h2>Why Choose Us for Commercial Ads?</h2>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            Mumbai’s fast-paced market demands ads that not only look great but
            also resonate deeply with the audience. Our team blends creativity,
            storytelling, and marketing strategy to deliver commercials that
            leave a lasting impression.
          </p>
        </div> */}
        <section class="Ourservices-section">
          <h2>Our Commercial Ad Services</h2>

          <div class="Ourservices-grid">

            <div class="Ourservice-card">
              <div class="Ourservice-icon">
                <i class="fa-solid fa-clapperboard"></i>
              </div>
              <h3>Concept Development</h3>
              <p>Creative ideas tailored to your brand’s vision and audience.</p>
            </div>

            <div class="Ourservice-card">
              <div class="Ourservice-icon">
                <i class="fa-solid fa-pen-clip"></i>
              </div>
              <h3>Scriptwriting</h3>
              <p>Engaging scripts that tell your story and drive action.</p>
            </div>

            <div class="Ourservice-card">
              <div class="Ourservice-icon">
                <i class="fa-solid fa-film"></i>
              </div>
              <h3>High-Quality Production</h3>
              <p>Professional filming, editing, and post-production for stunning results.</p>
            </div>

            <div class="Ourservice-card">
              <div class="Ourservice-icon">
                <i class="fa-solid fa-bullhorn"></i>
              </div>
              <h3>Platform Optimization</h3>
              <p>Ads designed to perform on TV, YouTube, Instagram, and more.</p>
            </div>

          </div>
        </section>

        {/* <h3>Our Commercial Ad Services Include:</h3>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <ol>
            <li>
              <b>Concept Development:</b> Creative ideas tailored to your brand’s vision and audience.
            </li>
            <li>
              <b>Scriptwriting:</b> Engaging scripts that tell your story and drive action.
            </li>
            <li>
              <b>High-Quality Production:</b> Professional filming, editing, and post-production for stunning results.
            </li>
            <li>
              <b>Platform Optimization:</b> Ads designed to perform on TV, YouTube, Instagram, and more.
            </li>
          </ol> */}
        {/* </div> */}
        <div className="marquee-wrapper">
          <h3>Our Work</h3>
          <div className="marquee-track">
            {/* ORIGINAL IMAGES */}
            <img src="/asset/marcquee/b1.png" alt="our Work" />
            <img src="/asset/marcquee/b2.png" alt="our Work" />
            <img src="/asset/marcquee/b3.png" alt="our Work" />
            <img src="/asset/marcquee/b4.png" alt="our Work" />
            <img src="/asset/marcquee/b5.png" alt="our Work" />
            <img src="/asset/marcquee/b6.png" alt="our Work" />
            <img src="/asset/marcquee/b7.png" alt="our Work" />
            <img src="/asset/marcquee/b8.png" alt="our Work" />

            {/* DUPLICATED FOR INFINITE LOOP */}
            <img src="/asset/marcquee/b1.png" alt="our Work" />
            <img src="/asset/marcquee/b2.png" alt="our Work" />
            <img src="/asset/marcquee/b3.png" alt="our Work" />
            <img src="/asset/marcquee/b4.png" alt="our Work" />
            <img src="/asset/marcquee/b5.png" alt="our Work" />
            <img src="/asset/marcquee/b6.png" alt="our Work" />
            <img src="/asset/marcquee/b7.png" alt="our Work" />
            <img src="/asset/marcquee/b8.png" alt="our Work" />
          </div>
        </div>
        <section className="ourApproach">
          <div className="ourappInfo">
            <h2>Our Approach to Commercial Ad Production</h2>
            <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
            <div className="sw-main-content mt-3 approach">
              <p>
                We believe in more than just making ads — we create brand experiences.
                From brainstorming ideas to final delivery, we ensure every element
                is aligned with your marketing goals and audience expectations.
              </p>
              <p>
                As one of Mumbai’s leading commercial ad agencies, Twinkle Media Hub
                delivers powerful campaigns that boost visibility and brand recall.
                Whether you’re launching a product or running a seasonal campaign,
                our commercials make sure you stand out from the competition.
              </p>
              <button className="serv-btn">Get Quote</button>
            </div>
          </div>
          <img src="./asset/commercial1.jpg" className="Cimg"></img>
        </section>

      </div>
    </>
  );
}
