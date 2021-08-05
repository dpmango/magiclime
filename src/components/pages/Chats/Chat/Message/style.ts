import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '48px',
    height: '48px',
    lineHeight: '48px',
    fontSize: '20px',
    marginRight: '16px',
    flex: 'none',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    margin: '0 12px',
    background: 'var(--color-typo-secondary)',
  },
  text: {
    maxWidth: '630px',
  },
  '@media screen and (max-width: 1300px)': {
    text: {
      maxWidth: '80%',
    },
  },
}));

export default useStyles;
