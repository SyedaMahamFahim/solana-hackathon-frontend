import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";

import { SectionTitleWithText } from "../components/index";

import { Breadcrumb, TextGrid } from "../wrappers";

const About = () => {
  const pathname = "/about";

  return (
    <>
     
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>About us</BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-70"
          spaceBottomClass="pb-35"
          isH5Required={true}
          paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          h1Text="About Us"
          h5Text="Who we are"
        />

        {/* text grid */}
        <TextGrid spaceBottomClass="pb-70" />
      </Layout>
    </>
  );
};

export default About;
