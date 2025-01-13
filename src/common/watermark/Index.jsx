import React from "react";
import './watermark.css';
import * as CONFIG from '../../config/config';


const Watermark = ()=>{
  return(
    <div className="WaterMarkContainer">
    <div className="Watermark_artistic">Artistic Impression</div>
    
    <div className="Watermark_logo"><img src={`${CONFIG.IMAGE_URL}new_logo.png`} alt="logo" /></div>

    </div>
  )
}

export default Watermark;