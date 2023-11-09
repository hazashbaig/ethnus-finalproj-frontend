import NavbarBeforeLogin from "../components/NavbarBeforeLogin";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <NavbarBeforeLogin />
      <div className="content">
        <div className="left-part">
          <div className="container">
            <p className="heading">Colossal Arts</p>
            <p className="description">
              Whether art is your passion or profession, you've come to the right
              place.
            </p>
          </div>
        </div>
        <div className="right-part">
          <div className="image-overlay">
            <img
              src="https://d5i0d1vvu790l.cloudfront.net/60dec96a510fef5af830e177/media-library/2018-12-14-022-768x576_5156113b8c6e5d.jpg"
              alt="Art"
            />
          </div>
        </div>
      </div>
    </div>
  )};

export default HomePage;
