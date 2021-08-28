import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  modal: {
    position: 'relative',
    width: '100%',
    minWidth: '696px',
    padding: '32px 24px 24px',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 16,
    fontSize: 16,
    cursor: 'pointer',
    opacity: 0.35,
    transition: 'color .25s ease-in-out, opacity .25s ease-in-out',
    '&:hover': {
      color: 'var(--color-bg-alert)',
      opacity: 0.6,
    },
    '& > span': {
      width: '14px',
      height: '14px',
    },
  },
});

export default useStyles;
