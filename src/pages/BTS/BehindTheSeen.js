import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../../component/Heading/Heading";
import "./BehindTheSeen.css";

export default function BehindTheSeen() {
  // const [videos, setVideos] = useState([]);
  // const [playingVideo, setPlayingVideo] = useState(null);
  // const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   // Add category parameter to the fetch URL
  //   const category = "Behind The Seen";
  //   const encodedCategory = encodeURIComponent(category);

  //   fetch(`https://twinklemediahub.com/admin/sidenavabar/get_videos.php?category=${encodedCategory}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.error) {
  //         console.error("Backend error:", data.error);
  //       } else {
  //         setVideos(data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching videos:", err);
  //     });
  // }, []);

  // const handlePlay = (id) => {
  //   setPlayingVideo(id);
  // };

  // const handleViewMore = () => {
  //   setShowAll(!showAll);
  // };

  // // Determine which videos to display
  // const videosToShow = showAll ? videos : videos.slice(0, 3);

  return (
    // <div className="portfolio pt-5" id="behind-the-seen">
    //   <div className="container">
    //     <Heading headingLabel={"Behind The Seen"} />

    //     <div className="video-gallery py-5">
    //       {videosToShow.length > 0 ? (
    //         videosToShow.map((vid) => (
    //           <div className="video-card" key={vid.id}>
    //             {playingVideo === vid.id ? (
    //               <video width="100%" height="auto" controls autoPlay playsInline>
    //                 <source src={vid.videoUrl} type="video/mp4" />
    //                 Your browser does not support the video tag.
    //               </video>
    //             ) : (
    //               <>
    //                 <img src={vid.thumbnail} alt={`Video ${vid.id}`} />
    //                 <div
    //                   className="hover-overlay"
    //                   onClick={() => handlePlay(vid.id)}
    //                 >
    //                   <span className="play-icon">▶</span>
    //                 </div>
    //               </>
    //             )}
    //           </div>
    //         ))
    //       ) : (
    //         <p>Loading videos...</p>
    //       )}
    //     </div>

    //     {/* View More/Less Buttons - Only show if there are more than 3 videos */}
    //     {videos.length > 3 && (
    //       <div className="d-flex buttons justify-content-end">
    //         <div className="loadMore m-2">
    //           {!showAll && (
    //             <button className="Btn" onClick={handleViewMore}>
    //               <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
    //                 <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
    //               </svg>
    //               <p className="text">View More</p>
    //             </button>
    //           )}
    //         </div>
    //         <div className="loadLess m-2">
    //           {showAll && (
    //             <button className="Btn" onClick={handleViewMore}>
    //               <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
    //                 <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
    //               </svg>
    //               <p className="text">View Less</p>
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="portfolio pt-5" id="behind-the-seen">
      <div className="container">

        {/* Section Title */}
        <Heading headingLabel="Behind The Seen" />

        <div className="video-wrapper">
          <iframe
            className="yt-video"
            src="https://www.youtube.com/embed/T9fS2CghQFY?autoplay=1&mute=1&loop=1&playlist=T9fS2CghQFY&controls=1&rel=0&modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="side-thumbnails">
            <div className="Bts-right">
              <div className="image-column col-1">
                <div className="scroll-track top-bottom">
                  {Array(2).fill(0).map((_, i) => (
                    <>
                      <video key={`c1-img1-${i}`} src="./asset/bts/bts1.mp4" autoPlay muted playsInline preload="none"
                        loading="lazy" loop />
                      <video key={`c1-img2-${i}`} src="./asset/bts/bts2.mp4" autoPlay muted playsInline preload="none"
                        loading="lazy" loop />
                      <video key={`c1-img3-${i}`} src="./asset/bts/bts3.mp4" autoPlay muted playsInline preload="none"
                        loading="lazy" loop />
                      <video key={`c1-img4-${i}`} src="./asset/bts/bts4.mp4" autoPlay muted playsInline preload="none"
                        loading="lazy" loop />
                      <img key={`c1-img4-${i}`} src="./asset/bts/bts5.webp" />
                      <img key={`c1-img4-${i}`} src="./asset/bts/bts6.webp" />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}