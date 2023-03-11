import React, { Fragment } from "react";
import {
  MarketPlaceTopActionFilter
} from "../../components/index";

const MarketPlaceTopbarFilter = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
  products,
  getSortParams
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <MarketPlaceTopActionFilter
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
        products={products}
        getSortParams={getSortParams}
      />
    </Fragment>
  );
};



export default MarketPlaceTopbarFilter;
