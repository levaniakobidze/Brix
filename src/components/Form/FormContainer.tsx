import React from "react";
import ProgressBar from "./ProgressBar";
import { progressProps } from "../../App";

interface Props {
  progress: progressProps;
}

const FormContainer: React.FC<Props> = ({ progress }) => {
  return (
    <div className="min-w-[698px] h-[700px] my-10 px-10 py-4 rounded-2xl  bg-white shadow-[0_5px_16px_#7777774c]">
      <ProgressBar progress={progress} />
      <div className="w-100 flex flex-col">
        <h3 className="font-sans not-italic text-[#170F49] font-bold text-xl">
          Contact details
        </h3>
        <p className="font-sans text-[#6F6C90] font-normal text-lg">
          Lorem ipsum dolor sit amet consectetur adipisc.
        </p>
        <div className="flex mt-10 gap-[40px]">
          <div className="w-[50%]">
            <label htmlFor="name" className="font-sans font-lg text-[#170F49]">
              Name
            </label>
            <div className="w-[100%] h-[66px] rounded-full  mt-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ">
              <input
                className="w-[100%] h-[100%] border-0 outline-0 px-3  bg-transparent"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          </div>
          {/* ///////////////// */}
          <div className="w-[50%]">
            <label htmlFor="name">Name</label>
            <div className="w-[100%] h-[66px] rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <input
                className="w-[100%] h-[100%] border-0 outline-0 px-3  bg-transparent"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        <div className="flex mt-10 gap-[40px]">
          <div className="w-[50%]">
            <label htmlFor="name">Name</label>
            <div className="w-[100%] h-[66px] rounded-full  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <input
                className="w-[100%] h-[100%] border-0 outline-0 px-3  bg-transparent"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          </div>
          {/* ///////////////// */}
          <div className="w-[50%]">
            <label htmlFor="name">Name</label>
            <div className="w-[100%] h-[66px] rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <input
                className="w-[100%] h-[100%] border-0 outline-0 px-3  bg-transparent"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
