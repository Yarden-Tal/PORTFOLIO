import React from "react";
import { loader } from "../../assets/assets";

const FormLoader = (): JSX.Element => {
  return (
    <div className="w-full h-full flex items-center gap-2">
      <span>Sending</span>
      <span className="self-end">
        <img className="w-full h-full" src={loader} alt="..." />
      </span>
    </div>
  );
};

export default FormLoader;
