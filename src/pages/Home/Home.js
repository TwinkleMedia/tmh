import React from 'react';
import './Home.css'; // Add responsive CSS here if you're not using Tailwind
import "./newHome.css";
import { Helmet } from "react-helmet";
export default function Home() {
  const slides = [
    {
      id: 1,
      bgImage: 'https://res.cloudinary.com/dh9dpvul4/image/upload/v1754573802/Group_7_octgbf.png', // Replace with your image path
      heading: 'Creative Strategies',
      subtext: 'Delivering performance-driven marketing with design thinking.',
    },
    {
      id: 2,
      bgImage: 'https://res.cloudinary.com/dh9dpvul4/image/upload/v1754724044/tmh_cover_6_qmai7s.png',
      heading: 'Digital First, Always',
      subtext: 'We build scalable, responsive digital campaigns.',
    },
    {
      id: 3,
      bgImage: 'https://res.cloudinary.com/dh9dpvul4/image/upload/v1754724044/tmh_cover_5_j1qbwx.png',
      heading: 'Branding That Resonates',
      subtext: 'Creating identities that last and connect.',
    },
  ];
 const portfolioImages = [
    { src: "/asset/homeSlider/img1.webp", alt: "Digital marketing campaign showcase - TMH Media portfolio" },
    { src: "/asset/homeSlider/img2.webp", alt: "Brand identity design project - Creative branding solutions" },
    { src: "/asset/homeSlider/img3.webp", alt: "Social media marketing content - Instagram and Facebook ads" },
    { src: "/asset/homeSlider/img4.webp", alt: "Commercial video production - Professional ad filming" },
    { src: "/asset/homeSlider/img5.webp", alt: "SEO optimization results - Organic traffic growth" },
    { src: "/asset/homeSlider/img6.webp", alt: "Website development project - Responsive web design" },
    { src: "/asset/homeSlider/img7.webp", alt: "E-commerce marketing campaign - Online sales strategy" },
    { src: "/asset/homeSlider/img8.webp", alt: "Corporate branding project - Logo and identity design" },
    { src: "/asset/homeSlider/img9.webp", alt: "Social media content creation - Engaging visual posts" },
    { src: "/asset/homeSlider/img10.webp", alt: "Digital advertising campaign - PPC and display ads" },
    { src: "/asset/homeSlider/img11.webp", alt: "Video marketing content - YouTube and social video" },
    { src: "/asset/homeSlider/img12.webp", alt: "Print media design - Brochures and marketing materials" },
    { src: "/asset/homeSlider/img13.webp", alt: "Influencer marketing campaign - Brand collaborations" },
    { src: "/asset/homeSlider/img14.webp", alt: "Email marketing design - Newsletter and promotional emails" },
    { src: "/asset/homeSlider/img15.webp", alt: "Mobile app marketing - App store optimization" },
    { src: "/asset/homeSlider/img16.webp", alt: "Content marketing strategy - Blog and article writing" },
    { src: "/asset/homeSlider/img17.webp", alt: "Photography services - Product and commercial photography" },
    { src: "/asset/homeSlider/img18.webp", alt: "Graphic design portfolio - Creative visual solutions" },
    { src: "/asset/homeSlider/img19.webp", alt: "Brand strategy consultation - Market positioning" },
    { src: "/asset/homeSlider/img20.webp", alt: "Social media management - Community engagement" },
    { src: "/asset/homeSlider/img21.webp", alt: "Video editing services - Post production and effects" },
    { src: "/asset/homeSlider/img22.webp", alt: "Packaging design - Product branding and labels" },
    { src: "/asset/homeSlider/img23.webp", alt: "Digital analytics - Marketing performance tracking" },
    { src: "/asset/homeSlider/img24.webp", alt: "Event marketing - Promotional campaigns and coverage" },
    { src: "/asset/homeSlider/img25.webp", alt: "UI/UX design - User experience optimization" },
    { src: "/asset/homeSlider/img26.webp", alt: "Marketing automation - CRM and lead generation" },
  ];
  return (

    // <div className="carousel-container">
    //   <div className="carousel">
    //     {slides.map((slide, index) => (
    //       <div
    //         key={slide.id}
    //         className="carousel-slide"
    //         style={{
    //           backgroundImage: `url(${slide.bgImage})`,
    //           backgroundSize: 'cover',
    //           backgroundPosition: 'center',
    //           height: '75vh',
    //           display: 'flex',
    //           alignItems: 'center',
    //           padding: '0 5%',
    //           color: '#fff',
    //         }}
    //       >
    //         <div className="slide-text" style={{ maxWidth: '600px' }}>
    //           <h1 className="slide-heading">{slide.heading}</h1>
    //           <p className="slide-subtext">{slide.subtext}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        <title>Top Digital Marketing Agency in Navi Mumbai | TMH Media - SEO, SMM, Branding & Web Development</title>

        <meta
          name="description"
          content="TMH Media is Navi Mumbai's leading digital marketing agency specializing in commercial ads, SEO services, social media marketing, branding, and website development. We deliver ROI-driven campaigns that transform brands and drive growth. Contact us for a free consultation."
        />

        <meta
          name="keywords"
          content="digital marketing agency Mumbai, SEO services India, social media marketing, branding agency Navi Mumbai, commercial video production, website development, PPC advertising, content marketing, influencer marketing, graphic design agency, TMH Media"
        />

        <meta name="author" content="TMH Media - Twinkle Media Hub Pvt Ltd" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.twinklemediahub.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.twinklemediahub.com/" />
        <meta property="og:site_name" content="TMH Media" />
        <meta property="og:title" content="Top Digital Marketing Agency in Mumbai | TMH Media" />
        <meta property="og:description" content="Transform your brand with TMH Media's expert digital marketing services. We specialize in SEO, SMM, commercial ads, branding, and web development. Get measurable results with India's trusted creative agency." />
        <meta property="og:image" content="https://www.twinklemediahub.com/asset/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TMH Media - Digital Marketing Agency Logo" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.twinklemediahub.com/" />
        <meta name="twitter:title" content="Top Digital Marketing Agency in Mumbai | TMH Media" />
        <meta name="twitter:description" content="Expert digital marketing services including SEO, SMM, branding, and web development. Drive growth with data-driven strategies from Mumbai's leading creative agency." />
        <meta name="twitter:image" content="https://www.twinklemediahub.com/asset/logo.png" />
        <meta name="twitter:image:alt" content="TMH Media Logo" />
        <meta name="twitter:site" content="@twinklemediahub" />
        <meta name="twitter:creator" content="@twinklemediahub" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Navi Mumbai" />
        <meta name="geo.position" content="19.017466074234495, 73.04339953817521" />
        <meta name="ICBM" content="19.017466074234495, 73.04339953817521" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.twinklemediahub.com/#organization",
            name: "TMH Media - Twinkle Media Hub Pvt Ltd",
            alternateName: "TMH Media",
            url: "https://www.twinklemediahub.com/",
            logo: {
              "@type": "ImageObject",
              url: "https://www.twinklemediahub.com/asset/logo.png",
              width: "250",
              height: "60"
            },
            description: "Full-service digital marketing agency in Mumbai offering SEO, social media marketing, commercial ads production, branding, website development, and media production services.",
            foundingDate: "2020",
            slogan: "Transforming Brands Through Strategy, Creativity and Technology",
            email: "contact@twinklemediahub.com",
            telephone: "+91 70096 80118",
            areaServed: {
              "@type": "Country",
              name: "India"
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office No. 24, Plot 19, Gauri Complex, Sector 11, CBD Belapur",
              addressLocality: "Navi Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400614",
              addressCountry: "IN"
            },
            sameAs: [
              "https://www.facebook.com/p/Twinkle-Media-Hub-Pvt-Ltd-61554146648877/",
              "https://www.instagram.com/twinklemediahub/?hl=en",
              "https://in.linkedin.com/company/twinkle-media-hub-pvt-ltd"
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150"
            },
            offers: {
              "@type": "AggregateOffer",
              offerCount: "7",
              offers: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Services",
                    description: "Search engine optimization to improve organic rankings and drive qualified traffic"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing",
                    description: "Strategic social media campaigns across Instagram, Facebook, LinkedIn, and more"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Video Production",
                    description: "Professional ad filming, video editing, and commercial production services"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Brand Identity Design",
                    description: "Complete branding solutions including logo design, brand strategy, and visual identity"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Development",
                    description: "Custom website design and development with responsive, SEO-friendly architecture"
                  }
                }
              ]
            }
          })}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.twinklemediahub.com/#website",
            url: "https://www.twinklemediahub.com/",
            name: "TMH Media",
            description: "Digital Marketing Agency in Mumbai",
            publisher: {
              "@id": "https://www.twinklemediahub.com/#organization"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.twinklemediahub.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.twinklemediahub.com/"
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.twinklemediahub.com/#localbusiness",
            name: "TMH Media",
            image: "https://www.twinklemediahub.com/asset/logo.png",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office No. 24, Plot 19, Gauri Complex, Sector 11, CBD Belapur",
              addressLocality: "Navi Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400614",
              addressCountry: "IN"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "19.0330",
              longitude: "73.0297"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00"
              }
            ]
          })}
        </script>
      </Helmet>


      <section className="hero">
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1 className="hero-title">
              <span>TMH Top Digital Marketing,</span>
              <span>SEO Agency in Navi Mumbai</span>
            </h1>

            <h3 className="services" aria-label="Services Offered">
              Commercial Ads | SMM | SEO | Web Development | Media Production
            </h3>

            <p>
              We craft engaging campaigns, high-quality visuals, and smart digital strategies that help brands shine online and offline
            </p>

            <button className="quote-btn"  onClick={() => window.location.href = "tel:+917900193079"}>Talk to Our Marketing Expert</button>
          </div>

          {/* RIGHT SIDE — TWO VERTICAL IMAGE COLUMNS */}
          <div className="hero-right" role="region" aria-label="Portfolio showcase">
            <div className="image-column col-1">
              <div className="scroll-track top-bottom">
                {Array(2).fill(0).map((_, setIndex) => (
                  <React.Fragment key={`mobile-col1-set-${setIndex}`}>
                    {portfolioImages.map((img, imgIndex) => (
                      <img 
                        key={`mobile-col1-${setIndex}-${imgIndex}`}
                        src={img.src} 
                        alt={img.alt}
                        loading={setIndex === 0 && imgIndex < 4 ? "eager" : "lazy"}
                        itemProp="image"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="image-column col-2">
              <div className="scroll-track bottom-top">
                {Array(2).fill(0).map((_, setIndex) => (
                  <React.Fragment key={`mobile-col2-set-${setIndex}`}>
                    {portfolioImages.map((img, imgIndex) => (
                      <img 
                        key={`mobile-col2-${setIndex}-${imgIndex}`}
                        src={img.src} 
                        alt={img.alt}
                        loading="lazy"
                        itemProp="image"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="mobilehero-right" role="region" aria-label="Mobile portfolio showcase">
            <div className="image-column col-1">
              <div className="scroll-track left-right">
                {Array(2).fill(0).map((_, setIndex) => (
                  <React.Fragment key={`mobile-col1-set-${setIndex}`}>
                    {portfolioImages.map((img, imgIndex) => (
                      <img 
                        key={`mobile-col1-${setIndex}-${imgIndex}`}
                        src={img.src} 
                        alt={img.alt}
                        loading={setIndex === 0 && imgIndex < 4 ? "eager" : "lazy"}
                        itemProp="image"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="image-column col-2">
              <div className="scroll-track right-left">
                {Array(2).fill(0).map((_, setIndex) => (
                  <React.Fragment key={`mobile-col2-set-${setIndex}`}>
                    {portfolioImages.map((img, imgIndex) => (
                      <img 
                        key={`mobile-col2-${setIndex}-${imgIndex}`}
                        src={img.src} 
                        alt={img.alt}
                        loading="lazy"
                        itemProp="image"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="floating-blobs" aria-hidden="true">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
            <div className="blob blob4"></div>
          </div>
        </div>
      </section>
    </>
  );
}
