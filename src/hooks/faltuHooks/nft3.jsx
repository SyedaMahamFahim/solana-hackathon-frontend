import { useState, useEffect } from "react";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";
import axios from "axios";

export default function useGetAllNFTsData() {
  const [isLoading, setIsLoading] = useState(false);
  const [allNfts, setAllNfts] = useState([]);
  const [updatedNftArray, setUpdatedNftArray] = useState([]);
  const [imageUri, setImageUri] = useState("");
  const [nftDetails, setNftDetails] = useState({});
  const connection = new Connection(clusterApiUrl("devnet"));
  const user = Keypair.generate();

  const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(user))
    .use(
      bundlrStorage({
        address: "https://devnet.bundlr.network",
        providerUrl: "https://api.devnet.solana.com",
        timeout: 60000,
      })
    );
  const creator = new PublicKey("9QPLuyNKLRdux8Ce5UFpF2xq7fd8Bnb6mfWKkVdCrqsk");

  const getImageUri = async (nftUri) => {
    try {
      const response = await axios.get(nftUri.uri);
      setImageUri(response.data.image);
    } catch (error) {
      console.log(error);
    }

    return imageUri;
  };

  async function main() {
    setIsLoading(true);

    try {
      const nfts = await metaplex
        .nfts()
        .findAllByCreator({ creator, position: 2 });

      // getImageUri
      // nfts.map((nft, index) => {
      //   getImageUri(nft.uri);
      //   setNftDetails({
      //     ...nft,
      //     [imageUri]: imageUri,
      //   });
      //   setUpdatedNftArray([...updatedNftArray, nftDetails]);
      // });

      //   const nft = await metaplex.nfts().findByMint({ mintAddress });
      // });
      //     const nftAddress= nft.address;
      // console.log(nftAddress.toBase58());

      // const newNftObj = nfts.map((nft, index) => {
      //   return console.log(nft.address.toBase58());
      // });
      setAllNfts(nfts);

      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    main();

    // eslint-disable-next-line
  }, [allNfts, isLoading]);

  console.log("allNfts", allNfts);
  // console.log("updatedNftArray", updatedNftArray);

  return { isLoading, allNfts };
  // return{
  //   !isLoading && allNfts.length > 0 ? { isLoading, allNfts } : { isLoading, allNfts: [] }
  // }
}
