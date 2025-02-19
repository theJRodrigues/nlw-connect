import React, { ComponentProps } from "react";
interface InputProps extends ComponentProps<"input"> {}

const InputField = (props: InputProps) => {
  const inputStyle =
    "w-full placeholder-gray-400  outline-hidden text-body-md text-gray-100 focus:transition-colors duration-300";

  return <input className={inputStyle} {...props} />;
};

export default InputField;
