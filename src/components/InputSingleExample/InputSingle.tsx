import React, { ComponentProps, ReactNode } from "react";
interface InputProps extends ComponentProps<"input"> {
  children: ReactNode;
}

const InputSingle = ({ children, ...props }: InputProps) => {
  const labelStyle =
    "p-1.5 flex gap-1 bg-gray-800 rounded-xl border border-gray-600 text-blue focus-within:text-gray-100 [&:not(:has(input:placeholder-shown))]:text-gray-100 focus-within:border-gray-100 focus-within:transition-colors duration-300 ";

  const inputStyle =
    "w-full placeholder-gray-400  outline-hidden text-body-md text-gray-100 focus:transition-colors duration-300";

  return (
    <label className={labelStyle}>
      {children}
      <input className={inputStyle} {...props} />
    </label>
  );
};

export default InputSingle;
