import React from "react";
import NavbarBeforeLogin from "../components/NavbarBeforeLogin";
import ImageSlider from "../components/ImageSlider";
import "./Artworks.css";

const Artworks = () => {

  return (
    <div className="body">
        <NavbarBeforeLogin/>
        <ImageSlider />
    </div>
  );
};

export default Artworks;
