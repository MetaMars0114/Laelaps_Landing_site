import React from "react";

export const Features = (props) => {
  return (
    <div id="features">
      <div className="features">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 features_up">
            <p className="features_up_title">Features</p>
            <p className="features_up_text">Harness the power of Laelaps' robust toolset to navigate the complexities of DeFi.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 features_down">
            <img src="/assets/img/Featured icon.png" alt="featured_icon" width="8%" className="features_img"/>
            <p className="features_down_title">Contract Analyzer</p>
            <p className="features_down_text">Laelaps Contract Analyzer provides comprehensive insights into DeFi contracts – from market cap and all-time high to holder distribution and checksum comparisons. Stay informed and make precise decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
