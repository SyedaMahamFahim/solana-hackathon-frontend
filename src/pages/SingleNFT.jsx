import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import Layout from "../layouts/Layout";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../wrappers/product/ProductImageDescription";

const SingleNFT = ({ location, product }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Product Page</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Shop Product</BreadcrumbsItem>

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        hey wolrd
        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />
        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        />
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      (single) => single.id === itemId
    )[0],
  };
};

export default connect(mapStateToProps)(SingleNFT);
