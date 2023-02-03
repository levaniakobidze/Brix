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
    </div>
  );
};

export default FormContainer;
