import React, { useEffect } from "react";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import "./about_us.css";
import TeamSlider from "../Team/TeamSlider";
import Heading from '../../component/Heading/Heading';
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { FaBullseye, FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";
import About from "../About/About";
import { Link } from "react-router-dom";

export default function About_us() {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  useEffect(() => {
    const section = document.querySelector(".skills-section");
    const bars = document.querySelectorAll(".progress-wrapper div[class^='progress-bar']");
    const nums = document.querySelectorAll(".progress-num");

    const resetBars = () => {
      bars.forEach(bar => {
        bar.style.width = "0%";
      });

      nums.forEach(num => {
        num.textContent = "0%";
      });
    };

    const animateNumbers = () => {
      nums.forEach((num) => {
        const target = +num.getAttribute("data-target");
        let current = 0;

        const interval = setInterval(() => {
          current++;
          num.textContent = current + "%";
          if (current >= target) {
            num.textContent = target + "%";
            clearInterval(interval);
          }
        }, 15);
      });
    };

    const animateBars = () => {
      bars.forEach((bar) => {
        const finalValue = bar.getAttribute("aria-valuenow");
        bar.style.width = finalValue + "%";
      });
    };

    const observer = new IntersectionObserver(
      (e) => {
        e.forEach((entry) => {
          if (entry.isIntersecting) {
            animateBars();
            animateNumbers();
          } else {
            resetBars();  // RESET when section leaves screen
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <Helmet>
        <title>About Twinkle Media Hub | Best Digital Marketing & Brand Strategy Agency</title>
        <meta name="description" content="Twinkle Media Hub offers top-notch digital marketing, creative design, brand strategy, SEO, social media marketing, and web development solutions to grow your business online." />
        <meta name="keywords" content="Digital Marketing, Brand Strategy, Creative Design, SEO, Social Media Marketing, Web Development, Online Marketing Agency, Digital Advertising" />
        <link rel="canonical" href="https://www.yoursite.com/about-us" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Twinkle Media Hub | Digital Marketing & Brand Strategy Experts" />
        <meta property="og:description" content="Learn about Twinkle Media Hub's mission, vision, skills, and USP. Expert digital marketing, creative design, and brand strategy to help your business grow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.com/about-us" />
        <meta property="og:image" content="https://www.yoursite.com/assets/img/about-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Twinkle Media Hub | Digital Marketing & Brand Strategy Experts" />
        <meta name="twitter:description" content="Learn about Twinkle Media Hub's mission, vision, skills, and USP. Expert digital marketing, creative design, and brand strategy to help your business grow." />
        <meta name="twitter:image" content="https://www.yoursite.com/assets/img/about-og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Twinkle Media Hub",
              "url": "https://www.yoursite.com",
              "logo": "https://www.yoursite.com/assets/img/logo.png",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.twitter.com/yourpage",
                "https://www.linkedin.com/company/yourpage"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-1234567890",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>
      <main>
        <div className="about" id="about" >
          <Breadcrumbs breadheading={"About Us"} breadcrumbsLabel={"About"} />
        </div>

        <About />

        <section className="container">
          <div className="team-about">
            <Heading headingLabel="Our USP" />
          </div>
          <div className="row">
            <ServiceCard icon={<SupervisorAccountIcon />} heading="WHO WE ARE?" backText="We are a team of digital marketing experts, creative designers, and brand strategists committed to helping businesses grow online.">

            </ServiceCard>
            <ServiceCard icon={<BusinessCenterIcon />} heading="WHAT WE DO?" backText="We provide SEO, social media marketing, creative design, web development, and brand strategy services that deliver measurable results.">

            </ServiceCard>

            <ServiceCard icon={<ListAltIcon />} heading="WHY WE DO IT?" backText="Our passion is to empower businesses with strategic digital solutions that increase visibility, engagement, and revenue.">

            </ServiceCard>
          </div>
        </section>

        <section className="container-fluid ideas-section ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 sect-ideas" >
                <div className="ideas-content-wrapper">
                  <div>
                    <h2>Discover the Full Potential of Your Brand Online</h2>
                    <h3>Digital Marketing, Creative Design & Brand Strategy</h3>
                  </div>

                  <div className="ideas-button">
                    <button className="get-in-touch-btn" aria-label="Get in Touch with Twinkle Media Hub">
                      <Link to={"/contact"}>Get in Touch</Link>
                    </button>
                    <i class="fas fa-arrow-right arrow-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row about-progress">
            <h2 className="about-head-main">Our Skills & Expertise</h2>
            <div className="col-12 col-md-4 aboutp-image-section">
              <img
                src="/asset/img/digital.png"
                alt="Digital Marketing Strategy" loading="lazy"
                className="aboutp-img"
              /></div>
            <div className="col-12 col-md-8 mt-4">
              <div className="skills-section">
                <h4 className="color">Skills We Excel In</h4>
                <h6 className="mt-4 skillText">Strategy Consultancy</h6>
                <div className="progress progress-wrapper">
                  <div
                    className="progress-bar1"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-num" data-target="75">0%</span>
                </div>

                <h6 className="mt-4 skillText">Creative Design</h6>
                <div className="progress progress-wrapper">
                  <div
                    className="progress-bar2"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-num" data-target="85">0%</span>
                </div>

                <h6 className="mt-4 skillText">Brand Management</h6>
                <div className="progress progress-wrapper">
                  <div
                    className="progress-bar3"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-num" data-target="95">0%</span>
                </div>
                <br />
                {/* MISSION */}
                <div className="row missionSection">

                  {/* MISSION */}
                  <div className="col-12 col-md-6 mt-5 sectionBox">
                    <div className="mvBox">
                      <div className="mvIcon">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      </div>

                      <div className="mvInfo">
                        <h4>Our Mission</h4>
                        <p className="mt-3 mission-about">
                          To empower businesses with creative digital solutions, SEO, and social media marketing strategies that generate measurable growth.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* VISION */}
                  <div className="col-12 col-md-6 mt-5 sectionBox">
                    <div className="mvBox">
                      <div className="mvIcon">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>

                      <div className="mvInfo">
                        <h4>Our Vision</h4>
                        <p className="mt-3 mission-about">
                          To be the leading digital marketing agency transforming brands through innovation, creative design, and data-driven strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        <section class="feat bg-gray pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="section-head col-sm-12">
                <Heading headingLabel="Why Choose Twinkle Media Hub?" />
                <p className="section-description">With over 10 years of experience, we provide expert SEO, social media marketing, creative design, and web development services that deliver real results.</p>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
                  <h6>Modern Design & Technology</h6>
                  <p className="featurep">We use the latest web and design technologies to deliver high-quality digital solutions.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
                  <h6>Creative & Strategic Approach</h6>
                  <p className="featurep">Our team blends creativity and strategy to produce campaigns that grow your brand online.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
                  <h6>24/7 Client Support</h6>
                  <p className="featurep">We provide round-the-clock support to ensure your campaigns run smoothly and efficiently.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
                  <h6>Business Growth & ROI</h6>
                  <p className="featurep">We focus on strategies that increase your business growth and return on investment.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
                  <h6>Market Strategy & SEO</h6>
                  <p className="featurep">Our SEO and market strategies help your business rank higher and attract quality leads.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-camera"></i></span>
                  <h6>Affordable  & Transparent Pricing</h6>
                  <p className="featurep">We offer high-quality digital marketing solutions at competitive and transparent pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
