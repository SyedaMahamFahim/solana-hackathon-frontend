import React, { Fragment } from "react";



import {
  Header,
  Footer
} from "../wrappers";
const Layout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
}) => {
  return (
    <Fragment>
      <Header
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <Footer
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-20"
        spaceBottomClass="pb-20"
      />
    </Fragment>
  );
};

export default Layout;
