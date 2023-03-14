import { useState, useEffect } from "react";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";

export default function useGetAllNFTsData() {
  const [isLoading, setIsLoading] = useState(false);
  const [allNfts, setAllNfts] = useState([]);

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
  const creator = new PublicKey("7VS5xQ4knB6ocFH7uExuUHjzwWBkEQbvmvmjnsCGJQE");

  async function main() {
    setIsLoading(true);

    try {
      const nfts = await metaplex
        .nfts()
        .findAllByCreator({ creator, position: 2 });

      setAllNfts(nfts);
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    main();

    // eslint-disable-next-line
  }, []);


  return { isLoading, allNfts };
}
