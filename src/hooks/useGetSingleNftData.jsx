import { useState, useEffect } from "react";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";
import axios from "axios";

export default function useGetSingleNftData(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [nftData, setNftData] = useState({});

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

  const mintAddress = new PublicKey(id);

  async function main() {
    setIsLoading(true);

    try {
      const nft = await metaplex.nfts().findByMint({ mintAddress });
      const response = await axios.get(nft.uri);
      setNftData({
        ...nft,
        image: response.data.image,
        description: nft.json.description,
        attributes: nft.json.attributes,
      });
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    main();

    // eslint-disable-next-line
  }, []);

  return { isLoading, nftData };
}
