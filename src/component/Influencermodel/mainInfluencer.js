// MainInfluencer.jsx
import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, X, Phone } from 'lucide-react';

// Styles
const styles = `
.influencer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}



  .title {
    text-Align: center;
    margin-Bottom: 2rem;
    color: #1C5ABC;
    font-size: 3vw;
    text-Transform: uppercase;
    font-Family: "Anta", sans-serif;
    font-Weight: 400px;
    font-Style: normal;

  }
  
  .title h2 {
    font-size: 42px;
    font-weight: bold;
  }


.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.filter-btn {
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background: #f0f0f0;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn.active {
  background: #007bff;
  color: white;
}

.influencer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 20px;
}

.influencer-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.influencer-card:hover {
  transform: translateY(-5px);
}

.influencer-card img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.influencer-info {
  padding: 15px;
}

.influencer-info p {
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 768px) {
  .modal-body {
    grid-template-columns: 1fr 1fr;
  }
}

.modal-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  objectFit: 'contain', // Ensures the full image is visible
      backgroundColor: '#f5f5f5',
}

.whatsapp-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25D366;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 15px;
  width: 100%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.whatsapp-button:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
}

.image-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal-info {
  padding: 20px;
}

.modal-info h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.stat-card {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.stat-card h4 {
  color: #666;
  margin-bottom: 8px;
}

.stat-card p {
  font-size: 1.2rem;
  color: #007bff;
  font-weight: bold;
}

@media (max-width: 768px) {
  .title h2 {
    font-size: 2rem;
  }
  
  .filter-buttons {
    flex-wrap: wrap;
  }
  
  .influencer-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    padding: 10px;
  }
  
  .modal-content {
    width: 95%;
  }
  
  .modal-image {
    height: 300px;
  }
}

.no-data {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.2rem;
  grid-column: 1 / -1;
}
`;

const MainInfluencer = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  useEffect(() => {
    fetchInfluencers();
  }, []);

  const fetchInfluencers = async () => {
    try {
      const response = await fetch('https://twinklemediahub.com/twinkleadmin/reactapi/fetch_influencers.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      const influencersArray = result.data || [];
      setInfluencers(influencersArray);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch influencers');
      setLoading(false);
      console.error('Error fetching influencers:', error);
    }
  };

  const getFilteredInfluencers = () => {
    if (!Array.isArray(influencers)) return [];
    return influencers.filter(influencer => {
      if (activeFilter === 'all') return true;
      return influencer.gender && influencer.gender.toLowerCase() === activeFilter;
    });
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
    e.target.onerror = null;
  };

  const getImageUrl = (imagePath) => {
    const cleanPath = imagePath.replace('uploads/infuencer/', '');
    return `https://twinklemediahub.com/twinkleadmin/sidenavabar/uploads/infuencer/${cleanPath}`;
  };

  const openModal = (influencer) => {
    setSelectedInfluencer(influencer);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedInfluencer(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) {
    return <div className="influencer-container">Loading...</div>;
  }

  if (error) {
    return <div className="influencer-container">{error}</div>;
  }

  const filteredInfluencers = getFilteredInfluencers();

  return (
    <>
      <style>{styles}</style>
      <div className="influencer-container">
        <div className="title">
          <h2>Our Models</h2>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'male' ? 'active' : ''}`}
            onClick={() => setActiveFilter('male')}
          >
            Male
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'female' ? 'active' : ''}`}
            onClick={() => setActiveFilter('female')}
          >
            Female
          </button>
        </div>

        <div className="influencer-grid">
          {filteredInfluencers.length > 0 ? (
            filteredInfluencers.map((influencer, index) => (
              <div key={index} className="influencer-card" onClick={() => openModal(influencer)}>
                <img 
                  src={getImageUrl(influencer.image_path)}
                  alt={`Model ${influencer.category || ''}`}
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="influencer-info">
                  <p><strong>Category:</strong> {influencer.category}</p>
                  <p>
                    <Instagram size={18} />
                    {influencer.insta_followers} followers
                  </p>
                  <p>
                    <Youtube size={18} />
                    {influencer.youtube_subs} subscribers
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">No influencers found</div>
          )}
        </div>

        {selectedInfluencer && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              <div className="modal-body">
                <div className="image-container">
                  <img 
                    src={getImageUrl(selectedInfluencer.image_path)}
                    alt={`Model ${selectedInfluencer.category}`}
                    className="modal-image"
                    onError={handleImageError}
                  />
                  <a 
                    href={`https://wa.me/+919999999999?text=Hi, I'm interested in working with ${selectedInfluencer.category} model`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    <Phone size={20} />
                    Contact on WhatsApp
                  </a>
                </div>
                <div className="modal-info">
                  <h3>Model Details</h3>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <h4>Category</h4>
                      <p>{selectedInfluencer.category}</p>
                    </div>
                    <div className="stat-card">
                      <h4>Instagram Followers</h4>
                      <p>{selectedInfluencer.insta_followers}</p>
                    </div>
                    <div className="stat-card">
                      <h4>Instagram Views</h4>
                      <p>{selectedInfluencer.insta_avg_views}</p>
                    </div>
                    <div className="stat-card">
                      <h4>YouTube Subscribers</h4>
                      <p>{selectedInfluencer.youtube_subs}</p>
                    </div>
                    <div className="stat-card">
                      <h4>YouTube Views</h4>
                      <p>{selectedInfluencer.youtube_avg_views}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainInfluencer;