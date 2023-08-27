import React from "react";

export const Tiers = (props) => {
  return (
    <div id="tiers">
      <div className="tiers">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p className="about_text">Tiers</p>
              <p className="about_subtext">Unleash your DeFi potential with Laelap's tier system.</p>
              <p className="tiers_text">Each tier offers unique benefits designed to enhance your <br></br>crypto journey.</p>
            
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <div className="vertical_line"></div>
                    <div>
                      <p className="tiers_subtitle">{d.name}</p>
                      <p className="tiers_paragraph">{d.text}</p>
                      <button className="tiers_button"><span className="tiers_button_text">Get Started</span><img src="/assets/img/right-arrow.svg" alt="right-arrow"/></button>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
