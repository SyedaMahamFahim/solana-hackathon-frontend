import {
    DiamondsStones,
    Home,
    About,

    MintNFT
  } from "../../pages/index";

const routesLinks=[
    {
        id:1,
        name:"Home",
        path:"/",
        element : <Home/>,
    },
    {
        id:2,
        name:"Diamonds NFTS",
        path:"/diamonds-nfts",
        element : <DiamondsStones/>,
    },
    {
        id:3,
        name:"About",
        path:"/about",
        element : <About/>,
    },
    {
        id:4,
        name:"Mint NFT",
        path:"/mint-your-nft",
        element : <MintNFT/>,
    },   

]

export default routesLinks;