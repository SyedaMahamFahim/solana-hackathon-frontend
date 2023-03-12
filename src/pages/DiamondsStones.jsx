import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";
import { Breadcrumb, AllNFTsWrapper } from "../wrappers";
import { SectionTitleWithText} from "../components/index";


const DiamondsStones = () => {
  const pathname = "/diamonds-stones";

  return (
    <>
     

      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Stones</BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-70"
          spaceBottomClass="pb-35"
          isH5Required={false}
          paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          h1Text="Diamond Stones"
        />
        
          <AllNFTsWrapper/>
       
      </Layout>
    </>
  );
};

export default DiamondsStones;
