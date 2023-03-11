
import React, { useState, useEffect } from "react";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";
function GetNFT() {
  const [isLoading, setIsLoading] = useState(false)
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
  const creator = new PublicKey(
    "9QPLuyNKLRdux8Ce5UFpF2xq7fd8Bnb6mfWKkVdCrqsk"
  );

 

  useEffect(() => {
    async function main() {
      setIsLoading(true)
     
  
      const nfts = await metaplex
        .nfts()
        .findAllByCreator({ creator, position: 2 });
      setAllNfts(nfts);
      setIsLoading(false)
    }
    main();
  }, []);
  return (
    <>
 <div>
      NFT
      {
        isLoading ? <div>Loading...</div> : allNfts.map((nft) => {
          return (
            <div key={nft.id}>
              <div>{nft.name}</div>
            </div>
          );
        })
      }
      
    </div>
    </>
  );
}

export default GetNFT;
