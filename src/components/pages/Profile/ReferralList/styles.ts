import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 34,
  },
  grid: {
    marginTop: 24,
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
  referralGroup: {
    position: 'relative',
    borderTop: '1px solid var(--color-bg-border)',
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
      left: -19,
      bottom: 30,
    },
    '&:last-child': {
      '&::before': {
        display: 'none',
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
  },
});

export default useStyles;
