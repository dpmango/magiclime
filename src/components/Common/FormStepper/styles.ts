import { makeStyles } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {},
  step: {
    padding: '8px 0 8px 22px',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    height: '44px',
    cursor: 'pointer',
    '&:hover': {
      '& > div': {
        color: 'var(--color-typo-primary)',
      },
    },
  },
  activeStep: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      transition: 'top .3s linear',
      height: '44px',
      width: '2px',
      background: 'var(--color-bg-brand)',
      borderTopRightRadius: '2px',
      borderBottomRightRadius: '2px',
    },
  },
  stepsWrapper: {
    borderLeft: '1px solid rgba(0, 66, 105, .28)',
  },
  errorStep: {
    '& > div': {
      color: 'var(--color-bg-alert) !important',
    },
    '&::before': {
      background: 'var(--color-bg-alert) !important',
    },
  },
}));

export default useStyles;
