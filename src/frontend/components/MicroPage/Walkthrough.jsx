import React, { useState } from "react";
import CustomCard from "../Card";
import { Button, Container } from "react-bootstrap";
import CustomModal from "../../../common/Modal";
import * as CONFIG from "../../../config/config";

const Walkthrough = ({data})=>{
  const {src, title, desc } = data;
  
  const [videoSrc, setVideoSrc] = useState(src);

  const handleRefresh = () => {
    setVideoSrc(""); // Temporarily remove the src
    setTimeout(() => {
      setVideoSrc(src); // Set the original src to reload the video
    }, 100); // Wait for a short time before setting the src again
  };

  return(
    <section className="section walkthrough_section new_height">
    {/* <iframe
        src="https://www.youtube.com/embed/PhkCdCg9k4k?autoplay=1&loop=1&playlist=PhkCdCg9k4k&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
       // Adjust size as needed
      ></iframe> */}
      <div className="Walkthrough_video">
        
     {src &&  <iframe 
        src={videoSrc} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
        width="560" 
        height="315">
      </iframe>}
 

      <button onClick={handleRefresh} className="Close_video">
        <img src={`${CONFIG.IMAGE_URL}icons/close.png`} alt="close icon" />
        <span>Close</span>
      </button>
      </div>
   
      <Container>
        <div className='about'>
          <CustomCard
          className="px-0"
            title={title || ' '} 
            desc={desc || ' '} 
            // extraTxt="Exclusive entrance and exit for the residents."
          />
        </div>

        
      </Container>
    </section>
    
  )
}

export default Walkthrough