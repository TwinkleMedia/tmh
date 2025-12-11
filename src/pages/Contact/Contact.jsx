import React from "react";
import "./contact.css";
import Map from "./Map";
import Left from "./Left";
import Right from "./Right";
import ContactForm from "./ContactForm";
import "./contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <div className="myContact">
      {/*<Banner name="Contact"/>*/}
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Contact Us | Twinkle Media Hub – Digital Marketing Agency in Navi Mumbai</title>

        <meta
          name="description"
          content="Get in touch with Twinkle Media Hub, a leading Digital Marketing Agency in Navi Mumbai offering SEO, Social Media Marketing, Web Development, PPC, Branding & more. Contact us today!"
        />

        <meta
          name="keywords"
          content="contact twinkle media hub, digital marketing contact navi mumbai, seo agency contact, social media marketing agency contact, marketing agency cbd belapur"
        />

        <link rel="canonical" href="https://www.twinklemediahub.com/contact" />

        {/* ✔ Open Graph Meta Tags (For Social Sharing) */}
        <meta property="og:title" content="Contact Twinkle Media Hub | Digital Marketing Agency Navi Mumbai" />
        <meta property="og:description" content="Reach out to Twinkle Media Hub for SEO, SMM, PPC, Web Development & Digital Marketing Solutions." />
        <meta property="og:url" content="https://www.twinklemediahub.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.twinklemediahub.com/images/contact-banner.jpg" />

        {/* ✔ Twitter Card */}
        <meta name="twitter:title" content="Contact Twinkle Media Hub | Digital Marketing Agency" />
        <meta name="twitter:description" content="We provide top-notch Digital Marketing, SEO, SMM & PPC services. Contact us today!" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ================= LOCAL BUSINESS SCHEMA (SEO GOLDMINE) ================= */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Twinkle Media Hub Pvt. Ltd.",
            "image": "https://www.twinklemediahub.com/asset/logo.png",
            "@id": "https://www.twinklemediahub.com",
            "url": "https://www.twinklemediahub.com/contact",
            "telephone": "+91-79001 93079",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.24, Plot 19, Gauri Complex, Sector 11",
              "addressLocality": "CBD Belapur",
              "addressRegion": "Navi Mumbai",
              "postalCode": "400614",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.017425501236254",
              "longitude": "73.04334589399724"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "10:00",
                "closes": "19:00"
              }
            ],
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
      <Map />
      <ContactForm />
    </div>
  );
}

export default Contact;
