import React from "react";
import WalletBtn from "../WalletBtn/WalletBtn";

import { TransactionContext } from "../../context/TransactionsProvider";

const ErrorMessage = () => {
 
  const { isPhantomInstall, isPhantomConnected } = React.useContext(
    TransactionContext);

  return (
    <>
      {/* centra the div */}
      <div
        className="col"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          {!isPhantomInstall ? (
            <div>
              <div className="alert alert-danger" role="alert">
                Please install Phantom Wallet
                {/* // Link to download Phantom Wallet */}
              </div>
              <a
                href="https://phantom.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="alert-link"
              >
                Download Phantom Wallet
              </a>
            </div>
          ) : !isPhantomConnected ? (
            <div>
              <div className="alert alert-danger" role="alert">
                Please connect Phantom Wallet <br />
              </div>

              <WalletBtn />
            </div>
          ) : (
            "Connected"
          )}
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
