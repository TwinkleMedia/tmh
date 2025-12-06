import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import './career.css';

function Careerpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    cv: null
  });

  const handleSubmit = () => {
    const { name, email, subject } = formData;

    if (!name || !email || !subject) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // WhatsApp message with instructions to attach CV
    const message = `Name: ${name}%0AEmail: ${email}%0APosition: ${subject}%0A%0A*Please attach your CV before sending.*`;

    // Your WhatsApp number without +
    const whatsappNumber = '917900193079';

    // WhatsApp link
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp Web or app
    window.open(whatsappURL, '_blank');
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0]
    });
  };

  return (
    <div className="career-container">
      <h1 className="career-header">
        Let's Grow Together at <span>Twinkle Media</span>
      </h1>

      <div className="career-wrapper">
        <div className="career-content">
          {/* Form Section */}
          <div className="form-section">
            <h2 className="form-title">Career Us</h2>
            <div>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  value={formData.name}
                  placeholder='Enter Your Name..'
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  value={formData.email}
                  placeholder='Enter Your Email..'
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Position</label>
                <input
                  type="text"
                  className="form-input"
                  id="subject"
                  value={formData.subject}
                  placeholder='Enter Position..'
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cv">Attach Your CV</label>
                <input
                  type="file"
                  className="form-input"
                  id="cv"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <button onClick={handleSubmit} className="careersubmit-btn">
                Submit via WhatsApp
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="info-section">
            <h2 className="info-title">Get in touch</h2>

            <div className="info-block">
              <h3 className="info-heading">Address:</h3>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="info-link">
                <p className="info-text">
                  Office No.24, Plot 19, Gauri Complex, Sector 11<br />
                  CBD Belapur, Navi Mumbai<br />
                  Maharashtra 400614
                </p>
              </a>
            </div>

            <div className="info-block">
              <h3 className="info-heading">Phone:</h3>
              <a href="tel:+917009680118" className="info-link">
                <p className="info-text">(+91) 7009680118</p>
              </a>
              <a href="tel:+917900193079" className="info-link">
                <p className="info-text">(+91) 7900193079</p>
              </a>
            </div>

            <div className="info-block">
              <h3 className="info-heading">Email:</h3>
              <a href="mailto:info@twinklemediahub.com" className="info-link">
                <p className="info-text">info@twinklemediahub.com</p>
              </a>
            </div>

            <div className="follow-section">
              <h4 className="follow-title">Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <a href="https://www.instagram.com/twinklemediahub/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@twinklemediahub" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/p/Twinkle-Media-Hub-Pvt-Ltd-61554146648877/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/twinkle-media-hub-pvt-ltd" target="_blank" rel="noopener noreferrer" className="social-link">
                    <IoLogoLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careerpage;
