import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../layouts/Layout";
import { SectionTitleWithText, ErrorMessage } from "../components/index";
import { Breadcrumb, MineNftInputs } from "../wrappers";

import { TransactionContext } from "../context/TransactionsProvider";

const MintNFT = () => {
  const pathname = "/mint-your-nft";
  const { isPhantomInstall, isPhantomConnected } =
    React.useContext(TransactionContext);
  return (
    <>
      
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Mint Your NFT</BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText
          spaceTopClass="pt-70"
          spaceBottomClass="pb-35"
          isH5Required={false}
          paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          h1Text="Mint Your NFT"
        />


        <ErrorMessage />

        {isPhantomInstall && isPhantomConnected && <MineNftInputs />}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
};

export default MintNFT;
