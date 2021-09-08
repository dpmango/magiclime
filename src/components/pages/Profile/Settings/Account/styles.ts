import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 0,
  },
  section: {
    paddingTop: 24,
    paddingBottom: 24,
    borderBottom: '1px solid var(--color-bg-border)',
    '&:first-child': {
      paddingTop: 16,
    },
    '&:last-child, &.is-last': {
      borderBottom: 0,
    },
  },
  inputs: {
    maxWidth: 696,
  },
  uiGroup: {
    marginBottom: 24,
    '& > label': {
      display: 'block',
      marginBottom: 12,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  uiButton: {
    marginBottom: 8,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  dangerBtn: {
    color: '#E64646',
  },
});

export default useStyles;
