import { ComponentProps, ReactNode } from "react";
//extende todos os atributos de um button e também o children
interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const CopyButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="cursor-pointer  flex p-1 justify-between text-blue text-button rounded-xl bg-gray-500 hover:text-gray-500 hover:bg-blue transition-colors duration-300" {...props}>
      {children}
    </button>
  );
};

export default CopyButton;
