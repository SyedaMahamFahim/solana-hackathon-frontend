import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { DiamondsStones, IndividualJewellery,Home ,About,SingleNFT,NotFound} from "./pages/index";

// home pages



const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });

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
                <Route
                  exact
                  path={"/"}
                  component={Home}
                />

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
                    <SingleNFT {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                {/* About */}
                <Route path={"/about"} component={About} />
                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
