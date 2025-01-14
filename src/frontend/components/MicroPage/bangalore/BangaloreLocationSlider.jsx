import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules'; 
import './LocationSlider.css'
import { Container } from 'react-bootstrap';
import * as CONFIG from "../../../../config/config";




const BangaloreLocationSlider = () => {
  // Static array with 50 objects containing title and desc
  const sliderItems = [
    { title: "Mini Vidhana Soudha, Devanahalli", desc: "3.4 Km | 06 Min" },
    { title: "Nandi Hills, Nandi Hills Road", desc: "27 Km | 40 Min" },
    { title: "Timbre Drive-In Cinema, Bellary Road ", desc: "6.5 Km | 11 Min" },
    { title: "Anjaneya Temple, Devanahalli", desc: "02 Km | 03 Min" },
    { title: "Mar Thama Church, Devanahalli", desc: "2.6 Km | 04 Min" },
    { title: "Kempegowda Intl. Airport", desc: "14 Km | 15 Min" },
    { title: "K.I. Airport  Halt (Railway Station)", desc: "11 Km | 12 Min" },
    { title: "Proposed Metro  line", desc: "13 Km | 13 Min" },
    { title: "Devanahalli Trumpet Flyover Bellary Road", desc: "11 Km | 12 Min" },
    { title: " Sports Village Bellary Road", desc: "05 Km | 05 Min" },
    { title: "Clarks Exotica, Sadahalli", desc: "16 Km | 18 Min" },
    { title: "Taj Hotel K Intl. Airport", desc: "16 Km | 15 Min" },
    { title: "Sai Mart,  Devanahalli", desc: "3.4 Km | 03 Min" },
    { title: "Esteem Mall, Hebbal", desc: "29 Km | 30 Min" },
    { title: "Nalanda  Collage, Bellary Road", desc: "4 Km | 08 Min" },
    { title: "Global Minds, Brigade Orchards", desc: "0.5 Km | 02 Min" },
    { title: "Delhi Public  School, Sathanur", desc: "23 Km | 26 Min" },
    { title: "IT tech Park KIADB, Devanahalli ", desc: "09 Km | 11 Min" },
    { title: "Aerospace Sez  KIABD, Devanhalli", desc: "09 Km | 11 Min" },
    { title: "Hardware Park KIABD, Devanhalli", desc: "15 Km | 16 Min" },
  ];

  // Function to chunk the array into groups of 5
  const chunkedItems = [];
  for (let i = 0; i < sliderItems.length; i += 5) {
    chunkedItems.push(sliderItems.slice(i, i + 5));
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
              <div className="SliderContain">
                {chunk.map((item, subIndex) => (
                  <div key={subIndex}>
                  <p className='Heading'>
                    <img src={`${CONFIG.IMAGE_URL_BANGALORE}images/icon/location.png`} alt="location img" className='LocationImg'/>
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


