import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
     
      <div className="intro">
        <div className="overlay">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src="/assets/img/Heading.png" alt="heading" width="100%" className="header_first_img"/>
                <div className="header-button">
                  <button type="button" className="navi-button">
                    <span className="navi-button-text">Lealaps Community<img src="/assets/img/discord.svg" alt="discord" className="navi-button-img"/></span>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};
