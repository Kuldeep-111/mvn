import React from "react";
import * as CONFIG from '../../../../config/config';
import MicroPageGurgaonPhase2 from "../../MicroPageGurgaonPhase2";


export const AthensPhase2Data = {
  header:{
    // classData:"bg_black",
    title:'Athens Gurgaon Phase 2',
    sidebar_section:[
      {title:'Overview',link:'microOverview'},
      {title:'MVN ID Brochure',link:'downloadBrochure'},
      {title:'Elevation',link:'MicroElevation'},
      {title:'Amenities',link:'MicroAmenities'},
      {title:'Typologies',link:'MicroTypology'},
      {title:'Location Map',link:'MicroLocationMap'},
    ],
  },
  overview: {
    title: "MVN Athens",
    extra: "Your dream paradise",
    desc:[
      "MVN is a group formed with the vision of delivery of projects that inbibe its spirit of perfection & consumer satisfaction based on the philosophy of trust & integrity. Their clear vision leads to a seamless experience for the customers.",
      "Our happiness dwells in the hearts of our home buyers. So, where somebody talks about customer satisfaction we are all ears. All our efforts are committed towards it. Delivery before time, Affordable luxury, Reliability & Quality in terms of material used for construction backed by a dedicated in -house team to look after the day to day affairs. MVN Athens, a residential affordable housing scheme by the State of Haryana, a gated community in sector-5, Sohna- Gurugram is home to more than 1104 families in Phase I & II."
    ],
    rera:"RERA NO. RC/REP/HARERA/GGM/326/58/2019/20",
  },
  gallery: {
      gallery:"Gallery",
      content: {
        desc: "Perfect amalgamation of comfort, convenience, and cost effectiveness.",
      },
      images: [
        {
          assets: {
            desktop: `${CONFIG.IMAGE_URL_Athens_Phase_2}gallery/1.webp`,
            mobile: `${CONFIG.IMAGE_URL_Athens_Phase_2}gallery/1.jpg`,
          },
          watermark: "right",
        },
        {
          assets: {
            desktop: `${CONFIG.IMAGE_URL_Athens_Phase_2}gallery/2.webp`,
            mobile: `${CONFIG.IMAGE_URL_Athens_Phase_2}gallery/2.jpg`,
          },
          watermark: "right",
        },
        {
          assets: {
            desktop: `${CONFIG.IMAGE_URL_Athens_Phase_2}gallery/3.webp`,
            mobile: `${CONFIG.IMAGE_URL_Athens_Phase_2}gallery/3.jpg`,
          },
          watermark: "left",
        },
      ],
  },
  features:{
    title:"Feature So Unique",
    desc:"Designed to delight at every step.",
    src:"/public/assets/athens-gurgaon-phase-2/elevation.png",
    list:[
      "Gated complex with 24 Hour Security",
      "Smart distribution of power and water supply",
      "Jogging track",
      "Commercial Complex",
      "Organised landscape",
      "Toddlers Sand Pitch",
      "90% RCC work",
      "CCTV Security"
    ],
  },
  amenities: {
      bangalore_amenities:"bangalore_amenities",
      path : CONFIG.IMAGE_URL_Athens_Phase_2,
      content: {
        desc: "Immerse yourself in a luxurious array of world-class amenities crafted to elevate your lifestyle.",
      },
      data: [
        {
          name: "Kids Play Area",
          imgSrc: {
            desktop: "1.jpg",
            mobile: "1.jpg",
          },
          desc: "A dynamic, fun space to keep children active and entertained.",
        },
        {
          name: "Landscaped outdoor Seating",
          imgSrc: {
            desktop: "2.jpg",
            mobile: "2.jpg",
          },
          desc: "Scenic seating areas for outdoor conversations and relaxation.",
        },
        {
          name: "Lawn",
          imgSrc: {
            desktop: "3.jpg",
            mobile: "3.jpg",
          },
          desc: "Expansive, well-manicured greens ideal for picnics or quiet relaxation.",
        },
        {
          name: "24/7 Security",
          imgSrc: {
            desktop: "4.jpg",
            mobile: "4.jpg",
          },
          desc: "Cutting-edge security ensuring a worry-free lifestyle.",
        },
        {
          name: `Landscaped Walkway`,
          imgSrc: {
            desktop: "5.jpg",
            mobile: "5.jpg",
          },
          desc: "Comfortable indoor nooks designed for a blend of elegance and coziness.",
        },
        {
          name: "Clean & Peaceful environment",
          imgSrc: {
            desktop: "6.jpg",
            mobile: "6.jpg",
          },
          desc: "A calm, pollution-free space promoting well-being.",
        },
        {
          name: "Landscaped Indoor Seating",
          imgSrc: {
            desktop: "7.jpg",
            mobile: "7.jpg",
          },
          desc: "Comfortable indoor nooks designed for a blend of elegance and coziness.",
        },
        {
          name: "Community Center",
          imgSrc: {
            desktop: "8.jpg",
            mobile: "8.jpg",
          },
          desc: "A versatile space for events, meetings, and fostering connections.",
        },
      ],
  },
  typologies: {
        desc:"Discover expertly crafted floor plans that maximize space, natural light, and luxurious living.",
        tabs_name:['TOWER A','TOWER B'],
        tabs:{   
          tower_c: [
          {
            title: "TOWER A1",
            // area: "3419 sqft",
            link: "#",
            src: `${CONFIG.IMAGE_URL_Athens_Phase_2}floor-plan/plansf1.jpg`
          },
          {
            title: "TOWER A2",
            // area: "3419 sqft",
            link: "#",
            src: `${CONFIG.IMAGE_URL_Athens_Phase_2}floor-plan/plansf2.jpg`
          },
        ],  
        tower_d: [
          {
            title: "TOWER B1",
            // area: "3375 sqft",
            link: "#",
            src: `${CONFIG.IMAGE_URL_Athens_Phase_2}floor-plan/plansf3.jpg`
          },
        {
          title: "TOWER B2",
          // area: "3419 sqft",
          link: "#",
          src: `${CONFIG.IMAGE_URL_Athens_Phase_2}floor-plan/plansf4.jpg`
        },
        {
          title: "TOWER B3,B5,B7",
          // area: "3419 sqft",
          link: "#",
          src: `${CONFIG.IMAGE_URL_Athens_Phase_2}floor-plan/plansf5.jpg`
        }
        // {
        //   title: "Upper Level Plan",
        //   area: "3375 sqft",
        //   link: "#",
        //   src: `${CONFIG.IMAGE_URL_Athens_Phase_2}floor-plan/towerd/3.png`
        // },
      ],
      }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage", 
    desc:"Strategically Located for Convenience",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_Athens_Phase_2}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_Athens_Phase_2}location-mapm.jpg`,
    },
    
    bangaloreLocation: true,
    chunks:3,
    sliderItems : [
      { title: "IGI Airport", desc: "40 Mins" },
      { title: "Huda City Center", desc: "20 Mins" },
      { title: "Rajiv Chowk", desc: "18 Mins" },
      { title: "IFFCO Chowk", desc: "22 Mins" },
      { title: "KMP (Kundali Manaser Palwal) Expressway", desc: "05 Mins" },
      { title: "IMT (Industrial Model Town) Sohna", desc: "05 Mins" },
      { title: "Golf Course Road", desc: "20 Mins" },
      { title: "Aravalis in the Backdrop", desc: "" },
      { title: "Universities / Schools (GD Goenka / RK Manglam / Ryan / Pathways/DPS)", desc: "05 - 10 Mins" },
      { title: "Hospitals", desc: "10 Mins" },
      { title: "Malls", desc: "10 Mins" },
      { title: "DMIC (Delhi Mumbai Industrial Coridor)", desc: "05 Mins" },
    ]
    
  },
  
};



const Athens = () => {
  window.scrollTo(0, 0);
  return (
    <MicroPageGurgaonPhase2 data={data} projectName={'MVN-Athens-Phase-2'}/>
  )
};

export default Athens;
