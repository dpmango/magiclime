import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '48px 40px 50px',
    maxWidth: '1210px',
    margin: '0 auto',
  },
  moreInfo: {
    background: 'transparent',
    marginLeft: '10px',
    borderColor: 'var(--color-typo-success)',
    color: 'var(--color-typo-success)',
    '&:hover': {
      color: 'var(--color-typo-link-hover)',
      borderColor: 'var(--color-typo-link-hover)',
    },
  },
  buttonsWrapper: {
    width: 'auto',
    '& > button': {
      marginLeft: '24px',
    },
  },
}));

export default useStyles;
