import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";

const ProductGridListSingle = ({
  product,
  currency,
 
  sliderClassName,
  spaceBottomClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-4 col-sm-6 ${
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
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Buy now{" "}
                </a>
              </div>
              
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </h3>

            <div className="product-price">
             
                <span>{currency.currencySymbol + finalProductPrice} </span>
              
            </div>
          </div>
        </div>
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Link to={"/product/" + product.id}>
                    <img
                      className="default-img img-fluid"
                      src={product.image[0]}
                      alt=""
                    />
                    {product.image.length > 1 ? (
                      <img
                        className="hover-img img-fluid"
                        src={product.image[1]}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link to={"/product/" + product.id}>{product.name}</Link>
                </h3>
                <div className="product-list-price">
                  
                    <span>{currency.currencySymbol + finalProductPrice} </span>
                
                </div>
               
                {product.shortDescription ? (
                  <p>{product.shortDescription}</p>
                ) : (
                  ""
                )}

                <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover">
                  <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
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
      {/* product modal */}
      
    </Fragment>
  );
};



export default ProductGridListSingle;
