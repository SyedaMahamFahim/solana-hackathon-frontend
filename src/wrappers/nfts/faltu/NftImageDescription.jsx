import React from "react";

import { NftDescriptionInfo, NftImageGallery } from "../../components/index";

const NftImageDescription = ({ spaceTopClass, spaceBottomClass, nftData }) => {
  const { image, name } = nftData;
  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <NftImageGallery nftImage={image} nftName={name} />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <NftDescriptionInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftImageDescription;
