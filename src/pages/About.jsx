import React from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";

import { SectionTitleWithText } from "../components/index";

import { Breadcrumb, TextGrid } from "../wrappers";

const About = ({ location }) => {
  const { pathname } = location;

  return (
    <>
      <MetaTags>
        <title>About us</title>
        <meta name="description" content="About page" />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>About us</BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-100"
          spaceBottomClass="pb-55"
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
