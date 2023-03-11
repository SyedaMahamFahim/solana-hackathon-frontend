import PropTypes from "prop-types";
import React from "react";
import {textGrid} from "../../data/index";
import {TextGridSingle} from "../../components/index";

const TextGrid = ({ spaceBottomClass }) => {
  return (
    <div
      className={`about-mission-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {textGrid &&
            textGrid.map((single, key) => {
              return (
                <TextGridSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

TextGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default TextGrid;
