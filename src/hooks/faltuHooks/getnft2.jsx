import { useState, useEffect } from "react";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";

export default function useGetAllNFTsData() {
  const [isLoading, setIsLoading] = useState(false);
  const [singleNftLoading, setSingleNftLoading] = useState(false);
  const [allNfts, setAllNfts] = useState([]);
  const [singleNftDetails, setSingleNftDetails] = useState({})

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

  const getNft = async () => {
    setSingleNftLoading(true);
    try {
      const mintAddress = new PublicKey(
        "GpnMpusHmCiXkJhkTjgAo7PM7XBwyRv9PzVjNpB2GmwL"
      );

      const nft = await metaplex.nfts().findByMint({ mintAddress });
      setSingleNftDetails(nft)
      console.log(nft);
    } catch (error) {
      console.log(error);
    }
    setSingleNftLoading(false);
  };

  async function main() {
    setIsLoading(true);

    const nfts = await metaplex
      .nfts()
      .findAllByCreator({ creator, position: 2 });
    setAllNfts(nfts);

    setIsLoading(false);
  }

  useEffect(() => {
    main();
    // eslint-disable-next-line
  }, []);

  // return { isLoading, allNfts,singleNftLoading,singleNftDetails,getNft };
  return { isLoading, allNfts};

}
