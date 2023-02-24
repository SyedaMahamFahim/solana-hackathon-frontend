import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NftGridSingle = ({ nft, sliderClassName, spaceBottomClass }) => {
  return (
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={"/product/" + nft.id}>
              <img className="default-img" src={nft.image} alt="" />
            </Link>

            <div className="product-action">
              <div className="pro-same-action pro-cart">
                <Link to={nft.id}>Buy now</Link>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={"/product/" + nft.id}>{nft.title}</Link>
            </h3>

            <div className="product-price">
              <span>Price:</span>
              <span>{nft.price} USD </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NftGridSingle;
