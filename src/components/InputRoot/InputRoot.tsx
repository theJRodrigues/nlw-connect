import React, { ComponentProps, ReactNode } from "react";

interface InputRootProps extends ComponentProps<"label"> {
  children: ReactNode;
}

const InputRoot = ({ children, ...props }: InputRootProps) => {
  const labelStyle =
    "p-1.5 flex gap-1 bg-gray-800 rounded-xl border border-gray-600 text-blue focus-within:text-gray-100 [&:not(:has(input:placeholder-shown))]:text-gray-100 focus-within:border-gray-100 focus-within:transition-colors duration-300 ";
  return (
    <label className={labelStyle} {...props}>
      {children}
    </label>
  );
};

export default InputRoot;
