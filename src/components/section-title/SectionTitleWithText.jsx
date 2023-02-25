import React from "react";

const  SectionTitleWithText = ({ spaceTopClass, spaceBottomClass,isH5Required,h5Text,h1Text,paraText}) => {

  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
         
          <h5  style={{
            display: isH5Required ? 'block' : 'none'
          }}>{h5Text}</h5>
          <h1>{h1Text}</h1>
          <p>
            {paraText}
          </p>
        </div>
      </div>
    </div>
  );
};


export default SectionTitleWithText;
