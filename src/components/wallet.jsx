import React from "react";

export const Wallet = (props) => {
  return (
    <div id="wallet">
      <div className="wallet">
        <div className="row">
          <div className="col-md-6 wallet-right">
            <img src="/assets/img/Wallet icon.png" alt="wallet" width="6%" className="wallet_img"/>
            <p className="wallet_title">Wallet Scanner</p>
            <p className="wallet_text">
              Evaluate wallets with ease. The Laelaps Wallet Scanner offers detailed insights into a wallet’s token holdings, transaction history, trading activity, and more. Use our Ape Score and Safu Score to assess performance and security, respectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
