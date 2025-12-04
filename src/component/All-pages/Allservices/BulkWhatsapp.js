import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import './bulkW.css'
import { Rocket, Headphones, Target, MessageCircle, Zap, Users } from 'lucide-react';
export default function BulkWhatsapp() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  const sections = [
    {
      id: 1,
      category: "Ideas",
      items: [
        {
          icon: Rocket,
          title: "Promotional Campaigns",
          description: "Launch targeted promotions and offers directly to your customers' WhatsApp inbox.",
          color: "#3b82f6"
        },
        {
          icon: Headphones,
          title: "Customer Service Automation",
          description: "Use WhatsApp bots to handle common queries and provide instant responses, enhancing customer satisfaction.",
          color: "#8b5cf6"
        }
      ]
    },
    {
      id: 2,
      category: "Tips",
      items: [
        {
          icon: Target,
          title: "Personalized Campaigns",
          description: "Launch targeted promotions and offers directly to your customers' WhatsApp inbox.",
          color: "#10b981"
        },
        {
          icon: MessageCircle,
          title: "Customer Service Automation",
          description: "Use WhatsApp bots to handle common queries and provide instant responses, enhancing customer satisfaction.",
          color: "#f59e0b"
        }
      ]
    },
    {
      id: 3,
      category: "Tips",
      items: [
        {
          icon: Zap,
          title: "Promotional Campaigns",
          description: "Launch targeted promotions and offers directly to your customers' WhatsApp inbox.",
          color: "#ec4899"
        },
        {
          icon: Users,
          title: "Customer Service Automation",
          description: "Use WhatsApp bots to handle common queries and provide instant responses, enhancing customer satisfaction.",
          color: "#06b6d4"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Whatsapp Business API Services in Navi Mumbai | Bulk Whatsapp
          Marketing Company
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/bulkWhatsapp" />

        <meta
          name="description"
          content="Twinkle Media Hub is the one-stop solution for Bulk Whatsapp Marketing in Navi-Mumbai that will increase your business visibility among the customers."
        />
        <meta
          name="keywords"
          content="Twinkle Media Hub, Bulk WhatsApp Marketing services in Mumbai, Whatsapp bot, WhatsApp chatbot, chatbot WhatsApp, whatsapp business API integration, WhatsApp business solution, WhatsApp solution, WhatsApp enterprise solutions"
        />
        <meta
          property="og:title"
          content="Whatsapp Business API Services in Navi Mumbai | Bulk Whatsapp
          Marketing Company"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/bulkWhatsapp" />
        <meta
          property="og:description"
          content="Twinkle Media Hub is the one-stop solution for Bulk Whatsapp Marketing in Navi-Mumbai that will increase your business visibility among the customers."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="">
        <Breadcrumbs
          breadheading={"Bulk Whatsapp"}
          breadcrumbsLabel={"Bulk Whatsapp"}
        />
        <section className="hero-section" id="graphic-section">
          <div className="hero-content">
            <Allservices
              Serviceh1={"Bulk WhatsApp Marketing Service"}
              Serviceh1span={"Official AiSensy Partner"}
              spanColor="#94f594"
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle Wsubtitle">
              Twinkle Media Hub -Your Trusted SEO Experts in Mumbai
            </p>

            <p className="description">
              Welcome to Twinkle Media Hub Pvt Ltd, your premier destination for cutting-edge graphic design solutions in Mumbai. At Twinkle Media Hub, we specialize in transforming ideas into captivating visuals that resonate with your audience. Whether you're looking for 2D animation in Mumbai to bring your brand story to life or seeking top-tier 3D animation services for a dynamic presentation, our team of skilled professionals is here to exceed your expectations.
            </p>

            <button className="hero-btn" id="graphicBtn">Get Started</button>
          </div>

          <div className="hero-image commercial-image">
            <img src='./asset/whatsapp/whatsapp.png' alt="Shoot" />
          </div>
        </section>
      </div>
      <div className="container">
        <div className="sw-main-content mt-5 whatsContent">
          <h3 className="wh3"> 5X Your Revenue <span className="wspan">with the Power of WhatsApp</span></h3>
          <p className="wp">Broadcast, Automate, Engage, Sell - Do Everything with the AI-powered WhatsApp Engagement Platform </p>
          <h4 className="wh4">Powered by Official WhatsApp APIs  <Zap size={24} fill="#FFD700" stroke="none" color="#FFD700" />
          </h4>
          <button className="whatStartbtn"><a href="https://www.app.aisensy.com/login" target="_blank" rel="noopener noreferrer" className="anchorTag">Get Started</a></button>
          {/* <b>
            Twinkle Media Hub Pvt Ltd: Your Partner in Bulk WhatsApp Marketing
            Services in Mumbai
          </b> */}

          {/* <p>
            At Twinkle Media Hub Pvt Ltd, we specialize in cutting-edge digital
            marketing solutions tailored to meet the dynamic needs of businesses
            in Mumbai and beyond. Our expertise lies in leveraging the power of
            WhatsApp through innovative Bulk WhatsApp Marketing services.
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
        <section className="wp-hero">
          <div className="wp-hero-image">
            <img
              src="./asset/whatsapp/whats1.png"
              alt="WhatsApp Payment Demo"
            />
          </div>

          <div className="wp-hero-text">
            <h1>
              WhatsApp <span className="highlight">Payments</span>: Collect Payments Directly within WhatsApp
            </h1>

            <p>
              Transform your customer interactions by collecting payments directly within WhatsApp.
            </p>

            <ul>
              <li>UPI</li>
              <li>Net Banking</li>
              <li>Credit and Debit Cards</li>
            </ul>
          </div>
        </section>

        {/* TITLE SECTION */}
        <h2 className="wp-section-title">
          WhatsApp Payment Features
        </h2>

        {/* FEATURES GRID */}
        <section className="wp-features">

          <div className="wp-card">
            <h3>Multiple Human Live Chat</h3>
            <p>
              Have multiple team members do Live Chat Support on the same WhatsApp number. Filter chats by tags, campaigns, and attributes for smart assignment.
            </p>
            <img
              src="./asset/whatsapp/ai1.gif"
              alt="Live Chat Demo"
            />
          </div>

          <div className="wp-card">
            <h3>Real-Time Analytics</h3>
            <p>
              Track all your campaign results in real-time. View Read, Replied & Clicked rates to increase conversions.
            </p>
            <img
              src="./asset/whatsapp/ai2.gif"
              alt="Analytics Demo"
            />
          </div>

        </section>

        {/* WHY WHATSAPP SECTION */}
        <section className="wp-why">
          <h2>Why WhatsApp?</h2>
          <p>WhatsApp is the one platform that brings together automation, payments & customer support.</p>

          <div className="wp-stats">
            <div className="stat-box">
              <h3>98%</h3>
              <p>Open Rates</p>
            </div>

            <div className="stat-box">
              <h3>45-60%</h3>
              <p>Click Rates</p>
            </div>

            <div className="stat-box">
              <h3>2.6B+</h3>
              <p>Active Users</p>
            </div>

            <div className="stat-box">
              <h3>70%</h3>
              <p>Engagement Rate</p>
            </div>
          </div>
        </section>
        {/* what is whtsapp marketing */}
        <div className="flowchart-container">
          <div className="flowchart-wrapper">
            <h3 className="flowmain-title">What is WhatsApp Marketing</h3>

            <div className="flowchart-grid">
              {sections.map((section) => (
                <div key={section.id} className="flowsection-column">
                  <div className="flowcategory-badge">{section.category}</div>

                  <div className="flowcards-wrapper">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="flowinfo-card"
                        style={{ '--card-color': item.color }}
                      >
                        <div className="flowcard-icon-wrapper">
                          <item.icon />
                        </div>
                        <h3 className="flowcard-title">{item.title}</h3>
                        <p className="flowcard-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* why Choose TMH */}

        <h3 className="textCenter">Why Choose Twinkle Media Hub?</h3>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <div className="wp-stats">
            <div className="stat-box wstatsBox">
              <h3>Expertise in Digital Marketing:</h3>
              <p> With years of experience in the industry, we understand the nuances of digital marketing and deliver solutions that align with your business objectives.</p>
            </div>

            <div className="stat-box wstatsBox">
              <h3>Customized Strategies: </h3>
              <p>Our approach is tailored to your unique needs, ensuring personalized campaigns that resonate with your target audience.</p>
            </div>

            <div className="stat-box wstatsBox">
              <h3>Proven Results:</h3>
              <p> We have a track record of delivering measurable results for businesses across various sectors, enhancing their online presence and driving revenue growth.</p>
            </div>
          </div>
          {/* <li>
            {" "}
            <b>Expertise in Digital Marketing:</b> With years of experience in
            the industry, we understand the nuances of digital marketing and
            deliver solutions that align with your business objectives.
          </li>
          <li>
            {" "}
            <b>Customized Strategies:</b> Our approach is tailored to your
            unique needs, ensuring personalized campaigns that resonate with
            your target audience.
          </li>
          <li>
            {" "}
            <b>Proven Results:</b> We have a track record of delivering
            measurable results for businesses across various sectors, enhancing
            their online presence and driving revenue growth.
          </li> */}
        </div>

        {/* <h3>Engage with Billions of WhatsApp Users</h3>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            WhatsApp boasts billions of active users globally, making it a
            powerful platform for reaching a vast audience. Our Bulk WhatsApp
            Marketing services capitalize on this extensive reach, enabling you
            to connect with potential customers and nurture leads effectively.
          </p>
        </div> */}



        {/* <button className="serv-btn">Get Quote</button> */}
      </div>
    </>
  );
}
