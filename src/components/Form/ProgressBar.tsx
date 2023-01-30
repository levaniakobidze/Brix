import React from "react";

function ProgressBar() {
  return (
    <div className="w-100  border-b-2 py-5 px-5 flex justify-between items-center ">
      <div className="w-[34px] h-[34px]  rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center  cursor-pointer">
        <span>1</span>
      </div>
      <div className="w-[20%] h-[6px]  rounded-full bg-[#ebebeb]"></div>
      <div className="w-[34px] h-[34px] rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center cursor-pointer">
        <span>1</span>
      </div>
      <div className="w-[20%] h-[6px] rounded-full bg-[#ebebeb]"></div>
      <div className="w-[34px] h-[34px] rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center cursor-pointer">
        <span>1</span>
      </div>
      <div className="w-[20%] h-[6px] rounded-full bg-[#ebebeb]"></div>
      <div className="w-[34px] h-[34px] rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center cursor-pointer">
        <span>1</span>
      </div>
    </div>
  );
}

export default ProgressBar;
