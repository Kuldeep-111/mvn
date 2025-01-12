import React, { useState } from "react";
import CustomCard from "../Card";
import { Button, Container } from "react-bootstrap";
import CustomModal from "../../../common/Modal";

const Walkthrough = ({data})=>{
  const {src, title, desc } = data;
  

  return(
    <section className="section walkthrough_section">
    {/* <iframe
        src="https://www.youtube.com/embed/PhkCdCg9k4k?autoplay=1&loop=1&playlist=PhkCdCg9k4k&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
       // Adjust size as needed
      ></iframe> */}
     {src && <iframe src={src} title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen width="100" height="100"></iframe>}
      
   
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