import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import './LocationSlider.css'
import { Container } from 'react-bootstrap';
import * as CONFIG from "../../../../config/config";



const chunkData = (data, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};
const BangaloreLocationSlider = ({ data }) => {
  
  const chunks = chunkData(data, 5);

  return (
    <Container>
    <div className="LocationSlider">
    <Swiper
      spaceBetween={20}
      loop={true}
      navigation={true}
      modules={[Navigation]}
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
      {chunks.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div
          className='SliderContain'
          >
            {chunk.map((item, subIndex) => (
              <div key={subIndex}>
                <p className='Heading'>
                  <img src={`${CONFIG.IMAGE_URL_BANGALORE}images/icon/location.png`} alt="location img" className='LocationImg'/>
                  {item.title} {index * 5 + subIndex + 1}
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


