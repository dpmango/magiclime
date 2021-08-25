import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

interface IProps {
  width: number;
  height: number;
}

const debounceRate = 100;

const useResolution = (): IProps => {
  const [windowSize, setWindowSize] = useState<IProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedFunction = debounce(handleResize, debounceRate, {
      leading: false,
      trailing: true,
    });

    window.addEventListener('resize', debouncedFunction, false);

    handleResize();

    return () => window.removeEventListener('resize', debouncedFunction, false);
  }, []);

  return windowSize;
};

export default useResolution;
