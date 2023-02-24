import React from "react";
import NftGridList from "./NftGridList";

const ShopNft = ({ nftsData }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row grid`}>
        <NftGridList nftsData={nftsData} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};



export default ShopNft;
