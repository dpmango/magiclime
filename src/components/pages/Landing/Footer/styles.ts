import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '32px 0 48px',
    // borderTop: '1px solid var(--color-bg-border)',
  },
  wrapper: {
    marginRight: -80,
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '30fr 70fr',
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
  },
  link: {
    color: 'var(--color-typo-secondary)',
    transition: 'color .25s ease-in-out',
    '&: hover': {
      color: 'var(--color-typo-link)',
    },
  },
});

export default useStyles;
