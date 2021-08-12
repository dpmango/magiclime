import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '52px',
    height: '52px',
    lineHeight: '52px',
    border: '1px solid #d1d1d1',
    fontSize: '17px',
    letterSpacing:'-0.8px',
    marginRight: '12px',
    flex: 'none',
  },
  dot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    margin: '-4px 12px 0',
    background: 'var(--color-typo-secondary)',
  },
  text: {
    maxWidth: '630px',
  },
   date: {
    lineHeight: '24px',
  },
  '@media screen and (max-width: 1300px)': {
    text: {
      maxWidth: '80%',
    },
  },
}));

export default useStyles;
