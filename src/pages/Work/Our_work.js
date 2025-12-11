import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../../component/Heading/Heading";
import "./Our_work.css";
import { use } from "react";

export default function Our_work() {
  useEffect(() => {
    const iframes = document.querySelectorAll('.Frameyt-video');
    iframes.forEach(iframe => {
      const baseSrc = iframe.getAttribute('data-src');
      iframe.addEventListener('mouseenter', () => {
        iframe.src = baseSrc + '&autoplay=1&mute=1';
      })
      iframe.addEventListener('mouseleave', () => {
        iframe.src = baseSrc;
      })
    });
    return () => {
      iframes.forEach(iframe => {
        iframe.src = "";
      });
    };
  }, []);
  // const [videos, setVideos] = useState([]);
  // const [playingVideo, setPlayingVideo] = useState(null);
  // const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   // Add category parameter to the fetch URL
  //   const category = "Story Frame Productions";
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
    // <div className="portfolio pt-5" id="work">
    //   <div className="container">
    //     <Heading headingLabel={"Story Frame Productions"} />

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
    <>
      {/* JSON-LD SCHEMA HERE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "VideoObject",
                name: "Career Guidance Podcast",
                embedUrl: "https://www.youtube.com/embed/7L4URcpvDW8",
              },
              {
                "@type": "VideoObject",
                name: "CIDCO Scam Exposed Podcast",
                embedUrl: "https://www.youtube.com/embed/xVsq1BoO4Fo",
              },
              {
                "@type": "VideoObject",
                name: "Navi Mumbai Airport Discussion",
                embedUrl: "https://www.youtube.com/embed/NOoeBeSUbIw",
              },
            ],
          }),
        }}
      ></script>

      <div className="portfolio p-5" id="work">
        <div className="container">
          <Heading headingLabel={"Story Frame Productions"} />
          <p className="section-description">
            Explore our commercial ads, brand films, corporate videos, and digital campaigns crafted by Twinkle Media Hub — Navi Mumbai’s leading digital marketing and media production agency.
          </p>
          <div className="Framevideo-wrapper">
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7L4URcpvDW8?mute=1"
              data-src="https://www.youtube.com/embed/7L4URcpvDW8?si=mKSRWDhq66syZHZ3"
              title="Career Guidance Podcast By Twinkle Media Hub"
              aria-label="Career Guidance Podcast by Twinkle Media Hub"
              className="Frameyt-video"
            ></iframe>

            <iframe
              loading="ladzy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xVsq1BoO4Fo?mute=1"
              data-src="https://www.youtube.com/embed/xVsq1BoO4Fo?si=NIfeQbL9nR-FKNuS"
              title="Cidco Scam Exposed Podcast by Twinkle Media Hub"
              aria-label="Cidco Scam Exposed Podcast by Twinkle Media Hub"
              className="Frameyt-video"
            ></iframe>

            {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DgPExhHCKCc?mute=1"
            data-src="https://www.youtube.com/embed/DgPExhHCKCc?si=vhR-R7nxs8zR73yM"
            className="Frameyt-video"
          ></iframe> */}

            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NOoeBeSUbIw?mute=1"
              data-src="https://www.youtube.com/embed/NOoeBeSUbIw?si=xkIlLvV3LIEVUFhR"
              className="Frameyt-video"
              title="Discussion on Navi Mumbai's International Airport Podcast By Twinkle Media Hub"
              aria-label="Discussion on Navi Mumbai's International Airport Podcast By Twinkle Media Hub"
            ></iframe>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AaEbEe-HHEU?si=Ga4Hp-qEO064nCnJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="ytVideos"></iframe> */}
          </div>

        </div>
      </div>
    </>
  );
}