import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";

import {
  Breadcrumb,
  NftDescriptionTab,
  NftImageDescription,
} from "../wrappers";

const SingleNFT = ({ location }) => {
  const { pathname } = location;

  return (
    <>
     

      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>NFT</BreadcrumbsItem>

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* product description with image */}
        <NftImageDescription spaceTopClass="pt-100" spaceBottomClass="pb-100" />
        {/* product description tab */}
        <NftDescriptionTab spaceBottomClass="pb-90" />
      </Layout>
    </>
  );
};

export default SingleNFT;
