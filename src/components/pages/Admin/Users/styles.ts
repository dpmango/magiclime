import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '48px 40px 50px',
    maxWidth: '1210px',
    margin: '0 auto',
  },
  cancelButton: {
    background: 'transparent',
    marginLeft: '10px',
    color: 'var(--color-typo-alert)',
    '&:hover': {
      color: 'var(--color-typo-alert)',
    },
  },
}));

export default useStyles;
