import React from "react";

export const Contact = (props) => {
  
  return (
    <div id="contact">
      <div className="col-md-12 contact">
        <div className="row contact_up">
          <div className="section-title">
            <p className="contact_title">Roadmap</p>
            <p className="contact_subtitle">
              Lealaps Roadmap is centered around using your tier across worlds and realities.
            </p>
          </div>
        </div>
        <div className="row contact_panel">
          {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-12 col-md-4 contact_panel_sm">
                {" "}
                <div className="contact_unit">
                  <img src={d.icon} alt="contact" height="30%" width="30%" className="contact_unit_img"/>
                  <div className="contact_panel_text">
                    <p className="tiers_subtitle">{d.title}</p>
                    <p className="tiers_paragraph">{d.text}</p>
                  </div>
                </div>
              </div>
            ))
          : "loading"}
        </div>
        <div className="row contact_start">
          <p className="start_title">Start your journey now!</p>
          <p className="start_text text-center">Become a part of the Laelaps ecosystem and contribute to our collective growth.</p>
          <div className="start_button">
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
        <div className="row contact_logo">
            <img src="/assets/img/Logo.png" alt="logo" />
            <div
              className="collapse navbar-collapse contact_collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right contact_ul">
                <li>
                  <a href="#about" className="page-scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#tiers" className="page-scroll">
                    Tiers
                  </a>
                </li>
                <li>
                  <a href="#features" className="page-scroll">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#wallet" className="page-scroll">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#private" className="page-scroll">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#nft" className="page-scroll">
                    NFT
                  </a>
                </li>
                
              </ul>
            </div>
        </div>
        <div className="row">
          <div className="social">
          <div className="footer">
            <p className="footer_left">
              © 2023 Lealaps. All rights reserved.
            </p>
            <div className="footer_right">
              <ul>
                <li>
                  <a href="#terms">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#privacy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#cookies">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
