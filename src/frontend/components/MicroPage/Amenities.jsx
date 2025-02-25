import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
import Watermark from "../../../common/watermark/Index";
import OtherProjects from "../../components/homepage/OtheProjects"; // Assuming this is used for displaying other projects

import mvnSchoolMobile from "../../assets/images/other-projects/mvn-school.webp";
import mvnUniversityMobile from "../../assets/images/other-projects/mvn-university.webp";
import mvnSportsAcademyMobile from "../../assets/images/other-projects/mvn-sports-academy.webp";

import mvnSchoolDesktop from "../../assets/images/other-projects/mvn-school-desktop.webp";
import mvnUniversityDesktop from "../../assets/images/other-projects/mvn-university-desktop.webp";
import mvnSportsAcademyDesktop from "../../assets/images/other-projects/mvn-sports-academy-desktop.webp";
import CustomCard from "../Card";
import { Container } from "react-bootstrap";

const amenityData = [
  {
    name: "MVN School",
    Mobilethumbnail: mvnSchoolMobile,
    Desktophumbnail: mvnSchoolDesktop,
  },
  {
    name: "MVN University",
    Mobilethumbnail: mvnUniversityMobile,
    Desktophumbnail: mvnUniversityDesktop,
  },
  {
    name: "MVN Sports Academy",
    Mobilethumbnail: mvnSportsAcademyMobile,
    Desktophumbnail: mvnSportsAcademyDesktop,
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Amenities({ amenitiesData,onLoadComplete }) {
  const {content , data ,bangalore_amenities} = amenitiesData;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionsRef = useRef([]);
  const triggers = useRef([]);

  // Debounced window resize listener to update isMobile
  useEffect(() => {
    const debounce = (func, delay) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
      };
    };

    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up GSAP ScrollTrigger for desktop view 
  useEffect(() => {
    if (!isMobile) {
      const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
  
      triggers.current = [];
      sectionsRef.current.forEach((section, i) => {
        const bg = section.querySelector(".bg");
        if (bg) {
          let imageUrl 
          bangalore_amenities ?
          imageUrl = `url(${CONFIG.IMAGE_URL_BANGALORE}images/amenities/${data[i].imgSrc.desktop})`
          : imageUrl = `url(${CONFIG.IMAGE_URL}amenities/${data[i].imgSrc.desktop})`;
          bg.style.backgroundImage = imageUrl;
  
          const defaultBgPos = i === 0 ? "50% 0" : `50% ${-window.innerHeight * getRatio(section)}px`;
  
          const trigger = gsap.fromTo(
            bg,
            { backgroundPosition: defaultBgPos },
            {
              backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(section))}px`,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: i === 0 ? "top top" : "top bottom",
                end: "bottom top",
                scrub: 0.5, // Use a small scrub time to control the speed of animation
                invalidateOnRefresh: true,
              },
            }
          );
  
          triggers.current.push(trigger.scrollTrigger);
        }
      });

      ScrollTrigger.refresh();
    }
  
    // Cleanup ScrollTriggers
    return () => {
      triggers.current.forEach((trigger) => trigger.kill());
    };
  }, [isMobile, data]);

  // Refresh ScrollTrigger after images are loaded
  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img")); // Get all images in the DOM
  
    // Function to load an individual image and return a Promise
    const loadImage = (img) => {
      return new Promise((resolve, reject) => {
        if (img.complete) {
          if (img.naturalWidth > 0) {
            resolve(); // Image successfully loaded
          } else {
            reject(new Error(`Image failed to load: ${img.src}`)); // Image is broken
          }
        } else {
          img.addEventListener("load", resolve); // Resolve when load event fires
          img.addEventListener("error", () => reject(new Error(`Image failed to load: ${img.src}`))); // Reject on error
        }
      });
    };
  
    // Wait for all images to load
    Promise.all(images.map(loadImage))
      .then(() => {
        ScrollTrigger.refresh(); // Refresh ScrollTrigger after images are loaded
        onLoadComplete(); // Notify that loading is complete
      })
      .catch((error) => {
        console.error("Some images failed to load:", error);
        // Optionally, handle failed image loading (e.g., show a fallback UI)
      });
  }, []);
  

  const renderMobileView = () => (
    <div className="amenities_section main_am">
      <div className="cards-container">

        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Amenities</h4>
        </div>

        {/* <div className="sec_title text-center color style1">
          <h4 className="title">Amenities</h4>
        </div> */}

        {data.map((single, index) => (
          <div key={index} className="col-sm-12 col-md-4 col-lg-4">
            {bangalore_amenities ?
            <div className="card center">
              <img
                src={`${CONFIG.IMAGE_URL_BANGALORE}images/amenities/${single.imgSrc.mobile}`}
                alt={`mvn amenities ${index}`}
                // src={CONFIG.IMAGE_URL + 'amenities/' + single.imgSrc.mobile}
                // alt={`mvn amenities ${index}`}
                className="img-fluid d-md-none"
              />
              <img
                src={`${CONFIG.IMAGE_URL_BANGALORE}images/amenities/${single.imgSrc.desktop}`}
                alt={`mvn amenities ${index}`}
                // src={CONFIG.IMAGE_URL + 'amenities/' + single.imgSrc.desktop}
                // alt={`mvn amenities ${index}`}
                className="img-fluid d-none d-md-block"
              />
              <Watermark />
            </div> : 
            <div className="card center">
              <img
                src={`${CONFIG.IMAGE_URL}amenities/${single.imgSrc.mobile}`}
                alt={`mvn amenities ${index}`}
                // src={CONFIG.IMAGE_URL + 'amenities/' + single.imgSrc.mobile}
                // alt={`mvn amenities ${index}`}
                className="img-fluid d-md-none"
              />
              <img
                src={`${CONFIG.IMAGE_URL}amenities/${single.imgSrc.desktop}`}
                alt={`mvn amenities ${index}`}
                // src={CONFIG.IMAGE_URL + 'amenities/' + single.imgSrc.desktop}
                // alt={`mvn amenities ${index}`}
                className="img-fluid d-none d-md-block"
              />
              <Watermark />
            </div>}
            <div className="content">
              <span className="am-name">{single.name}</span>
              {Array.isArray(single.desc) ? (
                single.desc.map((desc, idx) => (
                  <p key={idx} className="desc des_style1 text-center mt-3">{desc}</p>
                ))
              ) : (
                <p className="desc des_style1 text-center mt-3">{single.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDesktopView = () => (
    <div className={`main_am ${bangalore_amenities}`}>
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">Amenities</h4>
      </div>

      {data.map((amenity, i) => (
        <section
          key={i}
          className="parallax"
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          <div className="bg">
            <Watermark className="left" />
          </div>
          <div className="content">
            <span className="am-name">{amenity.name}</span>
            <p className="desc des_style1 text-center mt-2">{amenity.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <>
      {isMobile ? renderMobileView() : renderDesktopView()}

      {content && <Container>
          <div className='about'>
            <CustomCard
              className="px-0 pb-0"
              desc={content.desc || ''}
            />
          </div>
        </Container>}
      
      
    </>
  );
}
