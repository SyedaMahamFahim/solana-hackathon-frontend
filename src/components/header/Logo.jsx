import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link to={"/"}>
        <img alt="" src={imageUrl} />
      </Link>
    </div>
  );
};



export default Logo;
