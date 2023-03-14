import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nftMetaData } from "../../data/index";
import { FormInput } from "../../components";
import nftMetaDataSchema from "../../helpers/nftMetaDataSchema";

// Wallet
import {
  Metaplex,
  bundlrStorage,
  toBigNumber,
  toMetaplexFile,
} from "@metaplex-foundation/js";
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

const MineNftInputs = () => {
  const initialState = {};
  nftMetaData.map((item) => (initialState[item.name] = ""));

  const [form, setForm] = useState(initialState);

  const [isLoading, setIsLoading] = useState(false);
  const [nft, setNft] = useState("/Profile.png");
  const [nftPreview, setNftPreview] = useState("");


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

  // const onSubmit = async (data) => {
  //   try {
  //     setIsLoading(true);
  //     let attributes = [];
  //     nftMetaData.map((item) => {
  //       if (item.isAttribute === true) {
  //         const attribute = {
  //           trait_type: item.name,
  //           value: data[item.name],
  //         };
  //         attributes.push(attribute);
  //       }
  //     });

  //     // covert image to base64
  //     // const file = data.image[0];
  //     // const reader = new FileReader();
  //     // reader.readAsDataURL(file);
  //     // let base64;
  //     // reader.onload = async () => {
  //     //    base64 = reader.result;
  //     // };

  //    const base64= new Uint16Array(data.image).buffer;


  //     const metaplex = Metaplex.make(connection)
  //       .use(walletAdapterIdentity(wallet))
  //       .use(
  //         bundlrStorage({
  //           address: "https://devnet.bundlr.network",
  //           providerUrl: "https://api.devnet.solana.com",
  //           timeout: 60000,
  //         })
  //       );

    

  //     const fileMetaplex = toMetaplexFile(base64, data.image[0].name);

  //     const imageUri = await metaplex.storage().upload(fileMetaplex);

  //     console.log(`Image uri: ${imageUri}`);

  //     const nftDataObj = {
  //       name: data.name,
  //       description: data.description,
  //       sellerFeeBasisPoints: data.sellerFeeBasisPoints,
  //       image: imageUri,
  //       attributes: attributes,
  //     };

  //     const { uri } = await metaplex
  //       .nfts()
  //       .uploadMetadata({
  //         ...nftDataObj })
  //       .then();
  //     console.log("metadata uri:", uri);
  //     if (publicKey !== null) {
  //       await createNft(
  //         metaplex,
  //         uri,
  //         publicKey,
  //         data.name,
  //         data.symbol,
  //         data.sellerFeeBasisPoints
  //       );

  //       window.alert(`Token Mint Successfully`);
  //     } else {
  //       console.log(`please connect wallet`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }

  //   reset();
  // };

  const onSubmit = async (data) => {
    console.log(data.image[0].name);
  }

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

                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  {...register("image")}
                />

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
