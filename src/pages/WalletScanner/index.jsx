import React from "react";

const WalletScanner = () => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      <div className="sm:w-[1216px] flex">
        <div className="flex flex-col justify-center sm:w-[600px] sm:px-0 sm:pt-0 px-[16px] pt-[32px]">
          <img src="/assets/images/ic_wallet.svg" width={48} height={48} />
          <div
            className="uppercase font-editor font-[700] sm:text-[24px] sm:leading-[31px] text-[20px] leading-[26px] text-[#fac515] sm:tracking-[6px] tracking-[3px] mt-[20px] mb-[16px]">
            Wallet Scanner
          </div>
          <div className="font-mori font-[400] text-[20px] leading-[28px] text-[#d0d5dd]">
            Evaluate wallets with ease. The Laelaps Wallet Scanner offers detailed insights into a wallet’s token
            holdings, transaction history, trading activity, and more. Use our Ape Score and Safu Score to assess
            performance and security, respectively.
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletScanner;
