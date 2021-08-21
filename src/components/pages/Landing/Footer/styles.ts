import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '32px 0 48px',
    // borderTop: '1px solid var(--color-bg-border)',
  },
  wrapper: {
    marginRight: -80,
    '@media screen and (max-width: 1440px)': {
      marginRight: 0,
    },
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '30fr 70fr',
    '@media screen and (max-width: 992px)': {
      gridTemplateColumns: '1fr',
    },
  },
  first: {
    maxWidth: 340,
  },
  logo: {
    fontSize: 39,
  },
  menu: {
    marginTop: 16,
    '& a': {
      display: 'block',
    },
    '@media screen and (max-width: 640px)': {
      display: 'none',
    },
  },
  link: {
    color: 'var(--color-typo-secondary)',
    transition: 'color .25s ease-in-out',
    '&:hover': {
      color: 'var(--color-typo-link)',
    },
  },
});

export default useStyles;
