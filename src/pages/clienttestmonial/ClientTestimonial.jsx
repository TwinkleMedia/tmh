import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2 } from "lucide-react";
import Heading from "../../component/Heading/Heading";
import "./clienttestimonial.css";
// const ClientTestimonial = () => {
//   // const [videosData, setVideosData] = useState([]);
//   // const [startIndex, setStartIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const staticVideos = [
//     { id: 1, url: "/asset/clientTestimonial/testimonial1.mp4", title: "ShowCase testimonials 1", created_at: "2023-10-01" },
//     { id: 2, url: "/asset/clientTestimonial/testimonial1.mp4", title: "ShowCase testimonials 2", created_at: "2023-10-01" },
//     { id: 3, url: "/asset/clientTestimonial/testimonial1.mp4", title: "ShowCase testimonials 3", created_at: "2023-10-01" },
//   ];
//   const [client] = useState(staticVideos)
//   const [startIndex, setStartIndex] = useState(0);
//   const [videosToShow, setVideosToShow] = useState(3); // default 3 videos
//   // useEffect(() => {
//   //   const fetchVideos = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const response = await fetch(
//   //         "https://twinklemediahub.com/admin/sidenavabar/getclienttestimonial.php"
//   //       );

//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! status: ${response.status}`);
//   //       }

//   //       const data = await response.json();
//   //       console.log("Fetched Client Testimonial Data:", data);

//   //       if (data.error) {
//   //         throw new Error(data.error);
//   //       }

//   //       // Remove duplicates based on video_url
//   //       const uniqueVideos = data.filter((video, index, self) =>
//   //         index === self.findIndex((v) => v.video_url === video.video_url)
//   //       );

