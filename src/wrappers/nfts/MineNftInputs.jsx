import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nftMetaData } from "../../data/index";
import { FormInput } from "../../components";
import nftMetaDataSchema from "../../helpers/nftMetaDataSchema";

// Wallet
import { Metaplex, bundlrStorage, toBigNumber } from "@metaplex-foundation/js";
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Form } from "react-bootstrap";

const MineNftInputs = () => {
  const initialState = {};
  nftMetaData.map((item) => (initialState[item.name] = ""));

  const [form, setForm] = useState(initialState);
  const [nftData, setNftData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const { connection } = useConnection();
  const wallet = useWallet();
  const { publicKey } = useWallet();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(nftMetaDataSchema),
  });

  async function createNft(
    metaplex,
    uri,
    user,
    tokenName,
    symbol,
    sellerFeeBasisPoints
  ) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      let attributes = [];
      nftMetaData.map((item) => {
        if (item.isAttribute === true) {
          const attribute = {
            trait_type: item.name,
            value: data[item.name],
          };
          attributes.push(attribute);
        }
      });

      const nftDataObj = {
        name: data.name,
        description: data.description,
        sellerFeeBasisPoints: data.sellerFeeBasisPoints,
        image:
          "https://joyhsutlrr2k6dyg46vh4cz57w4bf6leg5lztyijzr7xwbkufiwa.arweave.net/S7B5UmuMdK8PBueqfgs9_bgS-WQ3V5nhCcx_ewVUKiw",
        attributes: attributes,
      };

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

      const { uri } = await metaplex.nfts().uploadMetadata(nftDataObj).then();
      console.log("metadata uri:", uri);
      if (publicKey !== null) {
        await createNft(
          metaplex,
          uri,
          publicKey,
          data.name,
          data.symbol,
          data.sellerFeeBasisPoints
        );
      } else {
        console.log(`please connect wallet`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    // reset();
  };

  
  // const onSubmit=(data)=>{
  //   console.log(data)
  // }

  return (
    <>
      <div className="container">
        <div className="col-lg-12 col-md-7">
          <div className="contact-form">
            <div className="contact-title mb-30">
              <h2>Enter Your Diamond Meta Data</h2>
            </div>
            <form
              className="contact-form-style"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                {nftMetaData.map((item, index) => {
                  return (
                    <div className={`col-lg-${item.colNo}`} key={index}>
                      {" "}
                      <FormInput
                        label={item.label}
                        tag={item.tag}
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        options={item.options}
                        onChange={handleChange}
                        error={errors[item.name]}
                        register={register}
                        defaultValue={""}
                      />
                    </div>
                  );
                })}
                


                <div className="col-lg-12">
                  <button className="submit" type="submit">
                    SEND
                  </button>
                </div>
              </div>
            </form>

            <p className="form-message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MineNftInputs;
