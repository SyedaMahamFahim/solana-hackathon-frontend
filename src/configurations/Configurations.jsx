import React from "react";
import {  BrowserRouter,Routes, Route } from "react-router-dom";
import { allRoutes } from "../data";

const Configurations = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {allRoutes.map((val, index) => {
            return <Route path={val.path} element={val.element} key={index} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Configurations;
