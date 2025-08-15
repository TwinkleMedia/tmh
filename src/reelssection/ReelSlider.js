import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import "./reelslider.css"; // Import the CSS file

const ReelSlider = () => {
  const [reelsData, setReelsData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const videosToShow = 4;
  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch(
          "https://twinklemediahub.com/twinkleadmin/reactapi/fetch_reels.php"
        );
        const data = await response.json();
        console.log("Fetched Reels Data:", data); // Debug log
        const uniqueReels = [...new Map(data.map(item => [item.video_path, item])).values()]; // Remove duplicates
        setReelsData(uniqueReels);
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };
  
    fetchReels();
  }, []);
  

  const handleNext = () => {
    if (reelsData.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex + 1) % reelsData.length);
  };

  const handlePrev = () => {
    if (reelsData.length === 0) return;
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + reelsData.length) % reelsData.length
    );
  };

  const visibleReels = reelsData.filter(
    (reel, index, self) =>
      index === self.findIndex((r) => r.video_path === reel.video_path)
  );
  
  return (
    <div className="reel-container">
      <h2 className="section-title"> Our Showcase Reels</h2>

      <div className="reel-slider">
        <button className="prev-btn" onClick={handlePrev}>
          <ChevronLeft />
        </button>

        <button className="next-btn" onClick={handleNext}>
          <ChevronRight />
        </button>

        <div className="video-grid">
  {visibleReels.map((reel, index) => {
    if (!reel || !reel.video_path) {
      console.error(`Invalid reel at index ${index}:`, reel);
      return null; // Skip invalid entries
    }

    return (
      <div key={reel.id || index} className="video-container">
        <video
          src={`https://twinklemediahub.com/twinkleadmin/sidenavabar/${reel.video_path}`}
          controls
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }}
        />
        <div className="video-overlay">
          <div className="video-info">
            <div className="video-title">{reel.title}</div>
            <div className="video-description">Some description here</div>
          </div>
          <div className="video-controls">
            <button className="control-button">
              <Heart size={24} />
            </button>
            <button className="control-button">
              <MessageCircle size={24} />
            </button>
            <button className="control-button">
              <Share2 size={24} />
            </button>
          </div>
        </div>
        {reel.caption && <div className="video-caption">{reel.caption}</div>}
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default ReelSlider;
