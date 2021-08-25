import React, { FC, useMemo } from 'react';
import { getMediaByLetter } from 'utils/helpers/responsive';
import { SizeType } from 'types/common';

export const useResponsiveSize = (width: number, size?: any): SizeType => {
  const letter = useMemo(() => {
    const haveResponsive = size !== undefined && size.split(' ').length > 1;
    let returnLetter = size || 'm';

    if (haveResponsive) {
      size!.split(' ').forEach((s: string) => {
        const split = s.split(':');
        const mediaLetter: string = split[0];
        const sizeLetter: string | SizeType = split[1];

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
