import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] w-full sm:px-0 px-[16px] sm:py-0 py-[75px] flex">
        <div className="sm:flex-1"></div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="uppercase font-editor font-[700] sm:text-[16px] text-[14px] leading-[20px] text-[#fac515] tracking-[6px]">
            About us /
          </div>
          <div
            className="uppercase font-monopol font-[700] sm:text-[64px] text-[40px] leading-[44px] text-[#fcfcfd] tracking-[0.2px] mt-[16px] mb-[20px]">
            Transforming marketplaces
          </div>
          <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
            Laelaps is an innovative project that leverages the power of data to elevate your blockchain experience. We
            gather, simplify, and deliver crucial data to help you fine-tune your trading strategies. With Laelaps, you
            are not just transacting, you are growing.
          </div>
          <a
            className="cursor-pointer font-mori font-[400] sm:text-[16px] text-[20px] leading-[16px] flex justify-center items-center gap-[8px] text-white sm:w-[160px] sm:h-[40px] w-full h-[56px] bg-black border border-[#fff] sm:mt-[12px] mt-[32px]">
            <img src="/assets/images/ic_play.svg" />
            Watch Video
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
