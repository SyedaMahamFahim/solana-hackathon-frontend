import React from "react";
import { Routes, Route } from "react-router-dom";

import { routesLinks } from "../data/index";
import { SingleNFT, NotFound } from "../pages/index";

const Configuration = () => {
  return (
    <>
      <Routes>
        {routesLinks.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}

        {/* Single NFT  */}
        <Route path={"/nft/:id"} element={<SingleNFT />} />

        <Route exact element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Configuration;
