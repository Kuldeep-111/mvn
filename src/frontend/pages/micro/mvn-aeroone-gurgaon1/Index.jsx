import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro_hero/hero_img.webp";

import "./aeroGuragaon.css";
import MicroPageGurgaon1 from "../../MicroPageGurgaon1";

export const data = {
  micro_hero_section:
  {
    isVdo: true,
    images: false,
    bannerHighLight: false,
    enquiryBTN: false,
    client:true,
    desktopPath :'assets/images/micro/hero/desktop/',
    mobilePath :'assets/images/micro/hero/mobile/',
    desktopPathNew: 'assets/images/micro/hero/client/desktop-new/',
    mobilePathNew : 'assets/images/micro/hero/client/mobile-new/',
  },
  overview: {
    title: "MVN RESIDENCE",
    // location: "Gurugram",
    extra: "AN EPITOME OF GLOBAL LUXURY NOW IN GURUGRAM",
    desc: "Gurugram is set to redefine luxury living with the launch  of MVN ultra-luxurious 5.5 BHK apartments, offering unmatched opulence. Combining the grandeur of Dubai and New York, these residences feature cutting-edge designs, premium amenities, and breathtaking views. Experience an elite lifestyle with sophistication and comfort at its pinnacle, like never before!",
    // desc: [
    //   'Luxury Reimagined. Elegance Reborn.',
    //   'Step into a world of unparalleled luxury, where every detail blends sophistication with style. Relish in tailored interiors, exceptional amenities, and panoramic views. Transform your lifestyle with an extraordinary living experience beyond compare.',
    // ],
    counterHeading: true,
    rera: "RERA Registration no : RC/REP/HARERA/GGM/889/621/2024/116",
  },
  LargeElevationSection: {
    title: ['Unseen', 'Unheard', 'Unimagined'],
    isAllow: true,
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    desc:'Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings.',
    isVdo: true,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: true,
  },
  living_room_video:{
    title: "OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY",
    desc: "Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.",
    isVdo: true,
    path:'assets/videos/living-room/desktop/',
    totalFrames:126,
  },
  video3: {
    title: "LIVE. LAUGH. LOUNGE",
    desc: "Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambiance, perfect for hosting unforgettable soirees and extravagant gatherings.",
    isVdo: true,
  },
  masterBedroom: {
    title: "BEDROOM Platinum",
    desc: "Your own sphere of serenity crafted artfully for the ultimate retreat into blissful moments of privacy.",
    isVdo: true,
    // mobileJson:"../../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Mobile/data.json",
    // desktopJson:"../../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Desktop/data.json",
  },
  highlights: [
    "Power backup for common facilities.",
    "Italian/Imported Marble flooring.",
    "Television points in living room and bedrooms.",
    "Telephone points in living room and master bedroom.",
    "Split AC provision in living room and bedrooms.",
    "Premium emulsion paint finish.",
  ],
  walkthrough: {
    isshow: false,
    desc: "IF YOU THINK YOU'VE EXPERIENCED TRUE LUXURY IT'S TIME TO RAISE YOUR EXPECTATION",
    masterBedroom: {
      title: "MASTER BEDROOM",
      desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
      isVdo: false,
    },
  },
  walkthrough_section:{
    src: "https://www.youtube.com/embed/9CHcJAveejU?si=Sr3K9ETfhxeyjrOW",
    title:"A GLIMPSE INTO A LIFE EXTRAORDINARY",
    desc: "Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you.",
  },
  landscape:{
    content:{
      title:"Pinnacle of Sophisticated Luxury",
      desc:"This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.",
    },
    images:[
      {
        asset: CONFIG.IMAGE_URL + 'renders/landscape/1.webp',
        watermark: 'left',
        title:'Yoga Deck',
      },
      {
        asset: CONFIG.IMAGE_URL + 'renders/landscape/2.webp',
        watermark: 'right',
        title:'Swimming Pool',
      },
      {
        asset: CONFIG.IMAGE_URL + 'renders/landscape/3.webp',
        watermark: 'right',
        title:'Pergola View',
      }
    ],
  },
  elevation:{
    content:{
      title:"Pinnacle of Sophisticated Luxury",
      desc:"This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.",
    },
    images:[
      {
        assets: {
          desktop:CONFIG.IMAGE_URL + 'renders/elevation/1.webp',
          mobile:CONFIG.IMAGE_URL + 'renders/elevation/1_sm.webp',
        },
        watermark: 'right'
      },
      {
        assets: {
          desktop:CONFIG.IMAGE_URL + 'renders/elevation/2.webp',
          mobile:CONFIG.IMAGE_URL + 'renders/elevation/2_sm.webp',
        },
        watermark: 'right'
      },
      {
        assets: {
          desktop:CONFIG.IMAGE_URL + 'renders/elevation/3.webp',
          mobile:CONFIG.IMAGE_URL + 'renders/elevation/3_sm.webp',
        },
        watermark: 'left'
      }
    ],
  },
  apartment:{
    content:{
      title:"Every corner a symphony of style & opulence",
      desc:"Experience ultra-luxury living in this exclusive apartment boasting plush interiors and bespoke design. The spacious layout includes a designer bathroom with premium fittings, a modern Cucina kitchen for culinary excellence, and a state-of-the-art home theatre for entertainment. A thoughtfully designed kids' room ensures comfort and fun, completing a perfect sanctuary for a sophisticated, family-friendly lifestyle.",
    },
    images:[
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/5_sm.webp',
        watermark:'left',
        title:'Panaromic Living Room',
      },
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp',
        watermark:'right',
        title:'Living Room',
      },
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp',
        watermark:'left',
        title:'Cucina Kitchen',
      },  
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp',
        watermark:'right',
        title:'Master Bedroom – Platinum',
      },  
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp',
        watermark:'right',
        title:'Master Bedroom – Platinum',
      },
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/2.webp',
        watermark:'right',
        title:'Bathroom',
      },
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/1.webp',
        watermark:'right',
        title:'Master Bedroom – Royale',
      },
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/3.webp',
        watermark:'left',
        title:'Study Room',
      },
      {
        asset:CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp',
        watermark:'right',
        title:'Kids Room',
      },
    ],
  },
  // LargeElevationSection: {
  //   title: "an epitome of contemporary elegance",
  //   isAllow: true,
  // },
  // renders: [
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/1_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/1_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/2_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/2_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/3_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/3_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/4_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/4_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/5_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/5_mobile.webp',
  //   }
  // ],
  renders: [
    {
      title: 'Apartment',
      data:[
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/1.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/1_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/2.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/2_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/3_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/4_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/5_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/6_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/7_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/8_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/9_sm.webp`,
        }
      ],
    },
    {
      title: 'Elevation',
      data:[
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/1.jpg`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/2Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/2.jpg`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/3Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/3.jpg`,
        }
      ],
    },  
    {
      title: 'Landscape',
      data:[
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/landscape/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/landscape/1.jpg`,
        },
      ],
      
    },  
  ],
  amenities : {
    data:[
      { 
        name: 'Elevate Your Family Time At The Exclusive Clubhouse',
        imgSrc:{
          desktop:'clubhouse.webp',
          mobile:'clubhouseSm.webp'
        },
        desc:'The ultra-luxury clubhouse offers residents an opulent retreat, featuring state-of-the-art amenities, a lavish spa, infinity pools, gourmet dining, private lounges, and exquisite interiors for unparalleled leisure and comfort for the whole family.' 
      },  
      {
        name: 'Business Centre',
        imgSrc: {
          desktop:'business.webp',
          mobile:'businessSm.webp'
        },
        desc:'A sophisticated workspace designed for productivity and collaboration'
      },
      {
        name: 'Library',
        imgSrc: {
          desktop:'library.webp',
          mobile:'librarySm.webp'
        },
        desc:'A tranquil haven for literary exploration and quiet contemplation'
      },
      {
        name: 'Sports Lounge',
        imgSrc: {
          desktop:'lounge.webp',
          mobile:'loungeSm.webp'
        },
        desc:'An upscale space to unwind and enjoy sports events'
      },
      {
        name: `Kids Play Area`,
        imgSrc: {
          desktop:'kids.webp',
          mobile:'kidsSm.webp'
        },
        desc:'A safe and imaginative space for children to explore'
      },
      {
        name: 'Fitness Centre',
        imgSrc: {
          desktop:'gym.webp',
          mobile:'gymSm.webp'
        },
        desc:'State-of-the-art fitness facilities for ultimate wellness'
      },
      {
        name: 'Spa',
        imgSrc: {
          desktop:'spa.webp',
          mobile:'spaSm.webp'
        },
        desc:'A luxurious retreat offering rejuvenation and tranquility'
      },
      {
        name: `Mini Theatre`,
        imgSrc: {
          desktop:'theater.webp',
          mobile:'theaterSm.webp'
        },
        desc:'Intimate screenings for cinematic experiences with friends'
      },
      {
        name: `Central Green`,
        imgSrc: {
          desktop:'central-green.webp',
          mobile:'central-green_sm.webp'
        },
        desc:['An oasis of clean air and pure living. ','Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.']
      },
      {
        name: 'Exclusive entrance and exit for the residents',
        imgSrc: {
          desktop:'entryexit.webp',
          mobile:'entryexit_sm.webp'
        },
        desc:'Experience unparalleled privacy and convenience with exclusive entry and exit points designed for residents of MVN, ensuring seamless access and an elite living experience.'
      },
    ],
  },
  amenities_section: [
    {
      title: 'Spa',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          }
        ]
      }
      
    },
    {
      title: 'Library',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
          }
        ]
      }
    },
    {
      title: 'Gym Area',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
          }
        ]
      }
    },
    {
      title: 'Mini Theatre',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
          }
        ]
      }
    },    
    {
      title: 'Business Centre',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
          }
        ]
      }
    },   
  ],
  noPollutionZone: [
    // {
    //   title: 'An oasis of clean air and pure living',
    //   desc:'Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.',
    //   imgSrc: window.innerWidth <= 768 ? 'central-green.webp' : 'central-green.webp'
    // },
    {
      title: '0 km from all the urban needs 0km from your office',
      desc:'Now you don’t have to even walk to work. Take a ride on your exclusive elevator to work',
      imgSrc: window.innerWidth <= 768 ? 'office.webp' : 'desktop/office.webp'
    },
    {
      title: '0 km from luxury Shopping',
      desc:'All the best of luxury shopping and brands from the world over, right at your doorstep at MVN Mall',
      imgSrc: window.innerWidth <= 768 ? 'shopping.webp' : 'desktop/shopping.webp'
    },
    {
      title: '0 km from Global Entertainment',
      desc:'When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.',
      imgSrc: window.innerWidth <= 768 ? 'entertainment.webp' : 'desktop/entertainment.webp'
    },
    {
      title: '0 km from the Sports Club & Lounge',
      desc:'Make sports a regular part of your life. Participate in sports events and also follow your passion to play your favourite sports, at the exclusive Sports Lounge and Sports Club.',
      imgSrc: window.innerWidth <= 768 ? 'sports.webp' : 'desktop/sports.webp'
    },
    {
      title: '0 km cinema',
      desc:'Have a blockbuster of a time, without ever missing a show due to traffic. Catch up with all the superhits at the theatres below in the MVN mall.',
      imgSrc: window.innerWidth <= 768 ? 'cinema.webp' : 'desktop/cinema.webp'
    },
  ],
  highlight:{
    isshow: true,
    title: "Highlight",
    point:[
      'Power backup for common facilities.',
    'Italian/Imported Marble flooring.',
    'Television points in living and bedrooms.',
    'Telephone points in living and master bedroom.',
    'Split AC provision in living and bedrooms.',
    'Premium emulsion paint finish.',
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage",
    youtube: true,
    mapIMG: {
      desktop:CONFIG.IMAGE_URL + 'gurgaon-micro/location_map.webp',
      mobile:CONFIG.IMAGE_URL + 'gurgaon-micro/location-map_sm.webp'
    },
    //     yasho bhoomi
    // indira gandhi international airport
    // diplomatic enclave
    // palam vihar 
    // gurgaon railway station
    // dlf cyber city 
    // world global city
    locationData: [
      {
        distance: '0 km',
        title: 'MVN Mall',
      },
      {
        distance: '2.9 kms',
        title: 'World global city',
      },
      {
        distance: '10.5 kms',
        title: 'Cyber City 2',
      },
      {
        distance: '10.5 kms',
        title: 'Gurgaon Railway station',
      },
      {
        distance: '18 kms',
        title: 'Yasho Bhoomi',
      },
      {
        distance: '20 kms',
        title: 'Diplomatic enclave 2',
      },
      {
        distance: '29.7 kms',
        title: 'IGI Airport',
      },
    ]
  },
  floorPlan:{
    title:'Floor Plan',
    floorPlanData : [
      {
        title:'Penthouse',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/1.webp',
          },
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/2.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/2.webp',
          }
        ]
      },
      {
        title:'360 Panoramic Apartment (11700 sqft)',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
          }
        ]
      },
      {
        title:'270 Panoramic Apartment (5850 sqft)',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/1.webp',
          },
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/2.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/2.webp',
          },
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/3.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/3.webp',
          }
        ]
      },
    ]
  }
};

const AeroOneGurgaon = () => {
  return <MicroPageGurgaon1 data={data} />;
};

export default AeroOneGurgaon;
