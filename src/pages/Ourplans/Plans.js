import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-section">
      <h2 className="plans-title">Our Monthly Plans</h2>
      <div className="plans-container">
        <div className="plan-card basic">
          <h3>BASIC</h3>
          <p>6 Reels 4 Posts</p>
          <ul>
            <li>6 Stories</li>
            <li>Content Research</li>
            <li>Script Writing</li>
            <li>Video Editing/Production</li>
          </ul>
          <div className="social-media-btns">
            <button className="social-media-btn">
              <FaFacebook /> 
            </button>
            <button className="social-media-btn">
              <FaInstagram />
            </button>
            <button className="social-media-btn">
              <FaLinkedin />
            </button>
          </div>
        </div>

        <div className="plan-card silver">
          <h3>SILVER</h3>
          <p>8 Reels 6 Posts</p>
          <ul>
            <li>2 Carousel</li>
            <li>8 Stories</li>
            <li>Content Research</li>
            <li>Script Writing</li>
            <li>Video Editing/Production</li>
            <li>Logo Animation</li>
            <li>Brand Awareness Ads (Reach)</li>
          </ul>
          <div className="social-media-btns">
            <button className="social-media-btn">
              <FaFacebook /> 
            </button>
            <button className="social-media-btn">
              <FaTwitter />
            </button>
            <button className="social-media-btn">
              <FaInstagram />
            </button>
            <button className="social-media-btn">
              <FaLinkedin />
            </button>
          </div>
        </div>

        <div className="plan-card gold">
          <h3>GOLD</h3>
          <p>12 Reels 6 Posts</p>
          <ul>
            <li>4 Carousel</li>
            <li>8 Stories</li>
            <li>Blogs/Articles</li>
            <li>Content Research</li>
            <li>Script Writing</li>
            <li>Video Editing/Production</li>
            <li>Logo Animation</li>
            <li>Brand Awareness Ads (Reach)</li>
            <li>Traffic (Profile Visit)</li>
          </ul>
          <div className="social-media-btns">
            <button className="social-media-btn">
              <FaFacebook /> 
            </button>
            <button className="social-media-btn">
              <FaTwitter />
            </button>
            <button className="social-media-btn">
              <FaInstagram />
            </button>
            <button className="social-media-btn">
              <FaLinkedin />
            </button>
          </div>
        </div>

        <div className="plan-card platinum">
          <h3>PLATINUM</h3>
          <p>18 Reels 6 Posts</p>
          <ul>
            <li>6 Carousel</li>
            <li>8 Stories</li>
            <li>Content Research</li>
            <li>Script Writing</li>
            <li>Video Editing/Production</li>
            <li>Logo Animation</li>
            <li>Brand Awareness Ads (Reach)</li>
            <li>Traffic (Profile Visit)</li>
            <li>Engagement (Page Likes)</li>
            <li>Youtube Ads</li>
          </ul>
          <div className="social-media-btns">
            <button className="social-media-btn">
              <FaFacebook /> 
            </button>
            <button className="social-media-btn">
              <FaTwitter />
            </button>
            <button className="social-media-btn">
              <FaInstagram />
            </button>
            <button className="social-media-btn">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
