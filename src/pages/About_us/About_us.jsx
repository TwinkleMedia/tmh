import React from "react";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import "./about_us.css";
import TeamSlider from "../Team/TeamSlider";
import Heading from '../../component/Heading/Heading';
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import About from "../About/About";

export default function About_us() {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

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
          <ServiceCard icon={<SupervisorAccountIcon />} heading="WHO WE ARE?">
            At the heart of 'Twinkle Media Hub' is a team of creative and strategic
            professionals, all sharing in the same creative passion, philosophy
            and firm belief in the power of great ideas. We are dedicated to
            helping our clients develop more meaningful relationships with their
            customers through brand, communication, creative and digital
            channels..
          </ServiceCard>
          <ServiceCard icon={<BusinessCenterIcon />} heading="WHAT WE DO?">
            We believe that the work we do must have a real impact on the media
            world as well as in the conventional marketplace. Be it Media
            Strategy and Marketing, Websites, Mobile Applications or Media
            Things, we blend creativity and technology to provide the best
            possible outcomes to take your business forward.
          </ServiceCard>

          <ServiceCard icon={<ListAltIcon />} heading="WHY WE DO IT?">
            Our philosophy is rooted in the values of integrity, commitment, and
            ingenuity. We do not have layers of management but as a team, we all
            roll up our sleeves to provide the expertise that will engage,
            impact, and build your brand.
          </ServiceCard>
        </div>
      </div>

      <div className="container-fluid ideas-section ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 sect-ideas">
              <h2>Discover All About Twinkle Media Hub</h2>
              <h6>Analysis, Solution & Results</h6>
            </div>
            {/* <div className="col-12 col-md-6 ideas-img ">
              <img src="./asset/img/digitalwebsite.png" alt="images-ideas" />
            </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row about-progress">
          <h2 className="about-head-main">A Few Word About us</h2>
          <div className="col-12 col-md-4 ">
            <h4>Skill we Have</h4>
            <h6 className="mt-5">Strategy Consultancy</h6>
            <div class="progress">
              <div
                class="progress-bar1"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div>
              <h6 className="mt-5">Strategy Consultancy</h6>
              <div class="progress">
                <div
                  class="progress-bar2"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <h6 className="mt-5">Strategy Consultancy</h6>
              <div class="progress">
                <div
                  class="progress-bar3"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div></div>
            </div>
            <br />
          </div>
          <div className="col-12 col-md-4">
            <h4>Our Mission</h4>
            <p className="mt-5 mission-about">
              To empower your business to sparkle online by crafting strategic
              advertising and data-driven digital marketing campaigns that
              deliver measurable results & make sure your business touches the
              new heights in the digital world.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h4>Our Vision</h4>
            <p className="mt-5 mission-about">
              To be the digital alchemists, transforming our clients' brands
              into constellations that captivate and inspire. We weave their
              stories into the fabric of the online universe, propelling them
              towards a future of unparalleled growth and recognition.
            </p>
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
