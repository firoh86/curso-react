import React, { Component } from "react";
import image1 from "../images/burguer1.png";
import image2 from "../images/burguer2.png";
import image3 from "../images/burguer3.png";
import image4 from "../images/burguer4.png";
import Info from "../info/Info.js";
class Home extends Component {
  state = {
    images: ["../images/logo_burguer.png"]
  };
  Slideshow = () => {};
  render() {
    return (
      <div className="home-container">
        <div className="slider">
          <div className="slider-show">
            <img alt="a" src={image1} />
            <img alt="a" src={image2} />
            <img alt="a" src={image3} />
            <img alt="a" src={image4} />
          </div>
        </div>
        <Info></Info>
      </div>
    );
  }
}

export default Home;
