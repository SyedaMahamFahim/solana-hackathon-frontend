import React from "react";
import Swiper from "react-id-swiper";

import SectionTitleFour from "../../components/section-title/SectionTitleFour.js";
import { diamondsList } from "../../data";

const CategoryTwoSlider = ({ spaceTopClass, spaceBottomClass }) => {
  // swiper slider settings
  const settings = {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 9,
      },
      576: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
      }}
      className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitleFour
          titleText="Explore Diamonds"
          spaceBottomClass="mb-40"
        />
        <div className="collection-wrap">
          <div className="collection-active">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Swiper {...settings}>
                {diamondsList.map((diamond, key) => {
                  return <div key={key}>{diamond.name}</div>;
                })}
                
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CategoryTwoSlider;



