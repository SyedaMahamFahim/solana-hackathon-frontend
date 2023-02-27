import React, { Suspense } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Configurations from "./configurations/Configurations";
import {
  DiamondsStones,
  IndividualJewellery,
  Home,
  About,
  SingleNFT,
  NotFound,
  MintNFT
} from "./pages/index";


const App = () => {
  return (
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
              <Switch>
                {/* Home Page */}
                <Route exact path={"/"} component={Home} />

                {/* Diamonds stones */}
                <Route path={"/diamonds-stones"} component={DiamondsStones} />
                {/* Individual Jewellery */}
                <Route
                  path={"/individual-jewellery"}
                  component={IndividualJewellery}
                />

                {/* Single NFT  */}
                <Route
                  path={"/product/:id"}
                  render={(routeProps) => (
                    <SingleNFT
                      {...routeProps}
                      key={routeProps.match.params.id}
                    />
                  )}
                />
                {/* About */}
                <Route path={"/about"} component={About} />
                {/* MintNFT */}
                <Route path={"/mint-your-nft"} component={MintNFT } />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

export default App;
