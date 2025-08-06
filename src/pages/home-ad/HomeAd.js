import React from 'react'
import video from '../../image/Twinkle Media Hub Website Home Page Video.mp4';
import Heading from '../../component/Heading/Heading';


export default function HomeAd() {
  return (
    <div className="slide home my-2">
      
      <Heading headingLabel="Commercial Ads" />
      <video
        src='/asset/videos/mirchillion-ad.mp4'
        muted
        autoPlay
        controls
        controlsList="nodownload"
        loop
        height="90%"
        width="100%"
        className="mainvideo adVid"
      ></video>
    </div>
  );
}
