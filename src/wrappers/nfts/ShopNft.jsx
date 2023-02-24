import PropTypes from "prop-types";
import React from "react";
import NftGridList from "./NftGridList";

const ShopNft = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row grid`}>
        <NftGridList products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopNft.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array,
};

export default ShopNft;
