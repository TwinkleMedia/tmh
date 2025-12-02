import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import './graphic.css'
import { ArrowRight, MessageCircle, Sparkles, TrendingUp, Video } from "lucide-react";
export default function GraphicsDesigning() {
  const features = [
    {
      icon: Video,
      title: "Motion Video Excellence",
      description: "Engage and inspire with captivating motion videos",
      color: "#f59e0b"
    },
    {
      icon: Sparkles,
      title: "Creative Production",
      description: "From concept to final production with unique vision",
      color: "#ec4899"
    },
    {
      icon: TrendingUp,
      title: "Strategy Driven",
      description: "Blend creativity with strategy for compelling content",
      color: "#3b82f6"
    }
  ];
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <>
      <Helmet>
        <title>
          Twinkle Media Hub Mumbai - Elevate Your Brand with Expert 2D, 3D,
          Motion Videos, and Graphics Design Services
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/graphicsDesigning" />

        <meta
          name="description"
          content="Professional firms for creative graphic design companies for your brand, hire the best content agency services for 2D, 3D, motion videos, and graphics services. Captivate your audience with creativity."
        />
        <meta
          name="keywords"
          content="2D Animation Mumbai, 3D Animation Services, Motion Videos Mumbai, Graphics Design Solutions, Twinkle Media Hub Mumbai, Creative Video Production, Visual Storytelling Mumbai, Mumbai Digital Marketing Agency, Animation Studio Mumbai, Twinkle Media Animation Hub"
        />
        <meta
          property="og:title"
          content="Twinkle Media Hub Mumbai - Elevate Your Brand with Expert 2D, 3D,
          Motion Videos, and Graphics Design Services"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/graphicsDesigning" />
        <meta
          property="og:description"
          content="Professional firms for creative graphic design companies for your brand, hire the best content agency services for 2D, 3D, motion videos, and graphics services. Captivate your audience with creativity."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="">
        <Breadcrumbs breadheading={"GRaphic"} breadcrumbsLabel={"SEO"} />
        <section className="hero-section" id="graphic-section">
          <div className="hero-content">
            <Allservices
              Serviceh1={"Creative Graphic Design "}
              Serviceh1span={"Services in Mumbai"}
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle">
              Twinkle Media Hub -Your Trusted SEO Experts in Mumbai
            </p>

            <p className="description">
              Welcome to Twinkle Media Hub Pvt Ltd, your premier destination for cutting-edge graphic design solutions in Mumbai. At Twinkle Media Hub, we specialize in transforming ideas into captivating visuals that resonate with your audience. Whether you're looking for 2D animation in Mumbai to bring your brand story to life or seeking top-tier 3D animation services for a dynamic presentation, our team of skilled professionals is here to exceed your expectations.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>

          <div className="hero-image commercial-image">
            <img src='./asset/graphicdesign.png' alt="Shoot" />
          </div>
        </section>
      </div>
      <div className="container">
        <div className="sw-main-content mt-5">
          <div className="hero-card">
            <div className="section-tag">
              <Sparkles size={16} />
              Beyond Animation
            </div>
            <div className="Graphichero-content">
              <h2 className="hero-title">
                Expertise That Extends <span>Beyond Animation</span>
              </h2>
              <p className="hero-description">
                Our expertise extends beyond animation to include motion videos that engage and inspire.
                As a leading digital marketing agency in Mumbai, we blend creativity with strategy to
                deliver compelling content that drives results. From initial concept to final production,
                Twinkle Media Hub ensures every project reflects your unique vision and goals.
              </p>
            </div>
          </div>
          <div className="features-gridgraph">
            {features.map((feature, index) => (
              <div key={index} className="feature-cardgraph" style={{ '--card-color': feature.color }}>
                <div className="feature-icon-wrappergraph">
                  <feature.icon />
                </div>
                <h3 className="feature-titlegraph">{feature.title}</h3>
                <p className="feature-descriptiongraph">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Enhance Your Digital Strategy?</h2>
              <p className="cta-description">
                Contact Twinkle Media Hub today to explore how our animation studio in Mumbai can
                enhance your digital strategy. Trust Twinkle Media Hub for exceptional creativity
                and unmatched innovation in graphic design.
              </p>
              <button className="cta-button">
                <MessageCircle size={20} />
                Contact Us Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="sw-main-content mt-3">
              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              src="./asset/img/digitalwebsite.png "
              alt="images-smm"
              className="w-100"
            />
          </div>
        </div> */}

        {/* <h2>How can Social Media Marketing Services help your business?</h2>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            The Influence of various Social Media platforms is growing day by
            day, Almost every brand is trying their best to reach their target
            audience and have a long-lasting impact on them, but very few are
            successful in tapping the right chords at the right platform and at
            the right time.
          </p>

          <p>
            The Influence of various Social Media platforms is growing day by
            day, Almost every brand is trying their best to reach their target
            audience and have a long-lasting impact on them, but very few are
            successful in tapping the right chords at the right platform and at
            the right time.
          </p>

          <p>
            The Influence of various Social Media platforms is growing day by
            day, Almost every brand is trying their best to reach their target
            audience and have a long-lasting impact on them, but very few are
            successful in tapping the right chords at the right platform and at
            the right time.
          </p>
        </div>

        <h3>How Our Social Team Can Help?</h3>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            The Influence of various Social Media platforms is growing day by
            day, Almost every brand is trying their best to reach their target
            audience and have a long-lasting impact on them, but very few are
            successful in tapping the right chords at the right platform and at
            the right time.
          </p>

          <p>
            The Influence of various Social Media platforms is growing day by
            day, Almost every brand is trying their best to reach their target
            audience and have a long-lasting impact on them, but very few are
            successful in tapping the right chords at the right platform and at
            the right time.
          </p>

          <p>
            The Influence of various Social Media platforms is growing day by
            day, Almost every brand is trying their best to reach their target
            audience and have a long-lasting impact on them, but very few are
            successful in tapping the right chords at the right platform and at
            the right time.
          </p>
        </div> */}

        <button className="serv-btn">Get Quote</button>
      </div>
    </>
  );
}
