import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionsProvider";
import WalletBtn from "../WalletBtn/WalletBtn";
import axios from "axios";

const NftGridSingle = ({ nft,id, sliderClassName, spaceBottomClass }) => {
  const { isPhantomInstall, isPhantomConnected } =
  React.useContext(TransactionContext);

  const [imageUri, setImageUri] = useState("")

  const getImageUri = async () => {
    try{
      const response = await axios.get(nft.uri)
      setImageUri(response.data.image)
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    getImageUri()
      // eslint-disable-next-line
  }, [imageUri]);
  return (
    <>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={"/nft/" + id}>
              <img className="default-img" 
               
              src={imageUri}
              alt={nft.name} 
              width="300px" 
              height="300px"
              />
            </Link>

            <div className="product-action">
              <div className="pro-same-action pro-cart">
              {!isPhantomConnected ? (
                  <WalletBtn />
                ) : !isPhantomInstall ? (
                  <a
                    href="https://phantom.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alert-link"
                  >
                    Download Phantom Wallet
                  </a>
                ) : (
                  <Link to={"/"}> Buy now </Link>
                )}
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={"/nft/" + id}>{nft.title}</Link>
            </h3>

            <div className="product-price">
              <span>Price:</span>
              <span>{nft.price} USD </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftGridSingle;
