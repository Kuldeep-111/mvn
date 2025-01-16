import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules'; 
import './LocationSlider.css'
import { Container } from 'react-bootstrap';
import * as CONFIG from "../../../../config/config";




const BangaloreLocationSlider = ({data}) => {
  // Static array with 50 objects containing title and desc
   const sliderItems = data.sliderItems;
   const chunks = data.chunks;

  // Function to chunk the array into groups of 5
  const chunkedItems = [];
  for (let i = 0; i < sliderItems.length; i += chunks) {
    chunkedItems.push(sliderItems.slice(i, i + chunks));
  }
  return (
    <Container>
    <div className="LocationSlider">
    <Swiper
      spaceBetween={20}
      loop={true}
      // navigation={true}
      // modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
       {chunkedItems.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className={`SliderContain ${chunks < 4 ? "fit_height" : ''}`}>
                {chunk.map((item, subIndex) => (
                  <div key={subIndex}>
                  <p className='Heading'>
                    <img src={`${CONFIG.IMAGE_URL_BANGALORE}icon/location.png`} alt="location img" className='LocationImg'/>
                    {item.title}
                  </p>
                  <p>{item.desc}</p>
                </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
    </div>
    </Container>
  );
};

export default BangaloreLocationSlider;


