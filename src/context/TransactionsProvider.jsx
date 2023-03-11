import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export const TransactionContext = React.createContext();

export const TransactionsProvider = ({ children }) => {
  const { phantom } = window;

  const wallet = useWallet();

  // State to check if phantom is installed
  const [isPhantomInstall, setIsPhantomInstall] = useState(false);
  // State to check if phantom wallet is connected
  const [isPhantomConnected, setIsPhantomConnected] = useState(false);
  // State to store the wallet address
  const [walletAddress, setWalletAddress] = useState("");

  // Check if Phantom is installed
  const checkIfPhantomIsInstalled = async () => {
    if (phantom) {
      setIsPhantomInstall(true);
    } else {
      setIsPhantomInstall(false);
    }
  };

  // Check if phantom wallet is connected
  const checkIfWalletIsConnected = async () => {
    if (wallet.connected) {
      setIsPhantomConnected(true);
    } else {
      setIsPhantomConnected(false);
    }
  };

  // get the wallet address
  const getWalletAddress = async () => {
    if (wallet.connected) {
      const address = await wallet?.publicKey?.toString();
      setWalletAddress(address);
    }
  };

  useEffect(() => {
    checkIfPhantomIsInstalled();
    checkIfWalletIsConnected();
    console.log("wallet", wallet);
    getWalletAddress();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  return (
    <TransactionContext.Provider
      value={{
        isPhantomInstall,
        isPhantomConnected,
        wallet,
        walletAddress,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
