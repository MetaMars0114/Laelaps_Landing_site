import React from "react";

const Home = () => {
  return (
    <div className="relative w-full sm:h-[100vh] h-[462px] flex items-center justify-center">
      <img src="/assets/images/img_main.svg" className="sm:h-[300px] h-[86px] sm:w-[1132px] w-[315px]" />
      <div
        className="absolute left-0 right-0 bottom-0 sm:h-[96px] h-[67px] flex items-center justify-between pt-[8px] sm:pb-[32px] sm:px-[40px] pb-[16px] px-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="uppercase font-mori text-[#FCFCFD] font-[400] sm:text-[16px] sm:leading-[26px] text-[12px] leading-[19.12px]">
            Lealaps project
          </div>
          <div className="uppercase font-editor text-[#FCFCFD] font-[700] sm:text-[16px] sm:leading-[21px] text-[12px] leading-[15.6px] tracking-[2px]">
            Reveal site is now live
          </div>
        </div>
        <div className="flex gap-[4px]">
          <a className="cursor-pointer">
            <img src="/assets/images/btn_voice.svg" className="sm:w-[56px] sm:h-[56px] w-[32px] h-[32px]" />
          </a>
          <a className="cursor-pointer">
            <img src="/assets/images/btn_discord.svg" className="sm:w-[56px] sm:h-[56px] w-[32px] h-[32px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
