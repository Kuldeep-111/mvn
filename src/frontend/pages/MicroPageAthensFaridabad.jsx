import React, { useEffect, useState, useRef } from "react";
import MicroOverview from "../components/MicroPage/Overview";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Footer from "../components/Footer";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import InitialLoading from "../skeleton/Initial/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import MicroElevation from "../components/MicroPage/MicroElevation";

import * as CONFIG from '../../config/config';
import BangaloreTypology from "../components/MicroPage/bangalore/BangaloreTypology";
import "./micro/Athens/athens-faridabad.css" 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageAthensFaridabad = ({ data, loadingCount, setLoadingCount }) => {
  
  const [heroLoaded, setHeroLoaded] = useState(true);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Math.floor(localStorage.getItem('count') || 0)
  );
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(true);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});


  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };

  useEffect(() => {
    if (heroLoaded) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [heroLoaded]);

  useEffect(() => {
    if (newLoadingCount >= 100 && heroLoaded  && livingRoomLoaded && masterBedroomLoaded ) {
      const timer = setTimeout(() => {
        setNewLoadingCount(101);
        setIsPageLoaded(true); // Mark page as loaded
      }, 500); // 1 seconds delay before removing InitialLoading

      return () => clearTimeout(timer);
    }
  }, [newLoadingCount]);

  const classData = "bg_black";

  return (
    <>
    {/*    */}
      {(!heroLoaded || !livingRoomLoaded || !masterBedroomLoaded ) && (
        <>
          <InitialLoading
            fast="false"
            second="true"
            loadingCount={newLoadingCount}
            setLoadingCount={setNewLoadingCount}
          />
          {/* <GurgaonLoader1 /> */}
        </>
      )}

      
      <Helmet>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
          `}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P7MQ5KWWGL"
        ></script>

        <script>
          {`
            gtag('js', new Date());
            gtag('config', 'G-P7MQ5KWWGL');
          `}
        </script>

        {/* Google tag (gtag.js) */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7YNXS59XR"></script>

        <script>
          {`
            gtag('js', new Date());

            gtag('config', 'G-T7YNXS59XR');
          `}
        </script>

        {/* conversion code */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>

        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11490416244');
          `}
        </script>

        {/* Meta Pixel Code */}

        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '562105226581202');
            fbq('track', 'PageView');
            `}
          </script>

          <noscript>
            {`
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=562105226581202&ev=PageView&noscript=1" />
            `}
          </noscript>

          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11490416244');
            `}
          </script>

          <script>
              {`
                <script type='text/javascript'>
                window._tfa = window._tfa || [];
                window._tfa.push({notify: 'event', name: 'page_view', id: 1787600});
                !function (t, f, a, x) {
                      if (!document.getElementById(x)) {
                          t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                      }
                }(document.createElement('script'),
                document.getElementsByTagName('script')[0],
                '//cdn.taboola.com/libtrc/unip/1787600/tfa.js',
                'tb_tfa_script');
              </script>
              `}
          </script>

          <script>
            {`
              (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187169642", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
            `}
          </script>

      </Helmet>

      <MicroHeader scrollToSection={scrollToSection} classData={classData}/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
         
          <div className="AthensBanner">
            <img src={`${CONFIG.IMAGE_URL_Athens}banner/banner.webp`} alt="Desktop Banner" className="d-none d-md-block"/>
            <img src={`${CONFIG.IMAGE_URL_Athens}banner/bannerSm.webp`} alt="Mobile  Banner" className="d-md-none"/>
          </div>



          {/* Render other components only after Hero Section is loaded */}

          <MicroOverview data={data} /> {/*no isssue*/}

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure />
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.MicroElevation = el)
            }
          >
            <MicroElevation elevationData={data.gallery}
              onLoadComplete={() => setElevationLoaded(true)}/>
          </div>

    

          <div
            ref={(el) =>
              (sectionRefs.current.MicroAmenities = el)
            }>
            <MicroAmenities amenitiesData={data.amenities} 
              onLoadComplete={() => setAmenitiesLoaded(true)}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroTypology = el)
            }
          >
              <BangaloreTypology onLoadComplete={() => setTypologyLoaded(true)} data={data.typologies}/>
          </div>

        

          <div
            ref={(el) =>
              (sectionRefs.current.MicroLocationMap = el)
            }
          >
            <MicroLocationMap
              data={data.locationAdvantage}
            />
          </div>

         
          <div
            className="container-fluid micro_footer"
            ref={(el) => (sectionRefs.current.Enuqiry = el)}
          >
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
                <EnquireForm
                  projectName={"MVN Aeroone"}
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default MicroPageAthensFaridabad;
