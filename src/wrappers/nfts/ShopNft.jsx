import React, { useEffect } from "react";
import NftGridList from "./NftGridList";

const ShopNft = ({ nftsData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shop-bottom-area mt-15">
      <div className={`row grid`}>
        <NftGridList nftsData={nftsData} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

export default ShopNft;
