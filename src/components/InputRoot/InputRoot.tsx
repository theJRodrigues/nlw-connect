import React, { ComponentProps, ReactNode } from "react";

interface InputRootProps extends ComponentProps<"label"> {
  children: ReactNode;
  error?: boolean;
}

const InputRoot = ({ children,error = false, ...props }: InputRootProps) => {
  const labelStyle =
    "py-1 px-2  flex gap-1 bg-gray-800 rounded-xl border border-gray-600 text-blue focus-within:text-gray-100 [&:not(:has(input:placeholder-shown))]:text-gray-100 focus-within:border-gray-100 focus-within:transition-colors duration-300 data-[error=true]:text-danger data-[error=true]:border-danger! data-[error=true]:[&:not(:has(input:placeholder-shown))]:text-danger";
  return (
    <label data-error={error} className={labelStyle} {...props}>
      {children}
    </label>  
  );
};

export default InputRoot;
