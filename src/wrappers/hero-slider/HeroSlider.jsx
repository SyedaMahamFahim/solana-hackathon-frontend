import React from "react";
import { heroSlider } from "../../data/index";

import { HeroSliderSingle } from "../../components/index";

const HeroSlider = () => {
 
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
       
        {heroSlider &&
            heroSlider.map((single, key) => {
              return (
                <HeroSliderSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        
      </div>
    </div>
  );
};

export default HeroSlider;
