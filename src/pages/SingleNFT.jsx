import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";
import { useParams } from "react-router-dom";
import useGetSingleNftData from "../hooks/useGetSingleNftData";
import {
  Breadcrumb,
  NftDescriptionTab,
  NftImageDescription,
} from "../wrappers";
import { Loader } from "../components";

const SingleNFT = () => {
  // get product id from url
  const { id } = useParams();

  console.log("this is id", id);
  const { isLoading, nftData } = useGetSingleNftData(id);

  if (isLoading) {
    console.log("this is loading");
  } else {
    console.log("this is nftData", nftData);
  }

  return (
    <>
      <Layout headerTop="visible">
        {/* breadcrumb */}

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={`/nft/${id}`}>{nftData.name}</BreadcrumbsItem>
            <Breadcrumb />
            {/* product description with image */}
            <NftImageDescription
              spaceTopClass="pt-100"
              spaceBottomClass="pb-100"
              nftData={nftData}
            />
            {/* product description tab */}
            <NftDescriptionTab spaceBottomClass="pb-90" nftData={nftData} />
          </>
        )}
      </Layout>
    </>
  );
};

export default SingleNFT;
