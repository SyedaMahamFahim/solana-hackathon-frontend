import React, { Suspense } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

import {
  DiamondsStones,
  IndividualJewellery,
  Home,
  About,
  SingleNFT,
  NotFound,
  MintNFT
} from "./pages/index";
function App() {
  return (
    <>
      <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Routes>
                {/* Home Page */}
                <Route exact path={"/"} element={<Home/>} />

                {/* Diamonds stones */}
                <Route path={"/diamonds-stones"} element={<DiamondsStones/>} />
                {/* Individual Jewellery */}
                <Route
                  path={"/individual-jewellery"}
                  element={<IndividualJewellery/>}
                />

                {/* Single NFT  */}
                <Route
                  path={"/nft/:id"}
                  render={(routeProps) => (
                    <SingleNFT
                      {...routeProps}
                      key={routeProps.match.params.id}
                    />
                  )}
                />
                {/* About */}
                <Route path={"/about"} element={<About/>} />
                {/* MintNFT */}
                <Route path={"/mint-your-nft"} element={<MintNFT/> } />

                <Route exact element={<NotFound/>} />
              </Routes>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
    </>
  );
}

export default App;
