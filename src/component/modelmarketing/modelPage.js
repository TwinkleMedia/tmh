import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
const ModelPage = () => {
  const [filter, setFilter] = useState('all');
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const response = await fetch('https://twinklemediahub.com/twinkleadmin/reactapi/fetch_model_details.php');
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      
      if (result.status === "success") {
        setModels(result.data);
      } else {
        throw new Error('Data fetch was not successful');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredModels = models.filter(model => {
    if (filter === 'all') return true;
    return model.gender.toLowerCase() === filter.toLowerCase();
  });

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedModel) {
      setCurrentImageIndex((prev) => 
        prev === selectedModel.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedModel) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedModel.images.length - 1 : prev - 1
      );
    }
  };

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#1C5ABC',
      fontSize: '3vw',
      textTransform: 'uppercase',
      fontFamily: '"Anta", sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem',
    },
    filterButton: {
      padding: '0.5rem 1.5rem',
      border: '1px solid #ccc',
      borderRadius: '20px',
      background: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeFilter: {
      background: 'white',
      color: 'blue',
      borderColor: '#000',
    },
    modelGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '1rem',
    },
    modelCard: {
      border: '1px solid #eee',
      borderRadius: '8px',
      overflow: 'hidden',
      aspectRatio: '1',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'scale(1.02)',
      },
    },
    modelImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain', // Ensures the full image is visible
      backgroundColor: '#f5f5f5',
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '15px',
      width: '95%',
      maxWidth: '700px',
      maxHeight: '95vh',
      overflow: 'auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '2rem',
    },
    closeButton: {
      position: 'absolute',
      right: '20px',
      top: '20px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#333',
    },
    imageGallery: {
      position: 'relative',
      width: '100%',
      maxHeight: '80vh',
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    galleryImage: {
      maxWidth: '100%',
      maxHeight: '70vh',
      objectFit: 'contain',
      display: 'block',
      margin: 'auto',
    },
    navigationButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.8)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '20px',
    },
    prevButton: {
      left: '20px',
    },
    nextButton: {
      right: '20px',
    },
    modelDetails: {
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
    },
    modelInfo: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px 0',
    },
    infoItem: {
      textAlign: 'center',
    },
    infoLabel: {
      color: '#666',
      marginBottom: '5px',
      fontSize: '14px',
    },
    infoValue: {
      color: '#1C5ABC',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    thumbnailContainer: {
      display: 'flex',
      gap: '10px',
      overflowX: 'auto',
      padding: '10px 0',
    },
    thumbnail: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '5px',
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity 0.3s ease',
    },
    activeThumbnail: {
      opacity: 1,
      border: '2px solid #1C5ABC',},
    //   Whatsapp CSS
    whatsappButton: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        gap: '10px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '25px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        margin: '20px auto',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 10px rgba(37, 211, 102, 0.3)',
        maxWidth: '250px',
        width: '100%',
      },
      whatsappIcon: {
        display: 'flex',
        alignItems: 'center',
      },
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Models</h1>
      
      <div style={styles.filterContainer}>
        {['all', 'male', 'female'].map((filterType) => (
          <button 
            key={filterType}
            style={{
              ...styles.filterButton,
              ...(filter === filterType ? styles.activeFilter : {})
            }}
            onClick={() => setFilter(filterType)}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.modelGrid}>
        {filteredModels.map((model) => (
          <div 
            key={model.id} 
            style={styles.modelCard}
            onClick={() => handleModelClick(model)}
          >
            <img
              src={`https://twinklemediahub.com/twinkleadmin/sidenavabar/${model.images[0]}`}
              alt={`Model ${model.id}`}
              style={styles.modelImage}
            />
          </div>
        ))}
      </div>

      {selectedModel && (
        <div style={styles.modalOverlay} onClick={() => setSelectedModel(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeButton}
              onClick={() => setSelectedModel(null)}
            >
              ×
            </button>

            <div style={styles.imageGallery}>
              <img
                src={`https://twinklemediahub.com/twinkleadmin//sidenavabar/${selectedModel.images[currentImageIndex]}`}
                alt={`Model ${selectedModel.id}`}
                style={styles.galleryImage}
              />
              <button
                style={{...styles.navigationButton, ...styles.prevButton}}
                onClick={handlePrevImage}
              >
                ‹
              </button>
              <button
                style={{...styles.navigationButton, ...styles.nextButton}}
                onClick={handleNextImage}
              >
                ›
              </button>
            </div>

            <div style={styles.modelDetails}>
              <div style={styles.modelInfo}>
                <div style={styles.infoItem}>
                  <div style={styles.infoLabel}>Gender</div>
                  <div style={styles.infoValue}>{selectedModel.gender}</div>
                </div>
                
              </div>
             

              <div style={styles.thumbnailContainer}>
                {selectedModel.images.map((image, index) => (
                  <img
                    key={index}
                    src={`https://twinklemediahub.com/twinkleadmin/sidenavabar/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      ...styles.thumbnail,
                      ...(index === currentImageIndex ? styles.activeThumbnail : {})
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <button 
                style={styles.whatsappButton}
                onClick={() => window.open(`https://wa.me/+919999999999?text=Hi, I'm interested in booking Model ID: ${selectedModel.id}`, '_blank')}
              >
                <span style={styles.whatsappIcon}>
                  <MessageCircle size={20} />
                </span>
                Contact Us on WhatsApp
              </button> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelPage;