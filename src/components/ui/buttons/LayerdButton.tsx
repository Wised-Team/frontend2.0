import React from "react"
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from "../../../utils"

const buttonVariants = cva(
    'w-full py-4 border-[2px] rounded-md border-black font-bold absolute z-[10]',
    {
        variants: {
            variant: {
                default: 'bg-green-400',
                red: 'bg-red-500',
                blue: 'bg-blue-500'
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',

            },
            defaultVariant: {
                variant: 'defalt',
                size: 'default'
            }
        }
    }

)

export interface LayeredButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    text: string
}

const LayerdButton: React.FC<LayeredButtonProps> = ({
    className, size, variant, ...props
}) => {
    return (
        <div className={"h-[16px] w-[200px] relative group"}>
            <button className={cn(buttonVariants({ variant, size, className }))}>
                {props.text}
            </button>
            <div className="w-[100%] h-[60px] bg-lightBlue border-[2px] rounded-md border-black absolute z-[8] group-hover:translate-x-[5px] group-hover:translate-y-[6px] transition-transform duration-400"></div>
            <div className="w-[100%] h-[60px] bg-darkBlue border-[2px] rounded-md border-black absolute z-[5] group-hover:translate-x-[10px] group-hover:translate-y-[12px] transition-transform duration-400"> </div>
        </div>
    )
}

export default LayerdButton

