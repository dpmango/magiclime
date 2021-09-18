import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
}));

export default useStyles;
