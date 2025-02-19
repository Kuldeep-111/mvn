import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import AnImage from "../../../common/animations/Image/Index"; // Assuming AnImage is being used for animations

import "yet-another-react-lightbox/styles.css";
import CustomCard from '../Card';

gsap.registerPlugin(ScrollTrigger);

export default function MicroElevation({ elevationData, onLoadComplete }) {
  const data = [...elevationData.images];
  const contents = elevationData.content;
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);  // Track loaded images

  const initializeAnimations = () => {
    if (data.length > 0) {
      gsap.from(sectionsRef.current, {
        y: 50,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: "top 95%",
        },
      });

      // Add animation for AnImage components using imageDivRefs
      imageDivRefs.current.forEach((imagediv) => {
        if (imagediv) {
          gsap.to(imagediv, {
            scrollTrigger: {
              trigger: imagediv,
              start: "top 95%",
              onEnter: () => imagediv.classList.add("active"),
              once: true,
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // ScrollTrigger.refresh();
    };

    // When all images are loaded, call onLoadComplete
    if (imagesLoaded === data.length) {
      setTimeout(() => {
        initializeAnimations();
        if (onLoadComplete) {
          onLoadComplete();  // Call the onLoadComplete function
        }
      }, 300);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, data.length, onLoadComplete]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const lightbox_watermark = "lightbox_watermark";
  return (
    <div className="section renders1_section wrapper center pb-0">
{/* <div className="sec_title text-center color style1 mt_50">
  <h4 className="title">Elevation</h4>
</div> */}
<div className="heading_div mb_60 mb_sm_30" >
  <h4 className="title title_style1 text-center">Elevation</h4>
</div>

<div className="cards-container">
  <div className='row'>
    {data.map((image, index) => (
      <div className='col-sm-12 col-md-4 col-lg-4' key={index}>
        <div className="card center" onClick={() => setIndex(index)}>
          {/* Wrapping image in AnImage component for animation */}
          <AnImage ref={(el) => (imageDivRefs.current[index] = el)}>
            <img src={image.assets.desktop} alt={`mvn elevation ${index}`} className='img-fluid elevation-section-img d-none d-md-block' onLoad={handleImageLoad} />
            <img src={image.assets.mobile} alt={`mvn elevation ${index}`} className='img-fluid elevation-section-img d-md-none' />
            <Watermark className={image.watermark} />
          </AnImage>
        </div>
      </div>
    ))}
  </div>

  <Container>
    <div className='about'>
      <CustomCard
        className="px-0"
        title={contents.title || ''}
        desc={contents.desc || ''}
      />
    </div>
  </Container>
</div>

<Lightbox
  index={index}
  slides={data.map(img => ({ src: img.assets.desktop }))}
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






