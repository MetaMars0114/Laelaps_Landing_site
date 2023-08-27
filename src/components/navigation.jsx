import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="contain">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="" href="/">
            <img src="/assets/img/Logo.png" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
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
        <div 
          className="navbar-button"
        >
          <button className="navi-button">
            <span className="navi-button-text">Lealaps Community<img src="/assets/img/discord.svg" alt="discord" className="navi-button-img"/></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
