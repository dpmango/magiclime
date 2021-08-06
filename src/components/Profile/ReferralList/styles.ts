import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 36,
  },
  grid: {
    marginTop: 24,
  },
  breadcrumbs: {
    '& .Breadcrumbs-Link': {
      color: 'var(--color-typo-secondary)',
      '&:hover': {
        color: 'var(--color-typo-primary)',
      },
      '&_active': {
        color: 'var(--color-typo-primary)',
      },
    },
  },
  filters: {},
  filtersGroup: {
    marginBottom: 24,
    '& .TextField, & .Select': {
      width: '100%',
    },
  },
  filtersMatrixBtn: {
    marginRight: 6,
    marginBottom: 6,
  }
});

export default useStyles;
