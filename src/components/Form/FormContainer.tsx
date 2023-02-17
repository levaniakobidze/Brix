import React from "react";
import ProgressBar from "./ProgressBar";
import { progressProps } from "../../App";
import ContactDetails from "./ContactDetails";

interface Props {
  progress: progressProps;
}

const FormContainer: React.FC<Props> = ({ progress }) => {
  return (
    <div className="w-[698px] min-h-[606px] my-10 px-10 py-5 rounded-2xl  bg-white shadow-[0_5px_16px_#7777774c]">
      <ProgressBar progress={progress} />
      <ContactDetails />
      <div className="mt-7 flex justify-center">
        <button className="rounded-full bg-[#4A3AFF] px-10 py-4 text-white font-bold">
          Next step
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
