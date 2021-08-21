import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '22px 0 64px',
    // borderBottom: '1px solid var(--color-bg-border)',
  },
  logo: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 18,
    paddingRight: 24,
  },
  menu: {
    listStyle: 'none',
    margin: '0 0 0 auto',
    width: 'auto',
    padding: '0 42px 0 0',
    '& li': {
      flex: '0 0 auto',
      marginRight: 80,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  menuLink: {
    display: 'inline-block',
    padding: 10,
    fontSize: 18,
    fontWeight: 300,
    transition: 'color .25s ease',
    '&:hover': {
      color: 'var(--color-typo-brand)',
    },
  },
  cta: {
    flex: '0 0 auto',
    paddingLeft: 24,
    marginRight: -60, // why ?
    width: 'auto',
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
