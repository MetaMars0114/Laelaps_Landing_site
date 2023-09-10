import React from "react";

const Tiers = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] flex flex-col sm:gap-[43px] gap-[56px] px-[16px] py-[32px]">
        <div className="flex flex-col">
          <div className="uppercase font-editor font-[700] sm:text-[16px] text-[14px] leading-[20px] text-[#fac515] tracking-[6px]">
            Tiers /
          </div>
          <div
            className="uppercase font-monopol font-[700] sm:text-[64px] text-[40px] sm:leading-[64px] leading-[48px] text-[#fcfcfd] mt-[12px] mb-[20px]">
            Unleash your DeFi potential with Laelaps' tier system.
          </div>
          <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
            Each tier offers unique benefits designed to enhance your crypto journey.
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-[46px] gap-[32px]">
          <div className="flex flex-col justify-center border-l border-[#fff] pl-[16px] py-[4px]">
            <div className="font-editor font-[700] text-[24px] leading-[31px] tracking-[6px] text-[#fac515] uppercase">
              EUROPA
            </div>
            <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd] mt-[4px]">
              Europa holders enjoy alerts with a 30-second delay and access to Laelaps toolkit with Maestro Integration.
            </div>
            <a
              className="cursor-pointer w-[144px] h-[36px] flex items-center justify-center gap-[8px] border border-white bg-black font-mori font-[400] sm:text-[16px] text-[14px] leading-[16px] text-white mt-[16px]">
              Get Started
              <img src="/assets/images/ic_arrow_right.svg" />
            </a>
          </div>
          <div className="flex flex-col justify-center border-l border-[#fff] pl-[16px] py-[4px]">
            <div className="font-editor font-[700] text-[24px] leading-[31px] tracking-[6px] text-[#fac515] uppercase">
              Thebes
            </div>
            <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd] mt-[4px]">
              Thebes holders receive alerts with a 60-second delay and have access to the Laelaps toolkit.
            </div>
            <a
              className="cursor-pointer w-[144px] h-[36px] flex items-center justify-center gap-[8px] border border-white bg-black font-mori font-[400] sm:text-[16px] text-[14px] leading-[16px] text-white mt-[16px]">
              Get Started
              <img src="/assets/images/ic_arrow_right.svg" />
            </a>
          </div>
          <div className="flex flex-col justify-center border-l border-[#fff] pl-[16px] py-[4px]">
            <div className="font-editor font-[700] text-[24px] leading-[31px] tracking-[6px] text-[#fac515] uppercase">
              Villager
            </div>
            <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd] mt-[4px]">
              Never miss a pending 100x opportunity. Villager holders will be guided by Laelaps to potential moonshots
              with tokens over 50x and over 100k market cap.
            </div>
            <a
              className="cursor-pointer w-[144px] h-[36px] flex items-center justify-center gap-[8px] border border-white bg-black font-mori font-[400] sm:text-[16px] text-[14px] leading-[16px] text-white mt-[16px]">
              Get Started
              <img src="/assets/images/ic_arrow_right.svg" />
            </a>
          </div>
          <div className="flex flex-col justify-center border-l border-[#fff] pl-[16px] py-[4px]">
            <div className="font-editor font-[700] text-[24px] leading-[31px] tracking-[6px] text-[#fac515] uppercase">
              Zeus
            </div>
            <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd] mt-[4px]">
              Holders with .5% or more of the supply get complete access to Laelaps toolkit with Maestro Integration,
              Zeus Discussion Group, and more. Take control with Automatic Updates and Unique Buy Counter.
            </div>
            <a
              className="cursor-pointer w-[144px] h-[36px] flex items-center justify-center gap-[8px] border border-white bg-black font-mori font-[400] sm:text-[16px] text-[14px] leading-[16px] text-white mt-[16px]">
              Get Started
              <img src="/assets/images/ic_arrow_right.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tiers;
