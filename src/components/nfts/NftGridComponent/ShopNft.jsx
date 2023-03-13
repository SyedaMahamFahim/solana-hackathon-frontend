import React, { useEffect } from "react";
import NftGridSingle from "./sub-component/NftGridSingle";

const ShopNft = ({ nftsData }) => {
  console.log("ShopNft nftsData", nftsData	)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shop-bottom-area mt-15">
      <div className={`row grid`}>
        {nftsData.map((nft, index) => {
          return (
            <NftGridSingle
              spaceBottomClass={"mb-25"}
              nft={nft}
              id={index}
              key={nft.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopNft;
