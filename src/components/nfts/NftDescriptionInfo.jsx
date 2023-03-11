import React from "react";


const NftDescriptionInfo = () => {
  

  return (
    <div className="product-details-content ml-70">
      <h2>Diamond NFT</h2>
      <div className="product-details-price">
        <span>34$ ≈ 13Eth</span>
      </div>

      <div className="pro-details-list">
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
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
