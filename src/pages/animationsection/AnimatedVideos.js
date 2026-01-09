import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../../component/Heading/Heading";
import "./AnimatedVideos.css";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2 } from "lucide-react";
export default function AnimatedVideos() {
  // const [videos, setVideos] = useState([]);
  // const [playingVideo, setPlayingVideo] = useState(null);
  // const [showAll, setShowAll] = useState(false);

  // // useEffect(() => {
  // //   // Add category parameter to the fetch URL
  // //   const category = "Animation Video";
  // //   const encodedCategory = encodeURIComponent(category);

  // //   fetch(`https://twinklemediahub.com/admin/sidenavabar/get_videos.php?category=${encodedCategory}`)
  // //     .then((res) => res.json())
  // //     .then((data) => {
  // //       if (data.error) {
  // //         console.error("Backend error:", data.error);
  // //       } else {
  // //         setVideos(data);
  // //       }
  // //     })
  // //     .catch((err) => {
  // //       console.error("Error fetching videos:", err);
  // //     });
  // // }, []);
  // const videoData = [
  //   {
  //     id: 1,
  //     thumbnail: "/asset/animateVideos/thumbnail1.png",
  //     videoUrl: "/asset/animateVideos/animatedVideo1.mp4",
  //   }
  // ]
  // useEffect(() => {
  //   // Simulate fetching data from an API
  //   setVideos(videoData);
  // }, []);
  // const handlePlay = (id) => {
  //   setPlayingVideo(id);
  // };

  // const handleViewMore = () => {
  //   setShowAll(!showAll);
  // };


  // Determine which videos to display
  // const videosToShow = showAll ? videos : videos.slice(0, 3);

  // return (
  //   <div className="portfolio pt-5" id="animated-videos">
  //     <div className="container">
  //       <Heading headingLabel={"Animation Videos"} />

  //       <div className="video-gallery py-5">
  //         {videosToShow.length > 0 ? (
  //           videosToShow.map((vid) => (
  //             <div className="video-card" key={vid.id}>
  //               {playingVideo === vid.id ? (
  //                 <video width="100%" height="auto" controls autoPlay playsInline muted>
  //                   <source src={vid.videoUrl} type="video/mp4" />
  //                   Your browser does not support the video tag.
  //                 </video>
  //               ) : (
  //                 <>
  //                   <img src={vid.thumbnail} alt={`Animation Video ${vid.id}`} />
  //                   <div
  //                     className="hover-overlay"
  //                     onClick={() => handlePlay(vid.id)}
  //                   >
  //                     <span className="play-icon">▶</span>
  //                   </div>
  //                 </>
  //               )}
  //             </div>
  //           ))
  //         ) : (
  //           <p>Loading animation videos...</p>
  //         )}
  //       </div>

  //       {/* View More/Less Buttons - Only show if there are more than 3 videos */}
  //       {videos.length > 3 && (
  //         <div className="d-flex buttons justify-content-end">
  //           <div className="loadMore m-2">
  //             {!showAll && (
  //               <button className="Btn" onClick={handleViewMore}>
  //                 <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
  //                   <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
  //                 </svg>
  //                 <p className="text">View More</p>
  //               </button>
  //             )}
  //           </div>
  //           <div className="loadLess m-2">
  //             {showAll && (
  //               <button className="Btn" onClick={handleViewMore}>
  //                 <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
  //                   <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
  //                 </svg>
  //                 <p className="text">View Less</p>
  //               </button>
  //             )}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  const staticVideos = [
    {
      id: 1,
      url: "/asset/animateVideos/video2.mp4",
      title: "/asset/animateVideos/Animated Video 1",
      thumbnailUrl: "yc.png",
      created_at: "2023-10-01"
    },
    {
      id: 2,
      url: "/asset/animateVideos/video3.mp4",
      title: "Animated Video 2",
      thumbnailUrl: "/asset/animateVideos/skyline.png",
      created_at: "2023-10-01"
    },
    {
      id: 3,
      url: "/asset/animateVideos/video4.mp4",
      title: "Animated Video 3",
      thumbnailUrl: "/asset/animateVideos/yc.png",
      created_at: "2023-10-01"
    },
    {
      id: 4,
      url: "/asset/animateVideos/video5.mp4",
      title: "Animated Video 4",
      thumbnailUrl: "/asset/animateVideos/divyam.png",
      created_at: "2023-10-01"
    },
    {
      id: 5,
      url: "/asset/animateVideos/video6.mp4",
      title: "Animated Video 5",
      thumbnailUrl: "/asset/animateVideos/brewPeaks.png",
      created_at: "2023-10-01"
    },
    {
      id: 6,
      url: "/asset/animateVideos/video7.mp4",
      title: "Animated Video 5",
      thumbnailUrl: "/asset/animateVideos/chintamani.png",
      created_at: "2023-10-01"
    },
  ]
  const [animatesData, setanimatesData] = useState(staticVideos);
  const [startIndex, setStartIndex] = useState(0);
  const [videosToShow, setVideosToShow] = useState(4); // default for desktop

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



  // Auto-slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (animatesData.length > 0) {
  //       setStartIndex((prevIndex) => (prevIndex + 1) % animatesData.length);
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [animatesData]);

  // const handleNext = () => {
  //   if (animatesData.length === 0) return;
  //   setStartIndex((prevIndex) => (prevIndex + 1) % animatesData.length);
  // };

  // const handlePrev = () => {
  //   if (animatesData.length === 0) return;
  //   setStartIndex(
  //     (prevIndex) => (prevIndex - 1 + animatesData.length) % animatesData.length
  //   );
  // };

  // Get visible animates with infinite loop
  const visiblevideos = [];
  const count = Math.min(videosToShow, animatesData.length);

  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % animatesData.length;
    visiblevideos.push(animatesData[index]);
  }
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % animatesData.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + animatesData.length) % animatesData.length);
  };
  return (<div className="animate-container" aria-label="Animated Videos by Twinkle Media Hub">
    {/* SEO JSON-LD Schema */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Animated Videos",
        "description": "Collection of professional animated videos by Twinkle Media Hub, Navi Mumbai.",
        "itemListElement": animatesData.map((video, index) => ({
          "@type": "VideoObject",
          "position": index + 1,
          "name": video.title,
          "uploadDate": video.created_at,
          "contentUrl": video.url,
          "description": `Animated visual content titled ${video.title} by Twinkle Media Hub.`,
          "thumbnailUrl": "/asset/animateVideos/thumbnail.jpg"
        }))
      })}
    </script>
    <h2 className="visually-hidden">Animated Videos</h2>
    <Heading headingLabel="Animated videos" />
    <p className="section-description">
      Discover our high-quality animated promotional videos designed for brand storytelling,
      digital marketing, and creative visual communication.
    </p>
    <div className="animate-slider">
      <button className="prev-btn" onClick={handlePrev} aria-label="Previous animated video">
        <ChevronLeft />
      </button>

      <div className="animatevideo-grid">
        {visiblevideos.map((video) => (
          <article
            key={video.id}
            className="video-container"
            aria-label={`Animated video: ${video.title}`}
            style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
          >
            <video
              src={video.url}
              title={video.title}
              poster={video.thumbnailUrl}
              muted
              loop
              playsInline
              onClick={(e) => e.currentTarget.play()}
              preload="metadata"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />

            <div className="visually-hidden" style={{ paddingTop: "8px", textAlign: "center" }}>
              <strong>{video.title}</strong>
              <div style={{ fontSize: "14px", color: "#666" }}>
                Uploaded: {new Date(video.created_at).toLocaleDateString()}
              </div>
            </div>
          </article>
        ))}
      </div>


      <button className="next-btn" onClick={handleNext} aria-label="Next animated video">
        <ChevronRight />
      </button>
    </div>
  </div>)
}
