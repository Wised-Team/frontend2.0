import React, { useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../../utils';

const togglerVariants = cva(
    'relative flex items-center cursor-pointer rounded-3xl ',
    {
        variants: {
            variant: {
                default: 'bg-black',
                blue: 'bg-darkerBlue'
            },
            size: {
                default: 'px-[2px] py-[1px] w-[5.6rem] h-[2rem]',
                sm: 'w-[4.2rem] h-[1.6rem]'
            },
            defaultVariant: {
                variant: 'default',
                size: 'default'
            }
        },
    }
);

export interface TogglerProps extends VariantProps<typeof togglerVariants> {
    className?: string;
}

const Toggler: React.FC<TogglerProps> = ({ variant, size, className, ...props }) => {


    const [isActive, setIsActive] = useState<boolean>(false);

    const handleToggle = () => {
        setIsActive((prev) => !prev);
    }

    const smallerCircle = size === "sm" ? 'w-[1.4rem] h-[1.4rem]' : 'w-[1.8rem] h-[1.8rem]'
    return (
        <div className={cn(togglerVariants({ variant, size, className }))} onClick={() => handleToggle()}>
            <div className={`rounded-full bg-white h-[1.8rem] w-[1.8rem] absolute ${isActive ? 'translate-x-0' : 'translate-x-[200%]'}  ${smallerCircle} transition-all duration-200`}>

            </div>
        </div>
    )
};

export default Toggler;
