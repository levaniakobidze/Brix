import React from "react";
import { progressProps } from "../../App";

interface Props {
  progress: progressProps;
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div className="w-100  border-b-2 py-5 px-5 flex justify-between items-center ">
      <div className="w-[34px] h-[34px]  rounded-full bg-[#4A3AFF] text-[#ffffff] flex justify-center items-center  cursor-pointer">
        <span>1</span>
      </div>
      <div className={`w-[20%] h-[6px]  rounded-full bg-[#ebebeb]`}>
        <p
          className={`w-[${progress.first}%] h-[6px] ease-in duration-300 rounded-full bg-[#4A3AFF]`}></p>
      </div>
      <div
        className={`w-[34px] h-[34px] rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center cursor-pointer`}>
        <span>2</span>
      </div>
      <div className="w-[20%] h-[6px] rounded-full bg-[#ebebeb]">
        <p
          className={`w-[${progress.second}%] h-[6px] ease-in duration-300 rounded-full bg-[#4A3AFF]`}></p>
      </div>
      <div className="w-[34px] h-[34px] rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center cursor-pointer">
        <span>3</span>
      </div>
      <div className="w-[20%] h-[6px] rounded-full bg-[#ebebeb]">
        <p
          className={`w-[${progress.third}%] h-[6px] ease-in duration-300 rounded-full bg-[#4A3AFF]`}></p>
      </div>
      <div className="w-[34px] h-[34px] rounded-full bg-[#ebebeb] text-[#6F6C90] flex justify-center items-center cursor-pointer">
        <span>4</span>
      </div>
    </div>
  );
};

export default ProgressBar;
