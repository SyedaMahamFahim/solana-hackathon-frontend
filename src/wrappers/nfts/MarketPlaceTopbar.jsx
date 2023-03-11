import React  from "react";

import { MarketPlaceTopActionFilter } from "../../components/index";

const MarketPlaceTopbar = ({
  getFilterSortParams,
  productCount,
  sortedProductCount,
}) => {
  return (
    <>
      {/* shop top action */}
      <MarketPlaceTopActionFilter
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
      />
    </>
  );
};

export default MarketPlaceTopbar;
