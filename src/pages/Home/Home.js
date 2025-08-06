import React from 'react'
import './Home.css'

import video from '../../image/Twinkle Media Hub Website Home Page Video.mp4'
export default function Home() {
  return (



 <div className="slide home">

    
   <video src={video} muted autoPlay loop height="100%" width="100%" className='mainvideo'></video>
   <video src='asset/videos/tmh-mobile.mp4' muted autoPlay loop height="100%" width="100%" className='mainvideo-mobile'></video>

   

</div> 


  )
}
