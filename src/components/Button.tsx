import {ComponentProps, ReactNode } from 'react'
//extende todos os atributos de um button e também o children
interface ButtonProps extends ComponentProps<'button'>{
  children: ReactNode,
}

const Button = ({children, ...props}: ButtonProps) => {
  return (
    //o children pode ser passado como atribudo, ao invés de conteúdo dentro da tag html
    <button
    className='cursor-pointer flex py-1 px-2 w-full justify-between text-blue text-button rounded-xl bg-gray-500 hover:text-gray-500 hover:bg-blue transition-colors duration-300'
    //children = {children} que nesse caso está dentro do spreed das props
    {...props}>
      {children}
      </button>
  )
}

export default Button