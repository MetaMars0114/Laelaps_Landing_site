import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center sm:pt-[92px] bg-[#0C111D]">
      <div className="flex flex-col items-center py-[32px] sm:px-0 px-[16px]">
        <div className="uppercase font-monopol font-[700] text-[48px] leading-[57.6px] text-[#fac515]">
          / Start your journey now!
        </div>
        <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd] mt-[20px] mb-[40px]">
          Become a part of the Laelaps ecosystem and contribute to our collective growth.
        </div>
        <div className="flex sm:flex-row flex-col w-full gap-[12px] justify-center">
          <a
            className="cursor-pointe h-[56px] bg-white flex justify-center items-center gap-[12px] font-mori font-[700] text-[18px] leading-[18px] text-black sm:w-[240px]">
            Buy a Master Key
            <img src="/assets/images/ic_key.svg" />
          </a>
          <a
            className="cursor-pointer h-[56px] bg-black border border-white flex justify-center items-center gap-[12px] font-mori font-[700] text-[18px] leading-[18px] text-white sm:w-[212px]">
            Join Zues Tier
            <img src="/assets/images/ic_arrow_right.svg" />
          </a>
        </div>
      </div>
      <div
        className="w-full sm:px-[112px] px-[32px] sm:pt-[76px] sm:pb-[60px] py-[44px] flex sm:flex-row flex-col justify-between items-center">
        <div className="sm:w-[533px]">
          <img src="/assets/images/img_footer_logo.svg" />
          <div className="mt-[12px] font-mori font-[400] text-[16px] leading-[28px] text-[#d0d5dd]">
            We are a creator led organisation. lealaps uses the latest in game engines, NFT , blockchain authentication
            and augmented reality, combined with manufacturing expertise to create one of a kind sneakers and digital
            artifacts.
          </div>
        </div>
        <div
          className="w-[320px] grid grid-cols-2 gap-x-[32px] gap-y-[24px] font-mori font-[400] text-[16px] leading-[16px] text-white sm:mt-0 mt-[32px]">
          <a className="cursor-pointer">
            Main Website
          </a>
          <a className="cursor-pointer">
            Instagram
          </a>
          <a className="cursor-pointer">
            Privacy Policy
          </a>
          <a className="cursor-pointer">
            Discord
          </a>
          <a className="cursor-pointer">
            Terms of Services
          </a>
          <a className="cursor-pointer">
            Twitter
          </a>
          <a className="cursor-pointer">
            Legal Overview
          </a>
          <a className="cursor-pointer">
            Youtuve
          </a>
          <a></a>
          <a className="cursor-pointer">
            Tiktok
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
