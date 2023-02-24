import PropTypes from "prop-types";
import React from "react";
import textGridData from "../../data/text-grid/text-grid-one.json";
import TextGridSingle from "../../components/text-grid/TextGridSingle.js";

const TextGrid = ({ spaceBottomClass }) => {
  return (
    <div
      className={`about-mission-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {textGridData &&
            textGridData.map((single, key) => {
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
