import React, { Suspense } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Configurations from "./configurations/Configurations";
// import 'swiper/swiper.scss' from 'swiper/swiper.scss';



const App = () => {
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
       
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
              <Configurations/>
            </Suspense>
          </ScrollToTop>
        
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

export default App;
