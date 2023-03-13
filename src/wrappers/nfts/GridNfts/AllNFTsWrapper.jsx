import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { getSortedProducts } from "../../../helpers/product";
import useGetAllNFTsData from "../../../hooks/useGetAllNFTsData";

import { Loader, ShopNft } from "../../../components/index";

const AllNFTsWrapper = () => {
  const { isLoading, allNfts } = useGetAllNFTsData();

  console.log(allNfts, "allNfts");
  console.log(isLoading);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 8;

  // eslint-disable-next-line
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  // eslint-disable-next-line
  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    if (!isLoading && allNfts.length > 0) {
      let sortedProducts = getSortedProducts(allNfts, sortType, sortValue);
      const filterSortedProducts = getSortedProducts(
        sortedProducts,
        filterSortType,
        filterSortValue
      );
      sortedProducts = filterSortedProducts;
      setSortedProducts(sortedProducts);
      setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }
  }, [offset, sortType, sortValue, filterSortType, filterSortValue, allNfts,
    isLoading]);

  return (
    <>
      <div mt={45} mb="45">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="shop-area pt-95 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 order-1 order-lg-2">
                  {/* shop page content default */}

                  <ShopNft nftsData={currentData} />
                  
                  

                  {/* nft  pagination */}
                  <div className="pro-pagination-style text-center mt-30 mb-60">
                    <Paginator
                      totalRecords={sortedProducts.length}
                      pageLimit={pageLimit}
                      pageNeighbours={2}
                      setOffset={setOffset}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      pageContainerClass="mb-0 mt-0"
                      pagePrevText="«"
                      pageNextText="»"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllNFTsWrapper;
