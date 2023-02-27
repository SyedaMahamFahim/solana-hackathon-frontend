import { lazy } from "react";

const IndividualJewellery = lazy(() => import("./IndividualJewellery"));
const DiamondsStones = lazy(() => import("./DiamondsStones"));
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const SingleNFT = lazy(() => import("./SingleNFT"));
const NotFound = lazy(() => import("./NotFound"));
const MintNFT = lazy(() => import("./MintNFT"));


export { DiamondsStones, IndividualJewellery,Home,About,SingleNFT ,NotFound,MintNFT};
