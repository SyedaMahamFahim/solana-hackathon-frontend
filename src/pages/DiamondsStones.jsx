import React from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import ProductGrid from "../wrappers/product/ProductGrid";
import { nftsData } from "../data";

const DiamondsStones = ({ location }) => {
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
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-80"
          spaceBottomClass="pb-55"
          isH5Required={false}
        />
        {/* tab product */}
        <div className="container">
          <div className="row">
            <ProductGrid
              products={nftsData}
              type="new"
              limit={4}
              spaceBottomClass="mb-25"
            />
          </div>
        </div>
        {/* <TabProduct spaceBottomClass="pb-60" category="fashion" /> */}
      </LayoutOne>
    </>
  );
};

export default DiamondsStones;
