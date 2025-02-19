import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import MasterBedroomLoader from "../../../common/Loader/micro/masterBedroomLoader/Index";
import Watermark from "../../../common/watermark/Index";
import lottie from "lottie-web";
import InitialLoading from "../../skeleton/Initial/Index";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MasterBedroom = ({ isMobile, data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const lottieContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const { title, desc , bangalore_bedroom} = data.masterBedroom;
  
  const jsonImports = {
    "gurugram/Mobile": () =>
      import("../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Mobile/data.json"),
    "gurugram/Desktop": () =>
      import("../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Desktop/data.json"),
    "bangalore/Mobile": () =>
      import("../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Desktop/data.json"),
    "bangalore/Desktop": () =>
      import("../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Desktop/data.json"),
  };
  

  // Dynamically import the correct JSON animation data
  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        // Dynamically resolve the key
        let key ;
        bangalore_bedroom ?
         key = `bangalore/${isMobile ? "Mobile" : "Desktop"}`
        :
         key = `gurugram/${isMobile ? "Mobile" : "Desktop"}`;
  
        // Import the correct JSON file using the static mapping
        const importedData = await jsonImports[key]();
        setAnimationData(importedData.default);
        onLoadComplete();
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };
  
    loadAnimationData();
  }, [isMobile]);
  

  // Initialize Lottie and ScrollTrigger
  useEffect(() => {
    if (!animationData || !lottieContainerRef.current || !containerRef.current) return;

    const lottieAnimation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      animationData,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        clearCanvas: true,
      },
    });

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90px",
      end: `+=${window.innerHeight * 6}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalFrames = lottieAnimation.totalFrames;
        const frameIndex = Math.floor(progress * (totalFrames - 1));
        lottieAnimation.goToAndStop(frameIndex, true);
      },
      onLeave: () => {
        lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
      },
      onLeaveBack: () => {
        lottieAnimation.goToAndStop(0, true);
      },
    });

    // Set loading to false after both the animation and Lottie are ready
    lottieAnimation.addEventListener("DOMLoaded", () => setLoading(false));
    onLoadComplete();

    return () => {
      scrollAnimation.kill();
      lottieAnimation.destroy();
    };
  }, [animationData, onLoadComplete]);

  // Title animation with GSAP
  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div className="section peacock_section pb-0 master-bed-room">
      {loading && <MasterBedroomLoader />}
      {!loading && (
        <>
          <div ref={containerRef} className="frames_content">
            <Watermark className="style2" />
            <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>

            <div id="scroll-wrapper" className="microsite-scrolldown">
              <div id="scroll-wrapper-inner ">
                <div id="scroll-title">Scroll Down</div>
                <div className="scroll-down-dude"></div>
              </div>
            </div>
          </div>

          <Container className="mt-5">
            <div className="about">
              <CustomCard className="px_sm_0" title={title} desc={desc} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default MasterBedroom;
