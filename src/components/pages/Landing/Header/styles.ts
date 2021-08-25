import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9,
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
    padding: '0 24px 0 0',
    '@media screen and (max-width: 992px)': {
      display: 'none',
    },
    '& li': {
      flex: '0 0 auto',
      marginRight: 42,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  menuLink: {
    display: 'inline-block',
    padding: 10,
    fontSize: 17,
    fontWeight: 400,
    textShadow: '0 0 var(--color-bg-default)',
    color: 'var(--color-typo-primary)',
    transition: 'color .25s ease',
    '&:hover': {
      color: 'var(--color-typo-brand)',
    },
  },
  cta: {
    flex: '0 0 auto',
    paddingLeft: 24,
    // marginRight: -60, // why ( for no reason :) ) ?
    width: 'auto',
    '@media screen and (max-width: 1440px)': {
      marginRight: 0,
    },
    '@media screen and (max-width: 992px)': {
      marginLeft: 'auto',
    },
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
