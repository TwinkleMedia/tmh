import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../../component/Heading/Heading";
import "./Our_work.css";

const videos = [
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/dh9dpvul4/image/upload/v1754724339/WhatsApp_Image_2025-07-22_at_15.43.54_96afbb06_dptpkt.jpg",
    videoUrl:
      "https://res.cloudinary.com/dh9dpvul4/video/upload/v1754724184/VID-20250715-WA0040_2_xzi7n0.mp4",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/dh9dpvul4/image/upload/v1754724339/WhatsApp_Image_2025-07-22_at_15.43.54_96afbb06_dptpkt.jpg",
    videoUrl:
      "https://res.cloudinary.com/dh9dpvul4/video/upload/v1754724184/VID-20250715-WA0040_2_xzi7n0.mp4",
  },
  {
    id: 3,
    thumbnail:
      "https://res.cloudinary.com/dh9dpvul4/image/upload/v1754724339/WhatsApp_Image_2025-07-22_at_15.43.54_96afbb06_dptpkt.jpg",
    videoUrl:
      "https://res.cloudinary.com/dh9dpvul4/video/upload/v1754724184/VID-20250715-WA0040_2_xzi7n0.mp4",
  },
];

export default function Our_work() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (id) => {
    setPlayingVideo(id); // play clicked video
  };

  return (
    <div className="portfolio pt-5" id="work">
      {/* Heading */}
      <Heading headingLabel={"Work"} />

      {/* Video Gallery */}
      <div className="video-gallery">
        {videos.map((vid) => (
          <div className="video-card" key={vid.id}>
            {playingVideo === vid.id ? (
              <video
                width="100%"
                height="auto"
                controls
                autoPlay
                playsInline
              >
                <source src={vid.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <img src={vid.thumbnail} alt={`Video ${vid.id}`} />
                <div
                  className="hover-overlay"
                  onClick={() => handlePlay(vid.id)}
                >
                  <span className="play-icon">▶</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
