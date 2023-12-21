import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../../utils';

const iconButtonVariants = cva(
  'flex justify-between rounded-lg cursor-pointer font-normal',
  {
    variants: {
      variant: {
        default: 'bg-darkerBlue text-white',
        outline: 'bg-transparent',
        ghost: 'bg-lighterBlue text-black',
      },
      size: {
        default: 'px-2 py-[2px] gap-[0.9rem]',
        sm: '',
        lg: '',
      },
      defaultVariant: {
        variant: 'default',
        size: 'default',
      },
    },
  }
);

type DirectionType = 'left' | 'right';

interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  className?: string;
  icon: string;
  text: string;
  direction: DirectionType;
}

const IconButton: React.FC<IconButtonProps> = ({
  variant,
  size,
  className,
  icon,
  text,
  direction,
}) => {
  const iconSize = size === 'sm' || size === 'lg' ? 'w-5 h-5' : 'w-4';
  const iconColor = variant === 'ghost' ? '#000000' : '#ffffff';

  const renderIcon = () => (
    <img
      src={icon}
      alt={`Icon for ${text}`}
      className={iconSize}
      style={{ fill: iconColor }} // Use fill to set SVG color
    />
  );

  return (
    <div className={cn(iconButtonVariants({ variant, size, className }))}>
      {direction === 'left' ? (
        <>
          {renderIcon()}
          <span>{text}</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          {renderIcon()}
        </>
      )}
    </div>
  );
};

export default IconButton;
