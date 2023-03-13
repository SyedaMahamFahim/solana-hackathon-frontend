import React from "react";

import { NftDescriptionInfo, NftImageGallery } from "../../../components/index";
const NftImageDescription = ({ spaceTopClass, spaceBottomClass, nftData }) => {
  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <NftImageGallery nftImage={nftData.image} nftName={nftData.name} />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <NftDescriptionInfo
              nftName={nftData.name}
              nftSymbol={nftData.symbol}
              nftDescription={nftData.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftImageDescription;
