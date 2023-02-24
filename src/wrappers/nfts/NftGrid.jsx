import React from "react";

import {NftGridSingle} from "../../components/index";
import { nftsData } from "../../data";
const NftGrid = ({
  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <>
      {nftsData.map(nft => {
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





export default NftGrid;