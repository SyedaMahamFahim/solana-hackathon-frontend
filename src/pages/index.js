import { lazy } from "react";

const IndividualJewellery = lazy(() => import("./IndividualJewellery"));
const DiamondsStones = lazy(() => import("./DiamondsStones"));

export { DiamondsStones, IndividualJewellery };
