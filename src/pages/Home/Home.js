import React from 'react';
import './Home.css'; // Add responsive CSS here if you're not using Tailwind

export default function Home() {
  const slides = [
    {
      id: 1,
      bgImage: '/assets/images/slider1.jpg', // Replace with your image path
      heading: 'Creative Strategies',
      subtext: 'Delivering performance-driven marketing with design thinking.',
    },
    {
      id: 2,
      bgImage: '/assets/images/slider2.jpg',
      heading: 'Digital First, Always',
      subtext: 'We build scalable, responsive digital campaigns.',
    },
    {
      id: 3,
      bgImage: '/assets/images/slider3.jpg',
      heading: 'Branding That Resonates',
      subtext: 'Creating identities that last and connect.',
    },
  ];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="carousel-slide"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              padding: '0 5%',
              color: '#fff',
            }}
          >
            <div className="slide-text" style={{ maxWidth: '600px' }}>
              <h1 className="slide-heading">{slide.heading}</h1>
              <p className="slide-subtext">{slide.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
