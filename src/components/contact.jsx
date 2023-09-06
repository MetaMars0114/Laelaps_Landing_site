import React from "react";

export const Contact = (props) => {
  return (
    <div id="contact">
      <div className="col-md-12 contact">
        <div className="row contact_up">
          <div className="roadmap">
            <p className="contact_title">/Roadmap</p>
            <p className="contact_subtitle">
              Lealaps Roadmap is centered around using your tier across worlds and realities.
            </p>
          </div>
        </div>
        <div className="row contact_panel">
          {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-12 col-md-6 contact_panel_sm">
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
      </div>
    </div>
  );
};
