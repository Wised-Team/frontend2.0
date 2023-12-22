import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../../utils';

const buttonVariants = cva(
  'w-full py-4 border-[2px] rounded-md border-black font-bold absolute z-[10]',
  {
    variants: {
      variant: {
        default: 'bg-green-400',
        red: 'bg-red-500',
        blue: 'bg-blue-500',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
      defaultVariant: {
        variant: 'defalt',
        size: 'default',
      },
    },
  }
);

export interface LayeredButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
}

const LayerdButton: React.FC<LayeredButtonProps> = ({
  className,
  size,
  variant,
  ...props
}) => {
  return (
    <div className={'group relative h-[16px] w-[200px]'}>
      <button className={cn(buttonVariants({ variant, size, className }))}>
        {props.text}
      </button>
      <div className="duration-400 absolute z-[8] h-[60px] w-[100%] rounded-md border-[2px] border-black bg-lightBlue transition-transform group-hover:translate-x-[5px] group-hover:translate-y-[6px]"></div>
      <div className="duration-400 absolute z-[5] h-[60px] w-[100%] rounded-md border-[2px] border-black bg-darkBlue transition-transform group-hover:translate-x-[10px] group-hover:translate-y-[12px]">
        {' '}
      </div>
    </div>
  );
};

export default LayerdButton;
