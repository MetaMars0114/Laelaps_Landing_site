import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="about">
        <div className="row">
          <div className="col-xs-12 col-md-offset-6 col-md-6">
            <div>
              <p className="about_text">About us</p>
              <p className="about_subtext">Transforming marketplaces</p>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <button className="about-button"><img src="/assets/img/play.svg" alt="watch video" width="10%"/><p className="about-button-text">Watch Video</p></button>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
