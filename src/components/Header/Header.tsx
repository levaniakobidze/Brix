import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";

function Header() {
  return (
    <nav className="w-100 flex justify-between p-7">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <button className="text-[18px] font-bold border-0 px-10 py-5 bg-[#4A3AFF] rounded-full text-white shadow-[inset_0px 3px 12px rgba(74, 58, 255, 0.18)]">
        Clone now
      </button>
    </nav>
  );
}

export default Header;
