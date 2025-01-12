import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCard from "../../Card";
import "./BangaloreTypology.css";
import CustomSlider from "./CustomSlider";

import * as CONFIG from "../../../../config/config";
const BangaloreTypology = ({ data }) => {
  const [slides1, setSlides1] = useState([]);
  const [slides2, setSlides2] = useState([]);
  const [slides3, setSlides3] = useState([]);
  const { bhk1, bhk2, bhk3 } = data;

  useEffect(() => {
    // Function to generate image paths dynamically
    const getImagePaths = () => {
      const imagePaths = [];
      const rooms = ["1bhk", "2bhk", "3bhk"];

      rooms.forEach((room) => {
        for (let i = 1; i <= 5; i++) { // Adjust based on the number of images in each folder
          const path = `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/${room}/${i}.png`; // Example path
          imagePaths.push(path);
        }
      });

      return imagePaths;
    };

    const imagePaths = getImagePaths();

    // Create an array for all BHK states
    const bhkArray = [bhk1, bhk2, bhk3];
    const slidesArray = [setSlides1, setSlides2, setSlides3];

    // Loop through bhkArray and slidesArray to set the state dynamically
    bhkArray.forEach((bhkData, index) => {
      const imageSlides = imagePaths.map((imagePath, i) => ({
        image: imagePath, // Image path
        title: bhkData[i]?.title || "Default Title", // Use corresponding metadata
        area: bhkData[i]?.area || "Default Area", // Use corresponding metadata
        link: bhkData[i]?.link || "#", // Use corresponding metadata
      }));

      // Dynamically call the correct setSlides function
      slidesArray[index](imageSlides);
    });
  }, [bhk1, bhk2, bhk3]);

  return (
    <section className="section typology_section">
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">Typologies</h4>
      </div>
      <Container>
        <ul className="nav nav-tabs pb-0" id="myTab" role="tablist">
          <li className="nav-item p-0" role="presentation">
            <button
              className=" active"
              id="typo1-tab"
              data-bs-toggle="tab"
              data-bs-target="#typo1"
              type="button"
              role="tab"
              aria-controls="typo1"
              aria-selected="true"
            >
              1 BHK
            </button>
          </li>
          <li className="nav-item p-0" role="presentation">
            <button
              className=""
              id="typo2-tab"
              data-bs-toggle="tab"
              data-bs-target="#typo2"
              type="button"
              role="tab"
              aria-controls="typo2"
              aria-selected="false"
            >
              2 BHK
            </button>
          </li>
          <li className="nav-item p-0" role="presentation">
            <button
              className=""
              id="typo3-tab"
              data-bs-toggle="tab"
              data-bs-target="#typo3"
              type="button"
              role="tab"
              aria-controls="typo3"
              aria-selected="false"
            >
              3 BHK
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="typo1"
            role="tabpanel"
            aria-labelledby="typo1-tab"
          >
            <CustomSlider slides={slides1} />
          </div>
          <div
            className="tab-pane fade"
            id="typo2"
            role="tabpanel"
            aria-labelledby="typo2-tab"
          >
            <CustomSlider slides={slides2} />
          </div>
          <div
            className="tab-pane fade"
            id="typo3"
            role="tabpanel"
            aria-labelledby="typo3-tab"
          >
            <CustomSlider slides={slides3} />
          </div>
        </div>
      </Container>

      <Container>
        <div className="about">
          <CustomCard
            className="px-0 pb-0"
            desc="Explore intricately designed floor plans catering to diverse preferences while maximizing space efficiency. Each layout is an architectural triumph, suffused with natural light and effortless elegance."
          />
        </div>
      </Container>
    </section>
  );
};

export default BangaloreTypology;
