import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerThirtyFiveSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link to={data.url}>
          <img src={data.image} alt="" />
        </Link>
        <div className="banner-content-5">
          <span>{data.title}</span>
          <h3>{data.subtitle}</h3>
          <Link to={data.url}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerThirtyFiveSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default BannerThirtyFiveSingle;
