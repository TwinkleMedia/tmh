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

import About from "../About/About";

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
      <div className="about" id="about" >
        <Breadcrumbs breadheading={"About Us"} breadcrumbsLabel={"About"} />
      </div>

      <About />

      <div className="container">
        <div className="team-about">
          <Heading headingLabel="Our USP" />
        </div>
        <div className="row">
          <ServiceCard icon={<SupervisorAccountIcon />} heading="WHO WE ARE?" backText="At the heart of 'Twinkle Media Hub' is a team of creative and strategic
            professionals, all sharing in the same creative passion, philosophy
            and firm belief in the power of great ideas. We are dedicated to
            helping our clients develop more meaningful relationships with their
            customers through brand, communication, creative and digital
            channels..">

          </ServiceCard>
          <ServiceCard icon={<BusinessCenterIcon />} heading="WHAT WE DO?" backText="We believe that the work we do must have a real impact on the media
            world as well as in the conventional marketplace. Be it Media
            Strategy and Marketing, Websites, Mobile Applications or Media
            Things, we blend creativity and technology to provide the best
            possible outcomes to take your business forward.">

          </ServiceCard>

          <ServiceCard icon={<ListAltIcon />} heading="WHY WE DO IT?" backText="Our philosophy is rooted in the values of integrity, commitment, and
            ingenuity. We do not have layers of management but as a team, we all
            roll up our sleeves to provide the expertise that will engage,
            impact, and build your brand.">

          </ServiceCard>
        </div>
      </div>

      <div className="container-fluid ideas-section ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 sect-ideas" >
              <div className="ideas-content-wrapper">
                <div> <h2>Discover All About Twinkle Media Hub</h2>
                  <h6>Analysis, Solution & Results</h6>
                </div>

                <div className="ideas-button">
                  <button className="get-in-touch-btn">
                    Get in Touch
                  </button>
                  <i class="fas fa-arrow-right arrow-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row about-progress">
          <h2 className="about-head-main">A Few Word About us</h2>
          <div className="col-12 col-md-4 aboutp-image-section">
            <img
              src="/asset/img/digital.png"
              alt="About Us"
              className="aboutp-img"
            /></div>
          <div className="col-12 col-md-8 mt-4">
            <div className="skills-section">
              <h4>Skill we Have</h4>
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
                        To empower your business to sparkle online by crafting strategic
                        advertising and data-driven digital marketing campaigns...
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
                        To be the digital alchemists, transforming our clients' brands into
                        constellations that captivate and inspire...
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>


      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <Heading headingLabel="Why Choose Us?" />
              <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
                <h6>Modern Design</h6>
                <p>We use latest technology for the latest world because we know the demand of peoples.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
                <h6>Creative Design</h6>
                <p>We are always creative and and always listen our customers and we mix these two things and make best design.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
                <h6>24 x 7 User Support</h6>
                <p>If our customer has any problem and any query we are always happy to help them.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
                <h6>Business Growth</h6>
                <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
                <h6>Market Strategy</h6>
                <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-camera"></i></span>
                <h6>Affordable cost</h6>
                <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
