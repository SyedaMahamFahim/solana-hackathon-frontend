import React from "react";
import NftGridSingle from "../../components/nfts/NftGridSingle";

const NftGridList = ({
  nftsData,
  sliderClassName,
  spaceBottomClass,
}) => {
  return (
    <>
      {nftsData.map((nft,index) => {
        return (
         
          <NftGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            nft={nft}
            id={index}
            key={nft.id}
          />
        );
      })}
    </>
  );
};



export default NftGridList;
