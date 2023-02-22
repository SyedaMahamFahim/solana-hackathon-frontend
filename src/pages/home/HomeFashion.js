import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
         {/* hero slider */}
         <HeroSliderTen />
     
 {/* section title */}
 <SectionTitleWithText spaceTopClass="pt-95" spaceBottomClass="pb-90" />
 {/* category */}
 <CategoryTwoSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
<br/><br/>
        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
