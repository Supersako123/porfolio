import React from 'react'
import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'small' | 'medium'
}



export default function MyButton({variant, ...props}: ButtonProps) {

  return (
    <button {...props} className={buttonVariants({variant})} />
  )



}

const buttonVariants = cva("border-black border-[0.14rem] btn-0 font-bold cursor-pointer",
{
  variants: {
    variant: {
      small:'text-[1.1rem] px-[1rem] py-[0.2rem]',
      medium:'text-[1.4rem] px-[1rem] py-[0.1rem]',
    }
  },
  defaultVariants: {
    variant: 'medium',
  }
}


)