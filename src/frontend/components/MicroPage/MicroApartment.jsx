import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import CustomCard from '../Card';

gsap.registerPlugin(ScrollTrigger);



export default function MicroApartment({ apartmentData ,onLoadComplete}) {
  
  const images = [...apartmentData.images];
  const contents = apartmentData.content;
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    // Check if the required data is loaded
    if (images.length > 0 && contents) {
      onLoadComplete && onLoadComplete(); // Call the function if defined
    }
  }, [images, contents, onLoadComplete]); // Dependencies ensure this runs when data changes

const lightbox_watermark = "lightbox_watermark";
  return (
    <div className="section renders1_section wrapper center pb-0 Apartment-section">
      
        {/* <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Apartment</h4>
        </div> */}

        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Apartment</h4>
        </div>

        <div className="cards-container">
          <div className='row'>
            {images.map((image, index)=>(
              <div key={index} className='col-sm-12 col-md-4 col-lg-4'>
                <div  className="card center" onClick={() => setIndex(index)}>
                  <div className="img">
                    <img src={image.asset} alt={`mvn apartment ${index}`} className='img-fluid apartment-section-img'  />
                    <Watermark className={image.watermark} />
                  </div>
                  <div className="content">
                    <h4 className='title_style1'>{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <Container>
          <div className='about'>
            <CustomCard
              className="px-0 pb-0"
              title={contents.title || ''}
              desc={contents.desc || ''}
            />
          </div>
        </Container>


        <Lightbox
          index={index}
          slides={images.map(img=>({src:img.asset}))}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom]}
          render={{
            slide: ({ slide }) => (
              <div className='Img_Container'>
                <img
                  src={slide.src}
                  alt="landscape image"
                  className='LightBox_image'
                />
                <Watermark className={lightbox_watermark}/>
                </div>
            ),
          }}
        />

    </div>
  );
}






