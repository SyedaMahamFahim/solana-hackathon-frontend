import React from "react";
import NftGridListSingle from "../../components/nfts/NftGridListSingle";

const NftGridList = ({
  nftsData,
  sliderClassName,
  spaceBottomClass,
}) => {
  return (
    <>
      {nftsData.map((nft) => {
        return (
          <NftGridListSingle
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
