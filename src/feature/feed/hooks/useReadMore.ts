import { useState, MouseEventHandler } from 'react';
export const useReadMore = (): [
  boolean,
  MouseEventHandler<HTMLSpanElement>,
] => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState<boolean>(false);
  const handleToggleSwitch: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault();
    setIsReadMoreOpen(!isReadMoreOpen);
  };
  return [isReadMoreOpen, handleToggleSwitch];
};
