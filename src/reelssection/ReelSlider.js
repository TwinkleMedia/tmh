import React, { useState, useEffect } from "react";
import Heading from "../component/Heading/Heading";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2 } from "lucide-react";
import "./reelslider.css";

const ReelSlider = () => {
  // const [reelsData, setReelsData] = useState([]);
  // const [startIndex, setStartIndex] = useState(0);
  // const [videosToShow, setVideosToShow] = useState(4); // default for desktop

  // // Handle responsive videosToShow
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setVideosToShow(1); // mobile view
  //     } else if (window.innerWidth < 1024) {
  //       setVideosToShow(2); // tablet view
  //     } else {
  //       setVideosToShow(4); // desktop view
  //     }
  //   };

  //   handleResize(); // initial call
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const fetchReels = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://twinklemediahub.com/admin/sidenavabar/fetch_reel.php"
  //       );
  //       const data = await response.json();
  //       console.log("Fetched Reels Data:", data);

  //       if (data.success && Array.isArray(data.reels)) {
  //         const uniqueReels = [
  //           ...new Map(data.reels.map((item) => [item.video_url, item])).values(),
  //         ];
  //         setReelsData(uniqueReels);
  //       } else {
  //         console.error("Invalid response:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching reels:", error);
  //     }
  //   };

  //   fetchReels();
  // }, []);

  // // Auto-slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (reelsData.length > 0) {
  //       setStartIndex((prevIndex) => (prevIndex + 1) % reelsData.length);
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [reelsData]);

  // const handleNext = () => {
  //   if (reelsData.length === 0) return;
  //   setStartIndex((prevIndex) => (prevIndex + 1) % reelsData.length);
  // };

  // const handlePrev = () => {
  //   if (reelsData.length === 0) return;
  //   setStartIndex(
  //     (prevIndex) => (prevIndex - 1 + reelsData.length) % reelsData.length
  //   );
  // };

  // // Get visible reels with infinite loop
  // const visibleReels = [];
  // const count = Math.min(videosToShow, reelsData.length); 

  // for (let i = 0; i < count; i++) {
  //   const index = (startIndex + i) % reelsData.length;
  //   visibleReels.push(reelsData[index]);
  // }
  const staticVideos = [
    { id: 1, url: "/asset/reels/showcase1.mp4", title: "ShowCase reel 1", created_at: "2023-10-01" },
    { id: 2, url: "/asset/reels/showcase2.mp4", title: "ShowCase reel 2", created_at: "2023-10-01" },
    { id: 3, url: "/asset/reels/showcase3.mp4", title: "ShowCase reel 3", created_at: "2023-10-01" },
    { id: 4, url: "/asset/reels/showcase4.mp4", title: "ShowCase reel 4", created_at: "2023-10-01" },
    { id: 5, url: "/asset/reels/showcase5.mp4", title: "ShowCase reel 5", created_at: "2023-10-01" },
    { id: 6, url: "/asset/reels/showcase6.mp4", title: "ShowCase reel 6", created_at: "2023-10-01" },
  ];
  const [reels] = useState(staticVideos);
  const [startIndex, setStartIndex] = useState(0);
  const [videosToShow, setVideosToShow] = useState(4); // default 3 videos

  // Handle responsive videosToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setVideosToShow(2);  // mobile small → 2 cards
      } else if (window.innerWidth < 768) {
        setVideosToShow(2);  // mobile → 2 cards
      } else if (window.innerWidth < 1024) {
        setVideosToShow(4);  // tablet → 2 cards
      } else {
        setVideosToShow(4);  // desktop → 4 cards
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (reels.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex + 1) % reels.length);
  };

  const handlePrev = () => {
    if (reels.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex - 1 + reels.length) % reels.length);
  };

  // Get visible reels
  const visibleReels = [];
  const count = Math.min(videosToShow, reels.length);

  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % reels.length;
    visibleReels.push(reels[index]);
  }

  return (
    <div className="reel-container">
      <Heading headingLabel="Our Showcase Reels" />

      <div className="reel-slider">
        <button className="prev-btn" onClick={handlePrev}>
          <ChevronLeft />
        </button>

        <div className="video-grid">
          {visibleReels.map((reel) => (
            <div key={reel.id} className="video-container">
              <video
                src={reel.url}
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
          ))}
        </div>

        <button className="next-btn" onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReelSlider;
