import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 34,
  },
  grid: {
    position: 'relative',
    marginTop: 24,
  },
  gridColMain: {
    position: 'relative',
  },
  breadcrumbs: {
    '& .LimeIcon': {
      width: 24,
      height: 24,
    },
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
  referrals: {
    marginTop: 28,
    paddingLeft: 52,
  },
  filters: {
    marginTop: 58,
  },
  filtersGroup: {
    marginBottom: 24,
    '& .TextField, & .Select': {
      width: '100%',
    },
  },

  cta: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default useStyles;
