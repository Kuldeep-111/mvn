import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro/athens_gurugram/hero_mobile.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro/athens_gurugram/hero_desk.webp";
import highlightbgIMG from '../../../assets/images/bg/112.jpg'


export const AthensData = {
  micro_hero_section: 
  {
    isVdo: false,
    images:[{ imgMb: hero_img_mb, imgDesk: hero_img_desk, }],
    bannerHighLight:false,
    enquiryBTN:{
      isshow: true,
      mail: `info@example.com`
    } 
  },
  bannerHighLight: {
    isshow: false,
  },
  overview: {
    title: "MVN Athens",
    extra: "Where Life Unfolds in Perfect Harmony",
    desc:[
      `MVN Athens is a residential project in Ballabhgarh, Faridabad. MVN Athens offers an Apartment. Available configurations include 3 BHK. The apartment, as per the area plan, are in the size range of 1703.0 - 1726.0 sq. ft. The property is Ready to Move. The project was launched in September 2011 and the possession date of MVN Athens is Aug 2014. MVN Athens is located in Shiv Colony, Sector 2. The project is developed by MVN Infrastructure.`,
      "MVN Athens is equipped with various resident-centric amenities that include Lift, Rainwater Harvesting, Gymnasium, Power Backup. For families with kids, there is a Children's Play Area, nearby apart from Swimming Pool, Sports Area. Residents can make use of ATM, provisions in the project. There is 24x7 Security. Enjoy a class-apart lifestyle at MVN Athens."
    ]
  },
    gallery: {
      gallery:"Gallery",
      content: {
        desc: "Explore elegance through a visual journey of thoughtfully designed spaces, stunning architecture, and serene surroundings.",
      },
      images: [
        {
          assets: {
            desktop: `${CONFIG.IMAGE_URL_Athens}gallery/1.webp`,
            mobile: `${CONFIG.IMAGE_URL_Athens}gallery/1sm.webp`,
          },
          watermark: "right",
        },
        {
          assets: {
            desktop: `${CONFIG.IMAGE_URL_Athens}gallery/2.webp`,
            mobile: `${CONFIG.IMAGE_URL_Athens}gallery/2sm.webp`,
          },
          watermark: "right",
        },
        {
          assets: {
            desktop: `${CONFIG.IMAGE_URL_Athens}gallery/3.webp`,
            mobile: `${CONFIG.IMAGE_URL_Athens}gallery/3sm.webp`,
          },
          watermark: "left",
        },
      ],
    },
    amenities: {
      bangalore_amenities:"bangalore_amenities",
      path : CONFIG.IMAGE_URL_Athens,
      content: {
        desc: "Experience an exceptional range of world-class amenities, thoughtfully designed to enhance your lifestyle. Every detail is crafted to deliver unparalleled comfort and sophistication. ",
      },
      data: [
        {
          name: "Kids Play Area",
          imgSrc: {
            desktop: "kids.jpg",
            mobile: "kidsSm.jpg",
          },
          desc: "Safe and vibrant play zones for your little ones to have fun.",
        },
        {
          name: "Gym",
          imgSrc: {
            desktop: "gym.jpg",
            mobile: "gymSm.jpg",
          },
          desc: "A modern fitness hub for workouts, yoga, and group activities.",
        },
        {
          name: "Swimming Pool",
          imgSrc: {
            desktop: "pool.jpg",
            mobile: "poolSm.jpg",
          },
          desc: "Dive into luxury with a pristine pool for leisure and fitness.",
        },
        {
          name: "24/7 Security",
          imgSrc: {
            desktop: "security.jpg",
            mobile: "securitySm.jpg",
          },
          desc: "Advanced monitoring systems for a safe and secure living experience.",
        },
        {
          name: `Sports Area`,
          imgSrc: {
            desktop: "sport.jpg",
            mobile: "sportSm.jpg",
          },
          desc: "Dedicated courts and zones for sports lovers to play their favorite games.",
        },
        {
          name: "Landscaped Garden",
          imgSrc: {
            desktop: "garden.jpg",
            mobile: "gardenSm.jpg",
          },
          desc: "Beautifully curated gardens offering tranquility and scenic views.",
        },
        {
          name: "Lift",
          imgSrc: {
            desktop: "lift.jpg",
            mobile: "liftSm.jpg",
          },
          desc: "High-quality lifts for seamless and effortless access across all floors.",
        },
        {
          name: "Power Backup",
          imgSrc: {
            desktop: "power.jpg",
            mobile: "powerSm.jpg",
          },
          desc: "Uninterrupted power supply ensuring complete convenience at all times.",
        },
      ],
    },
      typologies: {
        desc:"Explore intricately designed floor plans catering to diverse preferences while maximizing space efficiency. Each layout is an architectural triumph, suffused with natural light and effortless elegance.",
        tabs_name:['TOWER C','TOWER D'],
        tabs:{   
          tower_c: [
          {
            title: "Lower Level Plan",
            area: "3419 SQFT",
            link: "#",
            src: `${CONFIG.IMAGE_URL_Athens}floor-plan/towerc/1.png`
          },
          {
            title: "Upper Level Plan",
            area: "3419 SQFT",
            link: "#",
            src: `${CONFIG.IMAGE_URL_Athens}floor-plan/towerc/2.png`
          },
          {
            title: "Upper Level Plan",
            area: "3375 SQFT",
            link: "#",
            src: `${CONFIG.IMAGE_URL_Athens}floor-plan/towerc/3.png`
          },
        ],  
        tower_d: [
        {
          title: "Lower Level Plan",
          area: "3419 SQFT",
          link: "#",
          src: `${CONFIG.IMAGE_URL_Athens}floor-plan/towerd/1.png`
        },
        {
          title: "Upper Level Plan",
          area: "3419 SQFT",
          link: "#",
          src: `${CONFIG.IMAGE_URL_Athens}floor-plan/towerd/2.png`
        },
        {
          title: "Upper Level Plan",
          area: "3375 SQFT",
          link: "#",
          src: `${CONFIG.IMAGE_URL_Athens}floor-plan/towerd/3.png`
        },
      ],
      }
      },
        // locationAdvantage: {
        //   isshow: true,
        //   title: "Location Advantage",
        //   desc:"Ideally located in Faridabad, MVN Athens provides a harmonious blend of connectivity and serenity, offering seamless access to the bustling hubs of Delhi/NCR.",
        //       mapIMG: {
        //         desktop: `${CONFIG.IMAGE_URL_BANGALORE}location-map.jpg`,
        //         mobile: `${CONFIG.IMAGE_URL_BANGALORE}location-mapm.jpg`,
        //       },
        //   bangaloreLocation: true,
        // },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
    isVdo: false,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: false,
  },
  living_room_video:{
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Experience the elegance of a sliding door that seamlessly connects your living space to the outdoors, transforming the ambiance with every glide.",
    isVdo: false,
  },
  video3: {
    title: "ELEVATED LIVING",
    desc: "OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION",
    isVdo: false,
  },
  masterBedroom: {
    title: "MASTER BEDROOM",
    desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
    isVdo: false,
  },
  Slides: {
    isshow: true,
  },
  enquiryBTN:{
    isshow:true,
    mail: "info@example.in",
  },
  menities_section: [
    {
      title: 'Billiards',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Billiards.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/BilliardsSm.webp',
      }
    },
    {
      title: 'Gym',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Gym.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/GymSm.webp',
      }
    },
    {
      title: 'Hot Tub Lake View',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/HotTubLakeView.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/HotTubLakeViewSm.webp',
      }
    },
    {
      title: 'Party lawn',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Partylawn.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/PartylawnSm.webp',
      }
    },
    {
      title: 'Croquet view',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Croquetview.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/CroquetviewSm.webp',
      }
    },
    {
      title: 'Outdoor cinema',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Outdoorcinema.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/OutdoorcinemaSm.webp',
      }
    },
    
  ],
  highlightbg: {
    isshow: true,
    img: highlightbgIMG
  },
  highlight:{
    isshow: true,
    title: "SALIENT FEATURES",
    desc: [
      ``,
    ],
    point:[
      `40 mins. drive from the IGI Airport`,
`Open Gym, Kids Play Area`,
`Creche, Jogging Track`,
`Daily Needs & other retail Facility within the complex`,
`Most secure site to commute at night, as close to existing posh`,
`Residential Colony`,
`All amenities like hospital, market & sports stadium is within walking distance`,
`KMP expressway just 5 mins`,
`20 mins. drive from the Cyber/IT offices located on Gurugram Road, Gurgaon`,
`Westin resort is just 7 mins`,
`Damdama Lake, Taj Hotel and tourist place is just 5 mins`,
`Very close & clear view of beautiful Aravali Hills`,
`Pollution-free healthy environment`,
`Up to 90% Loan available from the leading banks`,
`Easily Accessible to all major cities of Delhi NCR ie Faridabad, Noida, Gurugram`,
`Badshahpur Flyover - A 2km elevated road for Fast & Hassle-free drive.`,
`Well known Educational Hub.`,
`Delhi-Mumbai Industrial Corridor (DMIC) is passing through the south of Gurugram.`,
`Industrial Model Township (IMT-Gurugram) is off 1700acres approx which is 3 times of IMT Manesar on KMP Expressway`,
`60 meters wide & 8 km long road from Golf Course Extension Road (Gurugram) to Gurugram.`,
`6-lane, 90-meter wide road National Highway to South of Gurugram.`,
`A Calm & Fresher neighbourhood Environment.`,




      
      // "Pollution-free healthy environment",
      // "A Calm & Fresher neighbourhood Environment.",
      // "Most secure site to commute at night, as close to existing posh Residential Colony",
      // "Very close & clear view of beautiful Aravali Hills",
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage", 
    desc:"Ideally located in Faridabad, MVN Athens provides a harmonious blend of connectivity and serenity, offering seamless access to the bustling hubs of Delhi/NCR.",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_BANGALORE}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_BANGALORE}location-mapm.jpg`,
    },
    
    bangaloreLocation: true,
    chunks:1,
    sliderItems : [
      { title: "NH-2 (Agra Delhi)", desc: "1.8 KM" },
      { title: "metro station", desc: "2 KM" },
      { title: "Near Sector 12 Commercial Hub", desc: "10 Mins" },
      { title: "Town Park", desc: "04 KM" },
    ]
    
  },
  floorPlan:{
    title: 'Floor Plan',

    floorPlanData : [
      {
        title:'Tower A1 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerA1.webp',
      },
      {
        title:'Tower A2 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerA2.webp',
      },
      {
        title:'Tower B1 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerB1.webp',
      },
      {
        title:'Tower B2 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerB2.webp',
      },
      {
        title:'1 BHK Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/type-4.webp',
      },
      {
        title:'2 BHK Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/type1.webp',
      },
      
    ]
  },
  rera:{
    isshow: true,
    raraDetails:[
      `RERA Registration no : RC/REP/HARERA/GGM/326/58/2019/20`
    ]    
  },
  noPluutionZone:{
    isAllow:false
  },
  walkthrough:{
    isshow:false
  }
  
};



const Athens = () => {
  window.scrollTo(0, 0);
  return (
    <MicroPage data={data} projectName={'MVN-Athens'}/>
  )
};

export default Athens;
