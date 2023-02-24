import React from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";
import { SectionTitleWithText } from "../components/index";
import { nftsData } from "../data";

import { Breadcrumb } from "../wrappers";

const IndividualJewellery = ({ location }) => {
  const { pathname } = location;

  return (
    <>
      <MetaTags>
        <title>Flone | About us</title>
        <meta
          name="description"
          content="About page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Stones</BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-80"
          spaceBottomClass="pb-55"
          isH5Required={false}
        />

        {/* <TabNft spaceBottomClass="pb-60" category="fashion" /> */}
      </Layout>
    </>
  );
};

export default IndividualJewellery;
