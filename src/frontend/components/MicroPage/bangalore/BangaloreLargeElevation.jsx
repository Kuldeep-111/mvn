import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import bgDesktopImg from "../../../assets/images/aero-bangalore/lg_elevation-bg.png";
import frontDesktopImg from "/public/assets/bangalore/images/fr-front1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from "../../Card";
import "./BangaloreLargeElevation.css";

gsap.registerPlugin(ScrollTrigger);

export default function LargeElevation() {
  const elevationRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Ensure refs are defined
    if (!elevationRef.current || !imgRef.current) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    // Animation logic
    const animation = gsap.from(imgRef.current, {
      y: window.innerWidth <= 768 ? -80 : -200,
      scrollTrigger: {
        trigger: elevationRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.2,
        invalidateOnRefresh: true,
      },
    });

    // Refresh ScrollTrigger after a short delay
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      animation.kill(); // Kill the GSAP animation
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTrigger instances
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <Container>
        <div className="about">
          <CustomCard className="px-0" />
        </div>
      </Container>

      <section className="BangaloreElevation pb-0" ref={elevationRef}>
        <div className="BangaloreMainTitle">
          <h1 className="Title">Timeless Fusion of Elegance</h1>
        </div>
        <div className="BangaloreImgs">
          <img
            src={frontDesktopImg}
            alt="Large elevation Img"
            className="BangaloreFrontImg"
            ref={imgRef}
          />
          <p className="WaterMark2">Artistic Impression</p>
          <img src="/public/assets/images/logo.png" alt="logo"  className="WaterMark"/>
        </div>
        <Container>
          <div className="about">
            <CustomCard
              className="px-0"
              desc="Designed to inspire awe at first glance, the static elevation of MVN Aero One showcases
              a perfect fusion of form and function. Each detail is meticulously crafted to embody a harmonious balance
              of contemporary aesthetics and architectural innovation."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
