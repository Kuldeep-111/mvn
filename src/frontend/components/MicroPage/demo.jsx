import React, { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all"; // Ensure GSAP and ScrollTrigger are imported

const Hero = () => {
  const [loadedFrames, setLoadedFrames] = useState(0); // Track number of loaded frames
  const totalFrames = 198;
  const imagesFrameRef = useRef(null); // Reference for the image container
  const pageLoaderRef = useRef(null); // Reference for the page loader
  
  useEffect(() => {
    // Set up ScrollTrigger and frame loading when the component mounts
    if (imagesFrameRef.current && pageLoaderRef.current) {
      loadFrames();
      setupScrollTrigger();
    }

    return () => {
      // Cleanup ScrollTrigger when component unmounts
      if (ScrollTrigger) {
        ScrollTrigger.kill();
      }
    };
  }, []); // Empty dependency array means this effect runs only once after mount

  // Load frames function
  const loadFrames = () => {
    const folderPath = "images/banner/desktop/"; // Hardcoded for now, could use dynamic paths
    const imagesFrame = imagesFrameRef.current;

    // Clear any existing frames in the DOM
    imagesFrame.innerHTML = "";

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${folderPath}${i}.webp`;
      img.className = "frame";
      img.alt = `Frame ${i}`;
      img.style.opacity = 0;
      imagesFrame.appendChild(img);

      img.onload = () => {
        setLoadedFrames(prev => prev + 1);
        if (loadedFrames + 1 === totalFrames) {
          pageLoaderRef.current.style.display = "none";
        }
      };

      img.onerror = () => {
        setLoadedFrames(prev => prev + 1);
        console.warn(`Frame ${i} failed to load`);
        if (loadedFrames + 1 === totalFrames) {
          pageLoaderRef.current.style.display = "none";
        }
      };
    }
  };

  // Set up ScrollTrigger
  const setupScrollTrigger = () => {
    const frames = document.querySelectorAll(".frame");
    let lastIndex = -1;

    ScrollTrigger.create({
      trigger: ".frames_content",
      start: "top 0",
      end: `+=${window.innerHeight * 7}`,
      pin: true,
      scrub: 2,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        if (frameIndex !== lastIndex) {
          if (lastIndex >= 0) frames[lastIndex].style.opacity = 0;
          frames[frameIndex].style.opacity = 1;
          lastIndex = frameIndex;
        }
      },
      onLeave: () => {
        frames.forEach((frame, index) => {
          frame.style.opacity = index === totalFrames - 1 ? 1 : 0;
        });
      },
      onLeaveBack: () => {
        frames.forEach((frame, index) => {
          frame.style.opacity = index === 0 ? 1 : 0;
        });
      },
    });
  };

  return (
    <div>
      <div ref={pageLoaderRef} style={{ display: "flex" }}>Loading...</div> {/* The loader */}
      <div ref={imagesFrameRef} className="images_frame">
        {/* The images will be appended dynamically */}
      </div>
    </div>
  );
};

export default Hero;
