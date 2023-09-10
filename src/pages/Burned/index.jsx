import React from "react";

const Burned = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] flex sm:py-0 sm:px-0 py-[32px] px-[16px]">
        <div className="flex-1 flex flex-col justify-center">
          <div className="uppercase font-editor font-[700] sm:text-[16px] text-[14px] leading-[20px] text-[#fac515] tracking-[6px]">
            Burned /
          </div>
          <div
            className="uppercase font-monopol font-[700] sm:text-[200px] text-[128px] sm:leading-[240px] leading-[128px] text-[#fcfcfd] mt-[12px] mb-[20px]">
            20.000
          </div>
          <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
            Laelaps Contract Analyzer provides comprehensive insights into DeFi contracts – from market cap and all-time
            high to holder distribution and checksum comparisons. Stay informed and make precise decisions.
          </div>
        </div>
        <div className="sm:flex-1"></div>
      </div>
    </div>
  )
}

export default Burned;
