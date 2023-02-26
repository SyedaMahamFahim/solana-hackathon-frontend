import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import WalletContextProvider from "./context/WalletContextProvider";
import { TransactionsProvider } from "./context/TransactionsProvider";
ReactDOM.render(
  <WalletContextProvider>
    <TransactionsProvider>
    <App />
    </TransactionsProvider>
  </WalletContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
