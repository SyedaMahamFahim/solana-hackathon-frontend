import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../layouts/Layout";

import { SectionTitleWithText } from "../components/index";

import { HeroSlider, TabNft, DiamondSlider } from "../wrappers";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Home</title>
        <meta
          name="description"
          content="Home"
        />
      </MetaTags>
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSlider />

        {/* section title */}
        <SectionTitleWithText spaceTopClass="pt-95" spaceBottomClass="pb-90" />
        {/* category */}
        <DiamondSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        <br />
        <br />
        {/* tab product */}
        <TabNft spaceBottomClass="pb-60" category="fashion" />
      </Layout>
    </Fragment>
  );
};

export default Home;
