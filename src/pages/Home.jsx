import React from "react";
import Layout from "../layouts/Layout";

import { SectionTitleWithText } from "../components/index";

import { HeroSlider, AllNFTsWrapper, DiamondSlider } from "../wrappers";

const Home = () => {
  return (
    <>
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSlider />

        {/* section title */}
        <SectionTitleWithText
          spaceTopClass="pt-70"
          spaceBottomClass="pb-55"
          isH5Required={true}
          paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          h1Text="About Us"
          h5Text="Who we are"
        />
        {/* category */}
        <DiamondSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        <br />
        <br />
        {/* tab product */}
        <div className="pt-50 pb-100">
          <AllNFTsWrapper />
        </div>
      </Layout>
    </>
  );
};

export default Home;
