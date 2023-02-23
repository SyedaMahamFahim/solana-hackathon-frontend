import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductGridSingle = ({ product, sliderClassName, spaceBottomClass }) => {
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
            <Link to={"/product/" + product.id}>
              <img className="default-img" src={product.image[0]} alt="" />
            </Link>

            <div className="product-action">
              <div className="pro-same-action pro-cart">
                <Link to={product.id}>Buy now</Link>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </h3>

            <div className="product-price">
              <span>Price:</span>
              <span>{product.price} USD </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductGridSingle;
