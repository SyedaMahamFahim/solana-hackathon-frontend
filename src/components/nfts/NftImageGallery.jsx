import React from "react";

const NftImageGallery = ({ nftImage, nftName }) => {
  return (
    <>
      <div className="product-large-image-wrapper">
        <div className="single-image">
          <img src={nftImage} className="img-fluid" alt={nftName} />
        </div>
      </div>
    </>
  );
};

export default NftImageGallery;
