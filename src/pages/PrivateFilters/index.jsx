import React from "react";

const Users = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] flex flex-col items-center sm:gap-[104px] gap-[32px] sm:px-0 sm:py-0 px-[16px] py-[32px]">
        <div className="w-full flex">
          <div className="sm:flex-1"></div>
          <div className="flex-1 flex flex-col justify-center sm:w-[600px]">
            <img src="/assets/images/ic_filter.svg" width={48} height={48} />
            <div
               className="uppercase font-editor font-[700] sm:text-[24px] sm:leading-[31px] text-[20px] leading-[26px] text-[#fac515] sm:tracking-[6px] tracking-[3px] mt-[20px] mb-[16px]">
              Private Filters
            </div>
            <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
              Customize your Laelaps experience to suit your trading preferences with our private filters. Choose from a
              wide range of options like Market Cap, Liquidity, Buy Volume, and more to optimize your trading
            </div>
          </div>
        </div>
        <a
          className="cursor-pointer bg-white w-[273px] h-[56px] flex justify-center items-center gap-[12px] font-mori font-[700] text-[16px] leading-[16px] text-black">
          Discover More Features
          <img src="/assets/images/ic_arrow_diagonal.svg" />
        </a>
      </div>
    </div>
  )
}

export default Users;
