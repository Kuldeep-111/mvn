import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Slider = ({slides}) => {
  const [index, setIndex] = useState(-1);
  const [lightboxImage, setLightboxImage] = useState(null);
  return (
    <>
    <Swiper
  spaceBetween={50} // space between slides
  slidesPerView={1} // number of slides visible at a time
  loop={true} // loop through slides
//   autoplay={{delay:2000, disableOnInteraction:true}}
  pagination={{ clickable: true }} // pagination
  navigation={true} // enable navigation buttons
  modules={[Autoplay, Navigation]} // Import necessary modules
>
  {slides.length === 0 ? (
    <div>Loading...</div> // Show loading until slides are available
  ) : (
    slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div id="carousel" className="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${index === index ? "active" : ""}`}>
              <div className="carousel-item_in">
                <img
                  data-speed="clamp(0.9)"
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setLightboxImage(slide.src)}
                />
                <div className="carousel-caption">
                  <h1 className="main-title">{slide.title}</h1>
                  <span>Area: {slide.area}</span>
                  <div className="link">
                    <a href={slide.link}>View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))
  )}
</Swiper>
<Lightbox
  slides={lightboxImage ? [{ src: lightboxImage }] : []} // Show only the clicked image
  open={!!lightboxImage} // Open Lightbox when an image is clicked
  close={() => setLightboxImage(null)} // Close Lightbox
  plugins={[Fullscreen, Zoom]} // Add Fullscreen and Zoom plugins
  carousel={{
    finite: true, // Prevent infinite looping of navigation
    buttons: false, // Completely disable navigation buttons
    swipe: false,   // Disable swipe gestures
    keyboard: false, // Disable keyboard navigation
  }}
/>
    </>
  );
};

export default Slider;
