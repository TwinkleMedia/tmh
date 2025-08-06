import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSlider = () => {
  const [staffData, setStaffData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(
          "https://twinklemediahub.com/twinkleadmin/reactapi/get_staff.php"
        );
        const data = await response.json();
        console.log(data); // Log API response
        setStaffData(data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };
    fetchStaffData();
  }, []);
  

  useEffect(() => {
    fetch("https://twinklemediahub.com/twinkleadmin/reactapi/get_team.php")
      .then((response) => response.json())
      .then((data) => {
        
        setTeam(data);
      })
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === staffData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [staffData, isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === staffData.length - 1 ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? staffData.length - 1 : prev - 1));
    setIsAutoPlay(false);
  };

  return (
    <div className="team-sections">
      {/* Original Slider Section */}
      <div className="team-slider">
        <div className="container">
          <h2 className="title">
            Meet Our <span className="title-highlight">Amazing Team</span>
          </h2>

          <div className="slider-container">
            {staffData.map((staff, index) => (
              <div
                key={staff.id}
                className={`slide ${currentSlide === index ? "active" : ""}`}
              >
                <div className="slide-content">
                  <div className="image-section">
                    <div className="image-container">
                      <div className="image-pulse"></div>
                      <img
                        src={`https://twinklemediahub.com/twinkleadmin/sidenavabar/${staff.image}`}
                        alt={staff.name}
                        className="staff-image"
                      />
                    </div>
                  </div>

                  <div className="content-section">
                    <h3 className="staff-name">{staff.name}</h3>
                    <div className="divider"></div>
                    <p className="staff-designation">{staff.designation}</p>
                    <p
                      className="staff-description"> {staff.description}</p>
                    

                    <div className="social-links">
                      <button className="social-button">
                        <svg
                          className="social-icon"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      <button className="social-button">
                        <svg
                          className="social-icon"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={prevSlide} className="nav-button prev">
              <ChevronLeft className="nav-icon" />
            </button>
            <button onClick={nextSlide} className="nav-button next">
              <ChevronRight className="nav-icon" />
            </button>

            <div className="dots-navigation">
              {staffData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Circular Team Section */}
      <div className="circular-team-section">
        <div className="containers">
          <h2 className="section-title">Our Team</h2>
          <div className="circular-grid">
            <div className="top-row">
              {team.slice(0, 4).map((member, index) => (
                <div key={`top-${index}`} className="team-circle">
                  <div className="circle-wrapper">
                    <img
                      src={`https://twinklemediahub.com/twinkleadmin/sidenavabar/${member.image}`} // Correct path
                      alt={`Team Member ${index}`}
                      className="circle-image"
                    />
                  </div>
                  <div className="circle-info">
                    <p className="designation">{member.name}</p>
                    <p className="designation">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom-row">
              {team.slice(4, 6).map((member, index) => (
                <div key={`bottom-${index}`} className="team-circle">
                  <div className="circle-wrapper">
                    <img
                      src={`https://twinklemediahub.com/twinkleadmin/sidenavabar/${member.image}`} // Correct path
                      alt={`Team Member ${index}`}
                      className="circle-image"
                    />
                  </div>
                  <div className="circle-info">
                    <p className="designation">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
   /* Base Styles */
/* Base Styles */
.team-slider {
  position: relative;
  min-height: 100vh;
  padding: 1rem 0.5rem;
 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

.title {
  text-align: center;
  color: #1C5ABC;
  font-size: 1.75rem;
  text-transform: uppercase;
  font-family: "Anta", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
}

.title-highlight {
  color: #3182ce;
}

.slider-container {
  position: relative;
  width: calc(100% - 1rem);
  height: auto;
  min-height: 480px;
  margin: 0 auto;
  background: white;
  border-radius: 0.75rem;
 
  overflow: hidden;
  padding: 0.5rem;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.7s ease-in-out;
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
}

.slide-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
  max-width: 100%;
}

.image-section {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #e6f0ff, #f0e6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
}

.image-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.image-pulse {
  position: absolute;
  inset: 0;
  background: #3182ce;
  border-radius: 50%;
  opacity: 0.2;
  animation: pulse 2s infinite;
}

.staff-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
}

.staff-image:hover {
  transform: scale(1.05);
}

.content-section {
  width: 100%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.staff-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 0.5rem;
  width: 100%;
  word-break: break-word;
}

.divider {
  width: 3rem;
  height: 2px;
  background: #3182ce;
  margin: 0.5rem 0;
}

.staff-designation {
  font-size: 1rem;
  color: #3182ce;
  margin-bottom: 0.75rem;
  width: 100%;
}

.staff-description {
  color: #4a5568;
  line-height: 1.4;
  font-size: 0.875rem;
  margin: 0 auto 1rem;
  padding: 0 0.5rem;
  width: 100%;
  max-width: 90%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-button {
  background: #f0f7ff;
  border: none;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #3182ce;
  transition: all 0.3s;
}

.social-button:hover {
  background: #e1efff;
  color: #2c5282;
  transform: translateY(-2px);
}

.social-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.nav-button {
  position: absolute;
  top: 120px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #3182ce;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.nav-button:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-button.prev {
  left: 0.5rem;
}

.nav-button.next {
  right: 0.5rem;
}

.nav-icon {
  width: 1rem;
  height: 1rem;
}

.dots-navigation {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #cbd5e0;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.dot:hover {
  background: #a0aec0;
}

.dot.active {
  width: 1.25rem;
  background: #3182ce;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.2;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

/* Tablet and Desktop Styles */
@media (min-width: 768px) {
  .team-slider {
    padding: 4rem 1rem;
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .slider-container {
    max-width: 1000px;
    min-height: 600px;
    padding: 1.5rem;
    border-radius: 1rem;
  }

  .slide-content {
    flex-direction: row;
    padding: 1rem;
    gap: 2rem;
  }

  .image-section {
    width: 40%;
    padding: 2rem;
    margin-bottom: 0;
  }

  .image-container {
    width: 200px;
    height: 200px;
  }

  .content-section {
    width: 60%;
    padding: 8rem;
  }

  .staff-name {
    font-size: 1.75rem;
  }

  .staff-designation {
    font-size: 1.25rem;
  }

  .staff-description {
    font-size: 1rem;
    line-height: 1.6;
    padding: 0 1rem;
  }

  .social-button {
    width: 2.5rem;
    height: 2.5rem;
  }

  .social-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .nav-button {
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
  }

  .nav-button.prev {
    left: 1rem;
  }

  .nav-button.next {
    right: 1rem;
  }

  .nav-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .dot.active {
    width: 2rem;
  }
}

/* Large Desktop Styles */
@media (min-width: 1024px) {
  .team-slider {
    padding: 6rem 1rem;
  }

  .slider-container {
    padding: 2rem;
  }

  .title {
    font-size: 3rem;
  }

  .image-container {
    width: 240px;
    height: 240px;
  }

  .staff-name {
    font-size: 2rem;
  }

  .staff-description {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .nav-button {
    width: 3rem;
    height: 3rem;
  }

  .nav-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

        /* New Circular Team Section Styles */
        .circular-team-section {
          padding: 6rem 1rem;
     
        }
.circular-team-section .containers {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center; /* Center align the heading */
}
        .section-title {
          text-align: center;
          color: #1C5ABC;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          text-transform: uppercase;
          font-family: "Anta", sans-serif;
          font-weight: 400;
        }

        .circular-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .top-row, .bottom-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .top-row {
          width: 100%;
        }

        .bottom-row {
          width: 80%;
        }

        .team-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: transform 0.3s ease;
        }

        .team-circle:hover {
          transform: translateY(-10px);
        }

        .circle-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .circle-wrapper:hover {
          transform: scale(1.05);
        }

        .circle-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .circle-info {
          text-align: center;
        }

        .circle-info .designation {
          color: #3182ce;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .title {
            font-size: 2.5rem;
          }

          .slider-container {
            height: 600px;
          }

          .slide-content {
            flex-direction: column;
          }

          .image-section,
          .content-section {
            width: 100%;
            height: 50%;
          }

          .image-container {
            width: 200px;
            height: 200px;
          }

          .staff-description {
            max-width: 100%;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .team-slider {
            padding: 6rem 1rem;
          }

          .title {
            font-size: 2rem;
          }

          .slider-container {
            height: 700px;
          }

          .staff-name {
            font-size: 1.5rem;
          }

          .staff-designation {
            font-size: 1rem;
          }

          .top-row,
          .bottom-row {
            width: 100%;
          }

          .team-circle {
            width: calc(50% - 1rem);
          }

          .circle-wrapper {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .team-slider {
            padding: 4rem 1rem;
          }

          .title {
            font-size: 1.5rem;
          }

          .slider-container {
            height: 600px;
          }

          .image-container {
            width: 150px;
            height: 150px;
          }

          .team-circle {
            width: 100%;
          }

          .circle-wrapper {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamSlider;
