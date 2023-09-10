import React from "react";

const Nft = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] flex flex-col sm:gap-[27px] gap-[80px] sm:px-0 sm:py-0 px-[16px] py-[32px]">
        <div className="flex flex-col sm:w-[560px]">
          <div className="uppercase font-editor font-[700] sm:text-[16px] text-[14px] leading-[20px] text-[#fac515] tracking-[6px]">
            NFT /
          </div>
          <div
            className="uppercase font-monopol font-[700] sm:text-[64px] sm:leading-[64px] text-[40px] leading-[48px] text-[#fcfcfd] mt-[12px] mb-[20px]">
            Elevate your DeFi experience with our Master Key NFT.
          </div>
          <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
            Become a part of the Laelaps ecosystem and contribute to our collective growth.
          </div>
        </div>
        <div className="w-full flex">
          <div className="sm:flex-1"></div>
          <div className="flex flex-col justify-center sm:w-[570px]">
            <div
              className="uppercase font-monopol font-[700] sm:text-[64px] sm:leading-[64px] text-[40px] leading-[48px] text-[#fcfcfd]">
              Master key
            </div>
            <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd] mt-[20px] mb-[32px]">
              The Master Key NFT is your passport to the Zeus tier groupand access to the private bot. Every Master Key
              purchase contributes directly towards buybacks and burns of $LAELAPS, reducing token supply and amplifying
              value.
            </div>
            <div className="flex sm:flex-row flex-col gap-[12px]">
              <a
                className="cursor-pointer bg-white sm:flex-1 h-[56px] flex justify-center items-center gap-[12px] font-mori font-[700] text-[18px] leading-[18px] text-black">
                Buy a Master Key
                <img src="/assets/images/ic_key.svg" />
              </a>
              <a
                className="cursor-pointer bg-black border border-white sm:flex-1 h-[56px] flex justify-center items-center gap-[12px] font-mori font-[700] text-[18px] leading-[18px] text-white">
                Join Zues Tier
                <img src="/assets/images/ic_arrow_right.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nft;
