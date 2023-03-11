import React from "react";

const TextGridSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-mission ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
};



export default TextGridSingle;
