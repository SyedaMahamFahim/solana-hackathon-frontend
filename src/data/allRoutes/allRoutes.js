import {
  DiamondsStones,
  IndividualJewellery,
  Home,
  About,
  SingleNFT,
  NotFound,
  MintNFT,
} from "../../pages";

const allRoutes = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "diamonds-stones",
    element: <DiamondsStones />,
  },
  {
    path: "individual-jewellery",
    element: <IndividualJewellery />,
  },
  {
    path: "/product/:id",
    element: <SingleNFT />,
  },
  {
    path: "mint-your-nft",
    element: <MintNFT />,
  },
];
export default allRoutes;
