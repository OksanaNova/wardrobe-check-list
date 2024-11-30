import { useState } from "react";
import { slides } from "./slides";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";

function Banner() {
  const [picture, setPicture] = useState(0);
  const { image } = slides[picture];

  const backButton = () => {
    setPicture((item => {
      item --;
      if (item < 0) {
        return slides.length - 1;
      }
      return item;
    }))
  }

  const nextButton = () => {
    setPicture((item => {
      item ++;
      if (item > slides.length - 1) {
        item = 0;
      }
      return item;
    }))
  }

  return (
    <div className="banner_container">
      <div className="slides_container">
        <div>
          <img className="slide" src={image} alt="street_style" />
        </div>

        <div className="arrow_container">
          <div>
            <button className="arrow" onClick={backButton}>
              <img src={leftArrow} alt="btn" />
            </button>
          </div>

          <div>
            <button className="arrow" onClick={nextButton}>
              <img src={rightArrow} alt="btn" />
            </button>
          </div>
        </div>
      </div>

      <div className="header_container">
        <p className="chapter">fashion</p>
        <h2>
          10 Wardrobe Basics Every Woman Should Own, According to Our Stylists
        </h2>
        <p className="slogan">Only the essentials.</p>
      </div>
    </div>
  );
}

export default Banner;
