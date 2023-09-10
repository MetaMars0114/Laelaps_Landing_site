import React from "react";

const Features = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] flex flex-col items-center sm:gap-[48px] gap-[64px] sm:px-0 sm:pt-0 px-[16px] pt-[32px]">
        <div className="flex flex-col gap-[12px] sm:w-[570px]">
          <div className="uppercase font-editor font-[700] sm:text-[16px] text-[14px] leading-[20px] text-[#fac515] tracking-[6px]">
            Features /
          </div>
          <div className="uppercase font-monopol font-[700] sm:text-[64px] sm:leading-[64px] text-[48px] leading-[48px] text-[#fcfcfd]">
            Harness the power of Laelaps' robust toolset to navigate the complexities of DeFi.
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex-1"></div>
          <div className="flex flex-col justify-center sm:w-[600px]">
            <img src="/assets/images/ic_list.svg" width={48} height={48} />
            <div
              className="uppercase font-editor font-[700] sm:text-[24px] sm:leading-[31px] text-[20px] leading-[26px] text-[#fac515] sm:tracking-[6px] tracking-[3px] mt-[20px] mb-[16px]">
              Contract Analyzer
            </div>
            <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
              Laelaps Contract Analyzer provides comprehensive insights into DeFi contracts – from market cap and
              all-time high to holder distribution and checksum comparisons. Stay informed and make precise decisions.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
