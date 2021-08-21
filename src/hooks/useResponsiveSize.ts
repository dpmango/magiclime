import React, { FC, useMemo } from 'react';
import { getMediaByLetter } from 'utils/helpers/responsive';

export const useResponsiveSize = (size?: string, width: number) => {
  const letter = useMemo((): string => {
    const haveResponsive = size !== undefined && size.split(' ').length > 1;
    let returnLetter = size || 'm';

    if (haveResponsive) {
      size.split(' ').forEach((s) => {
        const [mediaLetter, sizeLetter] = s.split(':');

        if (mediaLetter) {
          if (width >= getMediaByLetter(mediaLetter)) {
            returnLetter = sizeLetter;
            return false;
          }
        }

        return true;
      });
    }

    return returnLetter;
  }, [size, width]);

  return letter;
};
