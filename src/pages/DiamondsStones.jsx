import React from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";
import { Breadcrumb, AllNFTsWrapper } from "../wrappers";
import { SectionTitleWithText } from "../components/index";
import useGetAllNFTsData from "../hooks/useGetAllNFTsData";
const DiamondsStones = () => {
  const { isLoading, allNfts } = useGetAllNFTsData();
  const pathname = "/diamonds-stones";

  return (
    <>
      <MetaTags>
        <title>Diamond Stones</title>
        <meta name="description" content="Diamond Stones" />
      </MetaTags>

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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <AllNFTsWrapper nftsData={allNfts.length !== 0 ? allNfts : []} />
        )}
      </Layout>
    </>
  );
};

export default DiamondsStones;
