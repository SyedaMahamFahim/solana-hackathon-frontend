import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithoutText = ({ titleText, spaceBottomClass }) => {
  return (
    <div
      className={`section-title-3 ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <h4>{titleText}</h4>
    </div>
  );
};

SectionTitleWithoutText.propTypes = {
  spaceBottomClass: PropTypes.string,
  titleText: PropTypes.string,
};

export default SectionTitleWithoutText;
