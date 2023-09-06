import React from "react";

export const VideoBg = () => {
  return (
    <div className="video-bg">
      <video src="/assets/bg.mp4" width="100%" height="100%" autoPlay loop muted/>
    </div>
  );
};
