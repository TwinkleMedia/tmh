import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import './seo.css'
import Seotime from "./Seotime";
import { BarChart3, FileCheck, Globe, MapPin, Search, Target } from "lucide-react";
import { Link } from "react-router-dom";
export default function Seo() {
  const features = [
    {
      id: 1,
      icon: Target,
      title: "Customized SEO Strategies:",
      description: "Tailored to meet your unique business needs and goals.",
      color: "#053687"
    },
    {
      id: 2,
      icon: FileCheck,
      title: "Comprehensive SEO Audits:",
      description: "Identify strengths, weaknesses, and opportunities for optimization.",
      color: "#042D71"
    },
    {
      id: 3,
      icon: Search,
      title: "Keyword Research:",
      description: "Target the most relevant keywords to attract your target audience.",
      color: "#0A4BB5"

    },
    {
      id: 4,
      icon: Globe,
      title: "On-Page and Off-Page Optimization:",
      description: "Enhance your website's visibility and authority.",
      color: "#2A67C8"
    },
    {
      id: 5,
      icon: MapPin,
      title: "Local SEO Expertise:",
      description: "Reach local customers effectively with targeted strategies.",
      color: "#5A8BE0"
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Transparent Reporting:",
      description: "Regular updates and detailed reports on campaign performance.",
      color: "#5A8BE0"

    }
  ]
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
          Best SEO Company in Navi Mumbai | SEO Agency In Navi Mumbai
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/seo" />

        <meta
          name="description"
          content="Twinkle Media Hub - Best SEO Agency in Navi Mumbai - Our SEO company in Navi Mumbai offers affordable SEO services to boost your online presence & drive traffic with the best SEO Practices."
        />
        <meta
          name="keywords"
          content="Twinkle Media Hub SEO Experts, seo services, seo agency in Mumbai, seo company in Mumbai, best seo company in mumbai, Search Engine Optimization Services in Mumbai, SEO Services Mumbai, Mumbai Search Engine Optimization, On-Page SEO Optimization, Off-Page SEO Strategies, Local SEO Mumbai, SEO Audits, Mumbai Keyword Research, Result-Driven SEO Services, Mumbai Digital Marketing Agency"
        />
        <meta
          property="og:title"
          content="Best SEO Company in Navi Mumbai | SEO Agency In Navi Mumbai"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/seo" />
        <meta
          property="og:description"
          content="Twinkle Media Hub - Best SEO Agency in Navi Mumbai - Our SEO company in Navi Mumbai offers affordable SEO services to boost your online presence & drive traffic with the best SEO Practices."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="">
        <Breadcrumbs breadheading={"SEO"} breadcrumbsLabel={"SEO"} />
        <section className="hero-section" id="seo-section">
          <div className="hero-content">
            <Allservices
              Serviceh1={"We Deliver Revenue Growth with"}
              Serviceh1span={"Strategic Results-Based SEO"}
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle">
              Twinkle Media Hub -Your Trusted SEO Experts in Mumbai
            </p>

            <p className="description">
              At Twinkle Media Hub Pvt Ltd, we specialize in driving organic
              growth through expert Search Engine Optimization (SEO) strategies.
              As a leading SEO agency in Mumbai, we offer comprehensive SEO
              services tailored to elevate your online presence and boost your
              rankings in search engines.
            </p>
            <button className="hero-btn"><Link to="/contact">Get Started</Link></button>
          </div>

          <div className="hero-image commercial-image">
            <img src='./asset/seoServ.png' alt="Shoot" />
          </div>
        </section>
      </div>
      <div className="container">

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

        <h2 className="seoH2 benefits">Our Services:</h2>
        {/* <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span> */}
        <div className="sw-main-content mt-3">
          <div class="choose-grid">
            <div class="choose-card seoCard">
              <i class="fa-solid fa-file-lines"></i>
              <h3>On-Page SEO Optimization</h3>
              <p>Enhance your website's visibility with
                optimized content, meta tags, and technical SEO improvements.</p>
            </div>

            <div class="choose-card seoCard">
              <i class="fa-solid fa-link"></i>
              <h3>Off-Page SEO Strategies</h3>
              <p>Build authority and credibility with quality backlinks and strategic outreach campaigns.</p>
            </div>

            <div class="choose-card seoCard">
              <i class="fa-solid fa-location-dot"></i>
              <h3>Local SEO Mumbai</h3>
              <p>Target local customers effectively with geographically targeted SEO strategies.</p>
            </div>

            <div class="choose-card seoCard">
              <i class="fa-solid fa-chart-pie"></i>
              <h3>SEO Audits and Keyword Research</h3>
              <p>Identify opportunities and optimize your website with thorough SEO audits and precise keyword research.</p>
            </div>
          </div>

        </div>

        <h3 className="benefits">Result-Driven Approach:</h3>
        {/* <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span> */}
        <div className="sw-main-content mt-3">
          <p className="resultp">
            Our result-driven SEO services are focused on achieving tangible
            outcomes, from increased website traffic to higher conversion rates.
            Partner with us to unlock your website's full potential and dominate
            search engine results pages (SERPs).
          </p>
        </div>

        <h3 className="benefits">Benefits/Features of Our Packages at Affordable Prices:</h3>
        <div className="sw-main-content mt-3 benfitSection">
          <div className="seo-features-container">
            <div className="seo-features-wrapper">
              <div className="features-grid3">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="feature-card"
                    style={{ '--feature-color': feature.color }}
                  >
                    <div className="feature-number">{feature.id}</div>
                    <div className="feature-header">
                      <div className="icon-wrapper">
                        <feature.icon />
                      </div>
                      <div className="feature-content">
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <h3>Our Process for Search Engine Optimization:</h3>
        <Seotime />
        {/* <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <li>
            1. Consultation and Analysis: Understanding your business goals,
            target audience, and current SEO status.
            <br />
          </li>
          <li>
            2. Strategy Development: Crafting a tailored SEO strategy focusing
            on on-page, off-page, and local SEO optimizations.
            <br />
          </li>
          <li>
            3. Implementation: Executing SEO tactics including keyword
            optimization, content creation, and technical SEO enhancements.
            <br />
          </li>
          <li>
            4. Monitoring and Reporting: Continuous monitoring of performance
            metrics with transparent reporting and insights.
            <br />
          </li>
          <li>
            5. Optimization and Adaptation: Regular refinement of strategies
            based on performance data to maximize results.
            <br />
          </li>
        </div> */}

        <h3 className="benefits">Why Choose Us?</h3>

        <div className="sw-main-content mt-3">
          <div class="choose-grid">
            <div class="choose-card seoCard">
              <i class="fa-solid fa-chart-line"></i>
              <h3>Proven Track Record</h3>
              <p>Demonstrated success in improving organic search rankings and driving measurable results.</p>
            </div>

            <div class="choose-card seoCard">
              <i class="fa-solid fa-headset"></i>
              <h3>Expert Team</h3>
              <p>Skilled SEO professionals with in-depth industry knowledge and experience.</p>
            </div>

            <div class="choose-card seoCard">
              <i class="fa-solid fa-chalkboard-user"></i>
              <h3>Tailored Solutions</h3>
              <p>Customized SEO strategies designed to align with
                your business objectives.</p>
            </div>

            <div class="choose-card seoCard">
              <i class="fa-solid fa-phone-volume"></i>
              <h3>Transparent Communication:</h3>
              <p>Clear reporting and regular updates on
                campaign progress.</p>
            </div>
          </div>
        </div>

        {/* <button className="serv-btn">Get Quote</button> */}
      </div>
    </>
  );
}
