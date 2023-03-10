import React from "react";
import MetaTags from "react-meta-tags";
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
      <MetaTags>
        <title>NFT</title>
        <meta
          name="description"
          content="NFT"
        />
      </MetaTags>

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
