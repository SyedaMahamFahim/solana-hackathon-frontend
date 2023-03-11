import React from "react";
import NftGridSingle from "../../components/nfts/NftGridSingle";

const NftGridList = ({
  nftsData,
  sliderClassName,
  spaceBottomClass,
}) => {
  return (
    <>
      {nftsData.map((nft) => {
        return (
         
          <NftGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            nft={nft}
          
            key={nft.id}
          />
        );
      })}
    </>
  );
};



export default NftGridList;
