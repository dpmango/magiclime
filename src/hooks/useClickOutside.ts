import React, { useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T>,
  closeCallback: VoidFunction
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        !elementRef.current ||
        !elementRef.current.contains(event.target as Node)
      ) {
        closeCallback();
        // event.stopPropagation();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [elementRef.current, closeCallback]);
};
