import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { MarketPlaceTopActionFilter } from "../../components/index";

const MarketPlaceTopbar = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <MarketPlaceTopActionFilter
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
      />
    </Fragment>
  );
};

MarketPlaceTopbar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default MarketPlaceTopbar;
