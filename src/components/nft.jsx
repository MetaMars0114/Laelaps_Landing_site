import React from "react";

export const NFT = (props) => {
  return (
    <div id="nft">
      <div className="nft">
        <div className="row">
         <div className="col-md-6 private-left">
            <p className="nft_up_title">NFT</p>
            <p className="nft_up_subtitle">
              Elevate your DeFi experience with our Master Key NFT.
            </p>
            <p className="nft_up_text"> 
              Become a part of the Laelaps ecosystem and contribute to our collective growth.
            </p>
          </div>
          <div className="col-md-6 private_right">
            {""}
          </div>
        </div>
        <div className="row">
         <div className="col-md-6 private-left">
            <p className="nft_up_subtitle">
              Master Key
            </p>
            <p className="nft_up_text"> 
            The Master Key NFT is your passport to the Zeus tier groupand access to the private bot. Every Master Key purchase contributes directly towards buybacks and burns of $LAELAPS, reducing token supply and amplifying value.
            </p>
            <div className="nft_button">
              <button className="nft_left_button">
                <div className="nft_left_butt">
                  <span className="nft_left_text">Buy a Master Key</span>
                  <img src="/assets/img/key-01.png" alt="key" />
                </div>
              </button>
              <button className="nft_right_button">
                <div className="nft_right_butt">
                  <span className="nft_right_text">Join Zeus Tier</span>
                  <img src="/assets/img/arrow-right.png" alt="arrow-right" />
                </div>
              </button>
            </div>
            
          </div>
          <div className="col-md-6 private_right">
            {""}
          </div>
        </div>
      </div>
    </div>
  );
};