//   //       setVideosData(uniqueVideos);
//   //       setError(null);
//   //     } catch (error) {
//   //       console.error("Error fetching testimonials:", error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchVideos();
//   // }, []);
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 480) {
//         setVideosToShow(2);  // mobile small → 2 cards
//       } else if (window.innerWidth < 768) {
//         setVideosToShow(2);  // mobile → 2 cards
//       } else if (window.innerWidth < 1024) {
//         setVideosToShow(4);  // tablet → 2 cards
//       } else {
//         setVideosToShow(4);  // desktop → 4 cards
//       }
//     };
//     handleResize(); // initial call
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const handleNext = () => {
//     if (client.length === 0) return;
//     setStartIndex((prevIndex) => (prevIndex + 1) % videosData.length);
//   };

//   const handlePrev = () => {
//     if (client.length === 0) return;
//     setStartIndex(
//       (prevIndex) => (prevIndex - 1 + videosData.length) % videosData.length
//     );
//   };

//   if (loading) {
//     return (
//       <div style={loadingStyles.container}>
//         <div style={loadingStyles.spinner}></div>
//         <p>Loading testimonials...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={errorStyles.container}>
//         <p>Error loading testimonials: {error}</p>
//         <button onClick={() => window.location.reload()}>Retry</button>
//       </div>
//     );
//   }

//   if (videosData.length === 0) {
//     return (
//       <div style={emptyStyles.container}>
//         <p>No testimonials available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="testimonial-container">
//       <style>
//         {`
//           /* ClientTestimonial.css */
//           .testimonial-container {
//             text-align: center;
//             margin: 60px auto;
//             max-width: 1200px;
//             padding: 0 20px;
//             // background-color: #000000ff;
//           }

//           .section-title {
//             font-size: 3vw;
//             font-weight: 400;
//             font-weight: bold;
//             color: #ffffffff;
//             text-align: center;
//             position: relative;
//             display: inline-block;
//             text-transform: uppercase;
//             font-family: "Anta", sans-serif;
//             margin-bottom: 20px;
//           }

//           .section-title::after {
//             content: '';
//             width: 250px;
//             height: 4px;
//             background-color: #FFA500;
//             position: absolute;
//             bottom: -10px;
//             left: 50%;
//             transform: translateX(-50%);
//           }

//           .testimonial-slider {
//             position: relative;
//             overflow: hidden;
//             padding: 20px 0;
//           }

//           .prev-btn, .next-btn {
//             background-color: rgba(255, 255, 255, 0.15);
//             color: #fff;
//             border: none;
//             font-size: 1.5rem;
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             cursor: pointer;
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             z-index: 10;
//             transition: background-color 0.3s ease;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }

//           .prev-btn:hover, .next-btn:hover {
//             background-color: rgba(255, 255, 255, 0.25);
//           }

//           .prev-btn {
//             left: 10px;
//           }

//           .next-btn {
//             right: 10px;
//           }

//           .video-grid {
//             display: grid;
//             grid-template-columns: repeat(4, 1fr);
//             gap: 8px;
//             padding: 0 4px;
//           }

//           .video-container {
//             position: relative;
//             aspect-ratio: 9/16;
//             background: #000;
//             border-radius: 8px;
//             overflow: hidden;
//             cursor: pointer;
//           }

//           .video-container video {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }

//           .video-overlay {
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             padding: 20px 10px;
//             background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
//             color: #fff;
//             opacity: 0;
//             transition: opacity 0.3s ease;
//           }

//           .video-container:hover .video-overlay {
//             opacity: 1;
//           }

//           .video-info {
//             position: absolute;
//             bottom: 16px;
//             left: 16px;
//             z-index: 2;
//             color: white;
//             text-align: left;
//           }

//           .video-title {
//             font-size: 0.9rem;
//             margin-bottom: 4px;
//             font-weight: 500;
//           }

//           .video-description {
//             font-size: 0.8rem;
//             opacity: 0.8;
//           }

//           .video-controls {
//             position: absolute;
//             right: 12px;
//             bottom: 12px;
//             display: flex;
//             flex-direction: column;
//             gap: 16px;
//             z-index: 2;
//           }

//           .control-button {
//             background: none;
//             border: none;
//             color: white;
//             cursor: pointer;
//             width: 40px;
//             height: 40px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             opacity: 0.9;
//             transition: opacity 0.3s ease;
//           }

//           .control-button:hover {
//             opacity: 1;
//           }

//           .video-caption {
//             position: absolute;
//             bottom: 16px;
//             left: 16px;
//             right: 16px;
//             color: white;
//             text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
//             font-size: 0.9rem;
//             text-align: left;
//           }

//           @media (max-width: 1024px) {
//             .video-grid {
//               grid-template-columns: repeat(3, 1fr);
//             }
//           }

//           @media (max-width: 768px) {
//             .video-grid {
//               grid-template-columns: repeat(2, 1fr);
//             }

//             .section-title {
//               font-size: 2rem;
//             }
//           }

//           @media (max-width: 480px) {
//             .video-grid {
//               grid-template-columns: 1fr;
//             }

//             .prev-btn, .next-btn {
//               width: 32px;
//               height: 32px;
//               font-size: 1.2rem;
//             }
//           }
//         `}
//       </style>

//       <Heading headingLabel="Client Testimonials" />

//       {/* <div className="testimonial-slider">
//         <button className="prev-btn" onClick={handlePrev}>
//           <ChevronLeft />
//         </button>

//         <button className="next-btn" onClick={handleNext}>
//           <ChevronRight />
//         </button>

//         <div className="video-grid">
//           {videosData.map((video, index) => {
//             if (!video || !video.video_url) {
//               console.error(`Invalid video at index ${index}:`, video);
//               return null;
//             }

//             return (
//               <div key={video.id || index} className="video-container">
//                 <video
//                   src={`${video.video_url}?f_auto&q_auto`}
//                   controls
//                   loop
//                   muted
//                   playsInline
//                   onError={(e) => console.error('Video error:', e)}
//                 />

//                 <div className="video-overlay">
//                   <div className="video-info">
//                     <div className="video-title">{video.title || 'Client Testimonial'}</div>
//                     <div className="video-description">
//                       {video.uploaded_at 
//                         ? `Uploaded: ${new Date(video.uploaded_at).toLocaleDateString()}`
//                         : 'Client feedback and testimonial'
//                       }
//                     </div>
//                   </div>
//                   <div className="video-controls">
//                     <button className="control-button" title="Like">
//                       <Heart size={24} />
//                     </button>
//                     <button className="control-button" title="Comment">
//                       <MessageCircle size={24} />
//                     </button>
//                     <button className="control-button" title="Share">
//                       <Share2 size={24} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div> */}
//     </div>
//   );
// };

// // Styles for loading, error, and empty states
// const loadingStyles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '300px',
//     color: '#1C5ABC',
//   },
//   spinner: {
//     width: '40px',
//     height: '40px',
//     border: '4px solid #f3f3f3',
//     borderTop: '4px solid #1C5ABC',
//     borderRadius: '50%',
//     animation: 'spin 1s linear infinite',
//     marginBottom: '20px',
//   },
// };

// const errorStyles = {
//   container: {
//     textAlign: 'center',
//     color: '#e74c3c',
//     padding: '40px',
//   },
// };

// const emptyStyles = {
//   container: {
//     textAlign: 'center',
//     color: '#666',
//     padding: '40px',
//   },
// };

// // Add keyframes for spinner animation
// const styleSheet = document.createElement("style");
// styleSheet.innerText = `
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default ClientTestimonial;

const ClientTestimonial = () => {
  const staticVideos = [
    { id: 1, url: "/asset/clientTestimonial/testimonial1.mp4", title: "testimonial testimonials 1", created_at: "2023-10-01" },
    { id: 2, url: "/asset/clientTestimonial/testimonial2.mp4", title: "testimonial testimonials 2", created_at: "2023-10-01" },
    { id: 3, url: "/asset/clientTestimonial/testimonial3.mp4", title: "testimonial testimonials 3", created_at: "2023-10-01" },
  ];
  const [testimonials] = useState(staticVideos);
  const [startIndex, setStartIndex] = useState(0);
  const [videosToShow, setVideosToShow] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setVideosToShow(2);
      }
      else if (window.innerWidth < 768) {
        setVideosToShow(2);
      }
      else if (window.innerWidth < 1024) {
        setVideosToShow(3);
      }
      else {
        setVideosToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },
    [])
  const handleNext = () => {
    if (testimonials.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  const visibletestimonialss = [];
  const count = Math.min(videosToShow, testimonials.length);
  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % testimonials.length;
    visibletestimonialss.push(testimonials[index]);
  }
  return (<div className="testimonial-container"><Heading headingLabel="Client Testimonial" />
    <div className="testimonials-slider">
      {/* <button className="prev-btn" onClick={handlePrev}>
        <ChevronLeft />
      </button> */}

      <div className="Clientvideo-grid">
        {visibletestimonialss.map((testimonials) => (
          <div key={testimonials.id} className="Clientvideo-container">
            <video
              src={testimonials.url}
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="Clientvideo-overlay">
              <div className="Clientvideo-info">
                <div className="Clientvideo-title">{testimonials.title}</div>
                <div className="Clientvideo-description">
                  Uploaded on: {new Date(testimonials.created_at).toLocaleDateString()}
                </div>
              </div>
              <div className="Clientvideo-controls">
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

      {/* <button className="next-btn" onClick={handleNext}>
        <ChevronRight />
      </button> */}
    </div></div>)
}

export default ClientTestimonial;
