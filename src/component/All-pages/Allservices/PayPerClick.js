import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import { Search, TrendingUp, Target, BarChart3, DollarSign, Users, Zap, CheckCircle, MousePointerClick, Award, ArrowRight, MessageCircle } from 'lucide-react';
import './payclick.css'
import { Link } from "react-router-dom";
export default function PayPerClick() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  const benefits = [
    "Immediate visibility on search engines",
    "Targeted traffic to your website",
    "Complete control over budget",
    "Measurable and trackable results",
    "Quick campaign setup and launch",
    "Flexible and scalable advertising"
  ];
  const features = [
    {
      icon: Search,
      title: "Google Ads Management",
      description: "Expert management of your Google Ads campaigns to maximize ROI and reach your target audience effectively.",
      color: "#3b82f6"
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Precision-targeted PPC campaigns designed to reach the right customers at the right time with compelling ads.",
      color: "#10b981"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Real-time analytics and detailed reporting to track campaign performance and optimize for better results.",
      color: "#8b5cf6"
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description: "Strategic budget allocation across channels to ensure maximum return on your advertising investment.",
      color: "#f59e0b"
    },
    {
      icon: MousePointerClick,
      title: "Landing Page Optimization",
      description: "Optimized landing pages designed to convert clicks into customers with compelling copy and design.",
      color: "#ec4899"
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Advanced audience segmentation and targeting to reach your ideal customers with personalized messaging.",
      color: "#06b6d4"
    }
  ];
  const platforms = [
    { name: "Google Ads", icon: Search, color: "#EA4335" },
    { name: "Facebook Ads", icon: Users, color: "#1877F2" },
    { name: "Instagram Ads", icon: MousePointerClick, color: "#E4405F" },
    { name: "LinkedIn Ads", icon: Target, color: "#0A66C2" }
  ];
  return (
    <>
      <Helmet>
        <title>
          Best PPC Services In Mumbai & Navi Mumbai | PPC Company In Mumbai{" "}
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/payPerClick" />

        <meta
          name="description"
          content="Best PPC Services In Mumbai & Navi Mumbai - We're A Certified Google Partner PPC Company In Navi-Mumbai. Our Expert PPC Agency delivers tailored Strategies For Max Roi."
        />
        <meta
          name="keywords"
          content="Twinkle Media Hub Mumbai, PPC, pay per click, PPC Services Company, digital marketing agency in Mumbai, Search Engine Marketing company in Mumbai, PPC Services Company in Mumbai, digital marketing services provider, Paid marketing services in Mumbai"
        />
        <meta
          property="og:title"
          content="Best PPC Services In Mumbai & Navi Mumbai | PPC Company In Mumbai"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/payPerClick" />
        <meta
          property="og:description"
          content="Best PPC Services In Mumbai & Navi Mumbai - We're A Certified Google Partner PPC Company In Navi-Mumbai. Our Expert PPC Agency delivers tailored Strategies For Max Roi."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="">
        <Breadcrumbs breadheading={"PayperClick"} breadcrumbsLabel={"SEO"} />
        <section className="hero-section" id="graphic-section">
          <div className="hero-content">
            <Allservices
              Serviceh1={"Best PPC Service Provider Company"}
              Serviceh1span={"In Navi Mumbai"}
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle Wsubtitle">
              Twinkle Media Hub -Your Trusted SEO Experts in Mumbai
            </p>

            <p className="description">
              Welcome to Twinkle Media Hub, your premier destination for result-driven PPC advertising services in Mumbai. Our expert team specializes in creating and managing high-performance PPC campaigns that deliver measurable results and maximize your return on investment.
            </p>

            <button className="hero-btn" id="graphicBtn">Get Started</button>
          </div>

          <div className="hero-image commercial-image">
            <img src='./asset/payperclick.png' alt="Shoot" />
          </div>
        </section>
      </div>
      <div className="container">
        <div className="sw-main-content mt-5">
          {/* <p>
            <b>PPC Services by Twinkle Media Hub Pvt Ltd, Mumbai</b>
            <br />
            <br />
            At Twinkle Media Hub Pvt Ltd in Mumbai, we specialize in driving
            targeted traffic and maximizing ROI through expertly managed Pay Per
            Click (PPC) campaigns. As a leading digital marketing agency in
            Mumbai, our PPC services are designed to elevate your brand
            visibility, increase conversions, and optimize your advertising
            spend effectively.
            <br />
            <br />
            <b>Reasons Why Investing in PPC Marketing is Worthwhile:</b>
            <br />
            Investing in PPC marketing with Twinkle Media Hub is a strategic
            decision for businesses aiming to achieve immediate visibility and
            measurable results.{" "}
            <em>
              "Here’s why PPC is pivotal to driving your digital marketing
              success."
            </em>
            <br />
            <br />
          </p> */}
          <h2 className="textCenter">How Twinkle Media Hub Will Help?</h2>
          <div className="wp-stats">
            <div className="stat-box payclick">
              <h3>Instant Visibility:</h3>
              <p>PPC ads display immediately on search engines, giving your brand instant visibility and exposure.</p>
            </div>

            <div className="stat-box payclick">
              <h3>Targeted Reach:</h3>
              <p>Reach your ideal audience based on demographics, interests, and search intent — ensuring your ads are shown to the right people.</p>
            </div>

            <div className="stat-box payclick">
              <h3>Measurable Results: </h3>
              <p> Track every rupee spent with detailed analytics and conversion tracking, ensuring full transparency and performance insights.
              </p>
            </div>
            <div className="stat-box payclick">
              <h3>Cost-effective: </h3>
              <p>You pay only when someone clicks your ad, making PPC a highly cost-effective method to attract qualified traffic.
              </p>
            </div>
            <div className="stat-box payclick">
              <h3>Flexibility and Control: </h3>
              <p>Adjust campaigns in real time based on performance data — enabling agile optimization and continuous improvement.
              </p>
            </div>
          </div>
          {/* <p>
            <li>
              <b>Instant Visibility:</b> PPC ads appear instantly on search
              engines, ensuring immediate visibility for your brand and
              offerings.
            </li>

            <li>
              <b>Targeted Reach:</b> Reach your ideal audience based on
              demographics, interests, and search intent, maximizing the
              relevance of your ads.
            </li>

            <li>
              <b>Measurable Results: </b>Track every penny spent with detailed
              analytics and conversion tracking, ensuring transparency and
              accountability.
            </li>

            <li>
              <b>Cost-effective:</b> With PPC, you pay only when someone clicks
              on your ad, making it a cost-effective way to drive qualified
              traffic.
            </li>

            <li>
              <b>Flexibility and Control: </b>Adjust your campaigns in real-time
              based on performance data, allowing for agile optimization and
              continuous improvement.
            </li>
          </p> */}
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

        <section className="Payfeatures-section">
          <div className="Paysection-header">
            <h2 className="Paysection-title">
              Comprehensive <span>PPC Services</span>
            </h2>
            <p className="Paysection-description">
              We offer a full suite of PPC services designed to help your business grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="Payfeatures-grid">
            {features.map((feature, index) => (
              <div key={index} className="Payfeature-card" style={{ '--card-color': feature.color }}>
                <div className="Payfeature-icon">
                  <feature.icon />
                </div>
                <h3 className="Payfeature-title">{feature.title}</h3>
                <p className="Payfeature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            At Twinkle Media Hub, our team of PPC experts crafts tailored
            strategies aligned with your business goals. We conduct thorough
            keyword research, create compelling ad copies, optimize landing
            pages, and monitor campaigns rigorously to deliver exceptional
            results.
          </p>
        </div> */}

        {/* <h3>Why You Require a Digital Agency for PPC Work</h3>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            Mastering the nuances of PPC demands seasoned expertise and hands-on
            experience. Here’s why partnering with a digital agency like Twinkle
            Media Hub is crucial:
          </p>

          <p>
            <li>
              <b>Specialized Knowledge:</b> Benefit from our deep understanding
              of PPC platforms, algorithms, and best practices.
            </li>

            <li>
              <b>Time and Resource Efficiency:</b> Save time and resources by
              outsourcing PPC management to professionals, allowing you to focus
              on core business activities.
            </li>

            <li>
              <b>Maximized ROI:</b> Our strategic approach ensures your PPC
              budget is invested wisely, maximizing ROI and minimizing wasted
              spend.
            </li>

            <li>
              <b>Continuous Optimization:</b> We continuously optimize campaigns
              based on data insights, ensuring sustained performance and growth.
            </li>
          </p>
        </div> */}
        <section className="benefits-section">
          <div className="benefits-container">
            <div className="benefits-header">
              <h2>
                Why Choose <span>PPC Advertising?</span>
              </h2>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <CheckCircle />
                  </div>
                  <div className="benefit-text">{benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="platforms-section">
          <div className="platforms-container">
            <div className="platforms-header">
              <h2>
                We Manage Campaigns on <span>All Major Platforms</span>
              </h2>
            </div>

            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <div key={index} className="platform-card">
                  <div className="platform-icon" style={{ '--platform-color': platform.color }}>
                    <platform.icon />
                  </div>
                  <div className="platform-name">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <button className="serv-btn">Get Quote</button> */}
        <div className="cta-section payCta">
          <div className="cta-content">
            <h2 className="cta-title payctatitle">Ready to Boost Your Business?</h2>
            <p className="cta-description payctadesc">
           Let's create a powerful PPC campaign that drives real results for your business. Contact us today for a free consultation!
            </p>
            <Link to='/contact'>
              <button className="cta-button">
                <MessageCircle size={20} />
                Contact Us Now
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
