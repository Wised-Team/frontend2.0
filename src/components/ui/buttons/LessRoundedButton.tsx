import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../../utils';

const buttonVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-darkerBlue text-white hover:opacity-80',
      outline: 'bg-transparent text-black',
      ghost: 'bg-lightestBlue text-black',
    },
    size: {
      default: 'rounded-md h-8 py-3 px-2 text-sm',
      sm: '',
      mg: '',
      lg: '',
    },
    defaultVariant: {
      variant: 'default',
      size: 'default',
    },
  },
});

export interface MoreRoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
}

const LessRoundedButton: React.FC<MoreRoundedButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      {props.text}
    </button>
  );
};

export default LessRoundedButton;
