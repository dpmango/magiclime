import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { level: number }>({
  referralGroup: {
    position: 'relative',
    '&::after, &::before': {
      display: 'block',
      content: "' '",
      position: 'absolute',
      zIndex: 1,
      top: 29,
      width: 1,
      borderLeft: '1px dashed var(--color-bg-border)',
    },
    '&::before': {
      left: -52,
      bottom: -30,
    },
    '&::after': {
      left: ({ level }) => -19 + level * 30,
      bottom: 30,
    },
    '&:last-of-type': {
      '&::before': {
        bottom: 42,
      },
    },
  },
  last: {
    '&::after': {
      display: 'none !important',
    },
  },
});

export default useStyles;
