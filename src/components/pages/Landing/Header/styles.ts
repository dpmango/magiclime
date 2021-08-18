import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '24px 0',
    borderBottom: '1px solid var(--color-bg-border)',
  },

  logo: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 20,
    paddingRight: 24,
  },
  menu: {
    listStyle: 'none',
    margin: '0 auto',
    width: 'auto',
    padding: 0,
    '& li': {
      flex: '0 0 auto',
      marginRight: 24,
    },
  },
  menuLink: {
    display: 'inline-block',
    padding: 10,
    transition: 'color .25s ease',
    '&:hover': {
      color: 'var(--color-typo-brand)',
    },
  },
  cta: {
    flex: '0 0 auto',
    paddingLeft: 24,
    width: 'auto',
    marginLeft: 'auto',
  },
  global: {
    padding: 16,
    marginRight: 8,
    fontSize: 0,
    color: 'var(--color-typo-ghost)',
    transition: 'color .25s ease',
    cursor: 'pointer',
    '&:hover': {
      color: 'var(--color-typo-brand)',
    },
  },
});

export default useStyles;
