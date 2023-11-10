import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./ImageSlider.css";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="image-container">
            <img className="resize" src={art1} alt="Art One" />
            <Link to="/artists">
              <div className="author-info">
                <h5 className="author">John Atkins</h5>
                <p>Autumnal walk in the forest</p>
              </div>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="image-container">
            <img className="resize" src={art2} alt="Art Two" />
            <Link to="/artists">
              <div className="author-info">
                <h5 className="author">Label</h5>
                <p>Sample Text for Image Two</p>
              </div>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="image-container">
            <img className="resize" src={art3} alt="Art Three" />
            <Link to="/artists">
              <div className="author-info">
                <h5 className="author">Label</h5>
                <p>Sample Text for Image Two</p>
              </div>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="image-container">
            <img className="resize" src={art4} alt="Art Four" />
            <Link to="/artists">
              <div className="author-info">
                <h5 className="author">Label</h5>
                <p>Sample Text for Image Two</p>
              </div>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="image-container">
            <img className="resize" src={art5} alt="Art Five" />
            <Link to="/artists">
              <div className="author-info">
                <h5 className="author">Label</h5>
                <p>Sample Text for Image Two</p>
              </div>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
