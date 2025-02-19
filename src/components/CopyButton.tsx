import {ComponentProps } from 'react'
//extende todos os atributos de um button e também o children
interface ButtonProps extends ComponentProps<'button'>{}

const CopyButton = (props: ButtonProps) => {
  return (
    //o children pode ser passado como atribudo, ao invés de conteúdo dentro da tag html
    <button
    className='cursor-pointer flex p-1.5 justify-between text-blue text-button rounded-xl bg-gray-500 hover:text-gray-500 hover:bg-blue transition-colors duration-300'
    //children = {children} que nesse caso está dentro do spreed das props
    {...props}/>
  )
}

export default CopyButton