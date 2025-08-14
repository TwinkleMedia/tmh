import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../../component/Heading/Heading";
import "./Our_work.css";

export default function Our_work() {
  const [videos, setVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    fetch("http://localhost/tmhadmin/sidenavabar/get_videos.php")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      });
  }, []);

  const handlePlay = (id) => {
    setPlayingVideo(id);
  };

  return (
    <div className="portfolio pt-5" id="work">
      <Heading headingLabel={"Story Frame Productions"} />

      <div className="video-gallery py-5">
        {videos.length > 0 ? (
          videos.map((vid) => (
            <div className="video-card" key={vid.id}>
              {playingVideo === vid.id ? (
                <video width="100%" height="auto" controls autoPlay playsInline>
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
          ))
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
}
