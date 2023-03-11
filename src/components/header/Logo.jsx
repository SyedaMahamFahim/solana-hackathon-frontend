import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link to={"/"}>
        <h4
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
        }}
        >DiamXchange</h4>
      </Link>
    </div>
  );
};

export default Logo;
