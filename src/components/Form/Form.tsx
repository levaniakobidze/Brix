import React from "react";
import FormContainer from "./FormContainer";
import { progressProps } from "../../App";

interface Props {
  progress: progressProps;
}

const Form: React.FC<Props> = ({ progress }) => {
  return (
    <div className="w-100 h-[100vh] flex flex-col items-center">
      <div>
        <h2 className="text-center text-[#170F49] text-[34px] font-[700] font-serif">
          Get a project quote
        </h2>
        <p className="text-center w-[500px] mt-5 text-[#6F6C90] leading-5">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
      </div>
      <FormContainer progress={progress} />
    </div>
  );
};

export default Form;
