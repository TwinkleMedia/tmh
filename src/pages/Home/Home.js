import React from 'react';
import './Home.css'; // Add responsive CSS here if you're not using Tailwind
import "./newHome.css";
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
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span>Transforming Brands Through Strategy,</span>
            <span>Creativity and Technology</span>
          </h1>

          <h3 className="services">
            Commercial Ads | SMM | SEO | Web Development | Media Production
          </h3>

          <p>
            We craft engaging campaigns, high-quality visuals, and smart digital strategies that help brands shine online and offline
          </p>

          <button className="quote-btn">Get A Quick Quote</button>
        </div>

        {/* RIGHT SIDE — TWO VERTICAL IMAGE COLUMNS */}
        <div className="hero-right">
          <div className="image-column col-1">
            <div className="scroll-track top-bottom">
              {Array(2).fill(0).map((_, i) => (
                <>
                  <img key={`c1-img1-${i}`} src="/asset/homeSlider/img1.png" />
                  <img key={`c1-img2-${i}`} src="/asset/homeSlider/img2.png" />
                  <img key={`c1-img3-${i}`} src="/asset/homeSlider/img3.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img4.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img5.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img6.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img7.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img8.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img9.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img10.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img11.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img12.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img13.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img14.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img15.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img16.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img17.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img18.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img19.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img20.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img21.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img22.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img23.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img24.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img25.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img26.png" />
                </>
              ))}
            </div>
          </div>

          <div className="image-column col-2">
            <div className="scroll-track bottom-top">
              {Array(2).fill(0).map((_, i) => (
                <>
                  <img key={`c2-img1-${i}`} src="/asset/homeSlider/img1.png" />
                  <img key={`c2-img2-${i}`} src="/asset/homeSlider/img2.png" />
                  <img key={`c2-img3-${i}`} src="/asset/homeSlider/img3.png" />
                  <img key={`c2-img4-${i}`} src="/asset/homeSlider/img4.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img5.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img6.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img7.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img8.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img9.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img10.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img11.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img12.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img13.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img14.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img15.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img16.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img17.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img18.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img19.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img20.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img21.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img22.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img23.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img24.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img25.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img26.png" />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="mobilehero-right">
          <div className="image-column col-1">
            <div className="scroll-track left-right">
              {Array(2).fill(0).map((_, i) => (
                <>
                  <img key={`c1-img1-${i}`} src="/asset/homeSlider/img1.png" />
                  <img key={`c1-img2-${i}`} src="/asset/homeSlider/img2.png" />
                  <img key={`c1-img3-${i}`} src="/asset/homeSlider/img3.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img4.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img5.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img6.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img7.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img8.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img9.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img10.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img11.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img12.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img13.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img14.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img15.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img16.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img17.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img18.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img19.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img20.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img21.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img22.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img23.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img24.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img25.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img26.png" />
                </>
              ))}
            </div>
          </div>

          <div className="image-column col-2">
            <div className="scroll-track right-left">
              {Array(2).fill(0).map((_, i) => (
                <>
                  <img key={`c2-img1-${i}`} src="/asset/homeSlider/img1.png" />
                  <img key={`c2-img2-${i}`} src="/asset/homeSlider/img2.png" />
                  <img key={`c2-img3-${i}`} src="/asset/homeSlider/img3.png" />
                  <img key={`c2-img4-${i}`} src="/asset/homeSlider/img4.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img5.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img6.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img7.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img8.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img9.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img10.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img11.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img12.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img13.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img14.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img15.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img16.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img17.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img18.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img19.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img20.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img21.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img22.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img23.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img24.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img25.png" />
                  <img key={`c1-img4-${i}`} src="/asset/homeSlider/img26.png" />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="floating-blobs">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
          <div className="blob blob4"></div>
        </div>
      </div>
    </section>
  );
}
