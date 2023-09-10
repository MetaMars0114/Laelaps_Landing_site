import React from "react";

const Background = () => {
  return (
    <div className="fixed w-full h-[100vh] z-[-2]">
      <video className="w-full h-full object-fill" src="/assets/bg.mp4" autoPlay loop muted/>
    </div>
  );
};

export default Background;
