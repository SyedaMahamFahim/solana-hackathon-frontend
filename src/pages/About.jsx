import React from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import TextGridOne from "../wrappers/text-grid/TextGridOne";

const About = ({ location }) => {
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
      <BreadcrumbsItem to={pathname}>About us</BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-100"
          spaceBottomClass="pb-55"
          isH5Required={true}
        />

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />
      </Layout>
    </>
  );
};

export default About;
