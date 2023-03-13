import React from "react";


const NftDescriptionInfo = ({nftName,nftSymbol,nftDescription}) => {
  

  return (
    <div className="product-details-content ml-70">
      <h2>{nftName}</h2>
      <div className="product-details-price">
        <span>34 {nftSymbol}</span>
      </div>

      <div className="pro-details-list">
        <p>
          {nftDescription}
        </p>
      </div>

      <div className="pro-details-quality">
        <div className="pro-details-cart btn-hover ml-0">
          <a href={"/"} rel="noopener noreferrer" target="_blank">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};


export default NftDescriptionInfo;
