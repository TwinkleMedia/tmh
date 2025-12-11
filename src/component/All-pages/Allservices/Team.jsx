import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import "./Socialmedia.css";
import "./Commercialpage.css";
import "./team.css";

export default function Team() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Commercial Ads Company in Mumbai & Navi Mumbai | Twinkle Media Hub</title>

        <link rel="canonical" href="https://twinklemediahub.com/team" />

        <meta
          name="description"
          content="Twinkle Media Hub delivers high-quality commercial ads for TV, digital platforms, and social media. Leading ad production company in Mumbai & Navi Mumbai."
        />

        <meta
          name="keywords"
          content="Commercial ads Mumbai, ad agency Mumbai, TV commercials, digital ads Mumbai, corporate ad films, commercial ad production company"
        />

        <meta property="og:title" content="Best Commercial Ads Company in Mumbai & Navi Mumbai | Twinkle Media Hub" />
        <meta property="og:site_name" content="Twinkle Media Hub Pvt. Ltd." />
        <meta property="og:url" content="https://twinklemediahub.com/team" />
        <meta
          property="og:description"
          content="Twinkle Media Hub is the top ad production company creating high-impact commercial ads for brands across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.twinklemediahub.com/assets/Team/fullteam.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Commercial Ads Company in Mumbai & Navi Mumbai | Twinkle Media Hub" />
        <meta
          name="twitter:description"
          content="Create high-impact commercial ads with Twinkle Media Hub. Trusted by top brands."
        />
        <meta name="twitter:image" content="https://www.twinklemediahub.com/assets/Team/fullteam.webp" />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Twinkle Media Hub Pvt. Ltd.",
            "url": "https://www.twinklemediahub.com",
            "logo": "https://www.twinklemediahub.com/logo.png",
            "description": "Leading commercial advertisement production company in Mumbai & Navi Mumbai.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "CBD Belapur, Navi Mumbai",
              "addressCountry": "IN"
            },
            "sameAs": [
             "https://www.instagram.com/twinklemediahub/?hl=en",
              "https://www.facebook.com/p/Twinkle-Media-Hub-Pvt-Ltd-61554146648877/"
              "https://www.youtube.com/@twinklemediahub",
              "https://in.linkedin.com/company/twinkle-media-hub-pvt-ltd",
            ]
          }
        `}
        </script>
      </Helmet>
      <section className="leaders-section">

        {/* Left Side - CEO */}
        <div className="leader left">
          <div className="leader-content">
            <div className="leader-img">
              <img src="./asset/Team/maam.webp" alt="CEO" />
            </div>
            <div className="leader-text">
              <h2 className="leader-name">Deepika Rajan</h2>
              <p className="leader-role">-CEO</p>
            </div>
          </div>
        </div>

        {/* Right Side - Managing Director */}
        <div className="leader right">
          <div className="leader-content">
            <div className="leader-text right-text">
              <h2 className="leader-name">Harpinder Singh</h2>
              <p className="leader-role">-Managing Director</p>
            </div>
            <div className="leader-img">
              <img src="./asset/Team/sir.webp" alt="managing director" />
            </div>
          </div>
        </div>

      </section>
      <div className="container">
        <div className="leadership-section">
          <div className="container">

            {/* <div className="leaders-container">
              <div className="leader-card">
                <div className="card-border"></div>
                <div className="leader-image-wrapper">
                  <div className="leader-image ceo-bg">
                    <img src="./asset/team/maam.webp" alt="" />
                  </div>
                  <div className="designation-badge ceo-badge">
                    Chief Executive Officer
                  </div>
                </div>
                <div className="leader-info">
                  <h2 className="leader-name">Deepika Rajan</h2>
                  <div className="divider"></div>
                  <p className="leader-bio">
                    Visionary leader with expertise in strategic planning and
                    business development. Deepika drives innovation and
                    operational excellence across all divisions of Twinkle Media
                    Hub, fostering a culture of creativity and growth.
                  </p>
                </div>
              </div>

              <div className="leader-card">
                <div className="card-border"></div>
                <div className="leader-image-wrapper">
                  <div className="leader-image md-bg">
                    <img src="./asset/team/sir.webp" alt="" />

                  </div>
                  <div className="designation-badge md-badge">
                    Managing Director
                  </div>
                </div>
                <div className="leader-info">
                  <h2 className="leader-name">Harpinder Singh</h2>
                  <div className="divider"></div>
                  <p className="leader-bio">
                    Strategic executive specializing in operations management and
                    business scaling. Harpinder orchestrates seamless operations
                    and drives sustainable growth, ensuring Twinkle Media Hub
                    maintains its competitive edge in the industry.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <section className="Team">
            <h2 className="Teamh2 textCenter">
              <span>Meet</span> Our Team
            </h2>
            <div>
              <img src="./asset/Team/fullteam.webp" alt="full team" />
            </div>
          </section>

          <div className="team-wrapper">
            <div className="team-track">
              <div className="membg">
                <img src="./asset/Team/memb1.webp" alt="Twinkle media hub team member " loading="lazy"/>
              </div>
              <div className="membg">
                <img src="./asset/Team/memb2.webp" alt="Twinkle media hub team member" loading="lazy" />
              </div>
              <div className="membg">
                <img src="./asset/Team/memb3.webp" alt="Twinkle media hub team member" loading="lazy" />
              </div>
              <div className="membg">
                <img src="./asset/Team/memb4.webp" alt="Twinkle media hub team member" loading="lazy" />
              </div>
              <div className="membg">
                <img src="./asset/Team/memb5.webp" alt="Twinkle media hub team member" loading="lazy"/>
              </div>

              {/* duplicates for infinite loop */}
              <div className="membg">
                <img src="./asset/Team/memb1.webp" alt="Twinkle media hub team member" loading="lazy"/>
              </div>
              <div className="membg">
                <img src="./asset/Team/memb2.webp" alt="Twinkle media hub team member" loading="lazy"/>
              </div>
              <div className="membg">
                <img src="./asset/Team/memb3.webp" alt="Twinkle media hub team member" loading="lazy" />
              </div>
              <div className="membg">
                <img src="./asset/Team/memb4.webp" alt="Twinkle media hub team member" loading="lazy"/>
              </div>
              <div className="membg">
                <img src="./asset/Team/memb5.webp" alt="Twinkle media hub team member" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
