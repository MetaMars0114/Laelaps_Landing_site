import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[72px] sm:h-[92px] flex justify-between items-center px-[16px] sm:px-[40px] z-[1]">
      <img src="/assets/images/img_logo.svg" alt="logo" />
      <a className="cursor-pointer hidden sm:block">
        <img src="/assets/images/btn_connect_wallet.svg" alt="connect" />
      </a>
      <a className="cursor-pointer sm:hidden block">
        <img src="/assets/images/btn_hamburger.svg" alt="connect" />
      </a>
    </div>
  );
};

export default Header;
