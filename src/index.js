import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";

import WalletContextProvider from "./context/WalletContextProvider";
import { TransactionsProvider } from "./context/TransactionsProvider";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <WalletContextProvider>
      <TransactionsProvider>
          <App />
      </TransactionsProvider>
    </WalletContextProvider>
  </React.StrictMode>
);
