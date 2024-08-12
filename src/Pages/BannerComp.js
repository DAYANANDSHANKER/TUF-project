import React from "react";
import "./BannerComp.css"; // Assuming you place your styles in this file
import bannerImg from "../Assets/Images/banner.webp";

const BannerComp = ({ description, link }) => {
  return (
    <div className="fullscreen-container">
      {/* <img src={imageUrl} alt="Full Screen" className="fullscreen-image" /> */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          alt="Full Screen"
          className="fullscreen-image"
          src={bannerImg}
        ></img>
      </a>
      <div className="description-container">
        <p className="description-text">{description}</p>
      </div>
    </div>
  );
};

export default BannerComp;
