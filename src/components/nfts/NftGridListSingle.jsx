import React from "react";
import { Link } from "react-router-dom";

const NftGridListSingle = ({ nft, sliderClassName, spaceBottomClass }) => {
  return (
    <>
      <div
        className={`col-xl-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={"/product/" + nft.id}>
              <img className="default-img" src={nft.image} alt={nft.title} />
            </Link>

            <div className="product-action">
              <div className="pro-same-action pro-cart">
                <a href={"/"} rel="noopener noreferrer" target="_blank">
                  {" "}
                  Buy now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={"/product/" + nft.id}>{nft.name}</Link>
            </h3>

            <div className="product-price">
              <span>
                {nft.price} ~ {nft.cryptoPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Link to={"/product/" + nft.id}>
                    <img
                      className="default-img img-fluid"
                      src={nft.image}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link to={"/product/" + nft.id}>{nft.title}</Link>
                </h3>
                <div className="product-list-price">
                  <span>
                    {nft.price} ~ {nft.cryptoPrice}
                  </span>
                </div>

                {nft.shortDescription ? <p>{nft.shortDescription}</p> : ""}

                <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover">
                    <a href={"/"} rel="noopener noreferrer" target="_blank">
                      {" "}
                      Buy now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftGridListSingle;
