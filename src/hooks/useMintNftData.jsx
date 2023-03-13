import { useState } from "react";
import { Metaplex, bundlrStorage, toBigNumber } from "@metaplex-foundation/js";
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

const useMintNftData = ({
  tokenName,
  symbol,
  sellerFeeBasisPoints,
  nftData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { connection } = useConnection();
  const wallet = useWallet();
  const { publicKey } = useWallet();

  async function createNft(metaplex, uri, user) {
    const { nft } = await metaplex
      .nfts()
      .create(
        {
          uri: uri,
          name: tokenName,
          sellerFeeBasisPoints: sellerFeeBasisPoints,
          symbol: symbol,
          creators: [{ address: user, share: 100 }],
          isMutable: false,
          maxSupply: toBigNumber(1),
        },
        { commitment: "finalized" }
      )
      .then();

    console.log(
      `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`
    );

    return nft;
  }

  async function mint() {
    setIsLoading(true);
    const metaplex = Metaplex.make(connection)
      .use(walletAdapterIdentity(wallet))
      .use(
        bundlrStorage({
          address: "https://devnet.bundlr.network",
          providerUrl: "https://api.devnet.solana.com",
          timeout: 60000,
        })
      );

    const imageUri = `https://cdn.discordapp.com/attachments/1075720432688320563/1084720334529364030/diamondnewImage.jpg`;

    console.log(`Image uri: ${imageUri}`);

    const { uri } = await metaplex.nfts().uploadMetadata(nftData).then();
    console.log("metadata uri:", uri);
    if (publicKey !== null) {
      await createNft(metaplex, uri, publicKey);
    } else {
      console.log(`please connect wallet`);
    }

    setIsLoading(false);
  }

  return { isLoading, mint };
};

export default useMintNftData;
