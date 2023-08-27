import React from "react";

export const Private = (props) => {
  return (
    <div id="private">
      <div className="private">
        <div className="row">
         <div className="col-md-6 col-sm-12 col-xs-12 private-left">
            <img src="/assets/img/Private icon.png" alt="wallet" width="6%" className="private_img"/>
            <p className="wallet_title">Private Filters</p>
            <p className="wallet_text">
            Customize your Laelaps experience to suit your trading preferences with our private filters. Choose from a wide range of options like Market Cap, Liquidity, Buy Volume, and more to optimize your trading
            </p>
          </div>
          <div className="col-md-6 private_right">
            {""}
          </div>
        </div>
        <div className="private_down">
          <button className="private_button"><span className="private_button_text">Discover More Features</span><img src="/assets/img/arrow-narrow-up-right.png" alt="right-arrow"/></button>
        </div>
      </div>
    </div>
  );
};
