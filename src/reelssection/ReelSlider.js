import React, { useState, useEffect } from "react";
import Heading from "../component/Heading/Heading";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2 } from "lucide-react";
import "./reelslider.css";

const ReelSlider = () => {
  const [reelsData, setReelsData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const videosToShow = 4;

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch(
          "https://twinklemediahub.com/admin/sidenavabar/fetch_reel.php"
        );
        const data = await response.json();
        console.log("Fetched Reels Data:", data);

        if (data.success && Array.isArray(data.reels)) {
          // Remove duplicates by video_url
          const uniqueReels = [
            ...new Map(data.reels.map((item) => [item.video_url, item])).values(),
          ];
          setReelsData(uniqueReels);
        } else {
          console.error("Invalid response:", data);
        }
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

  // Get visible reels with infinite loop
  const visibleReels = [];
  for (let i = 0; i < videosToShow; i++) {
    if (reelsData.length === 0) break;
    const index = (startIndex + i) % reelsData.length;
    visibleReels.push(reelsData[index]);
  }

  return (
    <div className="reel-container">
      <Heading headingLabel="Our Showcase Reels" />

      <div className="reel-slider">
        <button className="prev-btn" onClick={handlePrev}>
          <ChevronLeft />
        </button>

        <div className="video-grid">
          {visibleReels.map((reel, index) => {
            if (!reel || !reel.video_url) {
              console.error(`Invalid reel at index ${index}:`, reel);
              return null;
            }

            return (
              <div key={reel.id || index} className="video-container">
                <video
                  src={reel.video_url}
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
                    <div className="video-description">
                      Uploaded on: {new Date(reel.created_at).toLocaleDateString()}
                    </div>
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
              </div>
            );
          })}
        </div>

        <button className="next-btn" onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReelSlider;
