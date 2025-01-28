import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Slider = ({ slides }) => {
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
                  <div
                    className={`carousel-item ${
                      index === index ? "active" : ""
                    }`}
                  >
                    <div className="carousel-item_in">
                      <img
                        // data-speed="clamp(0.9)"
                        src={slide.src}
                        alt={`Slide ${index + 1}`}
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
      {/* <div id="carousel" className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="carousel-item_in">
              <img 
                data-speed="clamp(0.9)"
                src={slide.image}
                alt={`Slide ${index + 1}`}
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
        ))}
      </div>

      <div className="arrowContainer">
        <button className="carousel-control-prev" onClick={handlePrev}>
          <div className="arrow-box">
            <img src="/public/assets/bangalore/images/icon/long-arrow-r.png" alt="Previous" />
          </div>
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          <div className="arrow-box">
            <img src="/public/assets/bangalore/images/icon/long-arrow-l.png" alt="Next" />
          </div>
        </button>
      </div>
    </div> */}
    </>
  );
};

export default Slider;
