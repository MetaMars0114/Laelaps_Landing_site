import React from "react";

const RoadMap = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="w-full h-full bg-[#0C111D] flex flex-col justify-center items-center sm:gap-[48px] gap-[64px] sm:px-0 sm:py-0 px-[16px] py-[44px]">
        <div className="flex flex-col items-center gap-[12px] sm:w-[542px]">
          <div className="uppercase font-monopol font-[700] text-[48px] leading-[58px] text-[#fac515] tracking">
            / Roadmap
          </div>
          <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd] text-center">
            Lealaps Roadmap is centered around using your tier across worlds and realities.
          </div>
        </div>
        <div className="sm:w-[1216px] grid sm:grid-cols-2 sm:gap-[55px] gap-[32px]">
          <div className="flex sm:items-center gap-[24px]">
            <div
              className="w-[80px] h-[80px] border-[1.43px] border-white rounded-[17px] flex justify-center items-center">
              <img src="/assets/images/ic_metaverse.svg" />
            </div>
            <div className="flex flex-col gap-[4px] flex-1">
              <div className="uppercase font-monopol font-[700] text-[32px] leading-[38.4px] text-[#fcfcfd]">
                Metaverse Ready
              </div>
              <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd]">
                Become a part of the Laelaps ecosystem and contribute to our collective growth.
              </div>
            </div>
          </div>
          <div className="flex sm:items-center gap-[24px]">
            <div
              className="w-[80px] h-[80px] border-[1.43px] border-white rounded-[17px] flex justify-center items-center">
              <img src="/assets/images/ic_forging.svg" />
            </div>
            <div className="flex flex-col gap-[4px] flex-1">
              <div className="uppercase font-monopol font-[700] text-[32px] leading-[38.4px] text-[#fcfcfd]">
                Forging Events
              </div>
              <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd]">
                Become a part of the Laelaps ecosystem and contribute to our collective growth.
              </div>
            </div>
          </div>
          <div className="flex sm:items-center gap-[24px]">
            <div
              className="w-[80px] h-[80px] border-[1.43px] border-white rounded-[17px] flex justify-center items-center">
              <img src="/assets/images/ic_wearable.svg" />
            </div>
            <div className="flex flex-col gap-[4px] flex-1">
              <div className="uppercase font-monopol font-[700] text-[32px] leading-[38.4px] text-[#fcfcfd]">
                Lealaps Wearables
              </div>
              <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd]">
                Become a part of the Laelaps ecosystem and contribute to our collective growth.
              </div>
            </div>
          </div>
          <div className="flex sm:items-center gap-[24px]">
            <div
              className="w-[80px] h-[80px] border-[1.43px] border-white rounded-[17px] flex justify-center items-center">
              <img src="/assets/images/ic_access.svg" />
            </div>
            <div className="flex flex-col gap-[4px] flex-1">
              <div className="uppercase font-monopol font-[700] text-[32px] leading-[38.4px] text-[#fcfcfd]">
                Special Access
              </div>
              <div className="font-mori font-[400] text-[16px] leading-[20px] text-[#d0d5dd]">
                Become a part of the Laelaps ecosystem and contribute to our collective growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap;
