import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { isWhite: boolean }>(() => ({
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
    flex: '0 0 auto',
    minWidth: 1,
    display: 'inline-flex',
    alignItems: 'center',
    paddingRight: 24,
  },
  logoText: {
    // textTransform: 'uppercase',
    display: 'inline-block',
    fontWeight: 900,
    fontSize: 18,
    paddingLeft: 24,
    letterSpacing: 0.3,
    color: ({ isWhite }) =>
      isWhite ? 'var(--color-bg-default)' : 'var(--color-typo-primary)',
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
      marginRight: 24,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  menuLink: {
    display: 'inline-block',
    padding: 10,
    fontSize: 15,
    borderRadius: '99rem',
    fontWeight: 500,
    letterSpacing: -0.1,
    // textShadow: '0 0 var(--color-bg-default)',
    color: ({ isWhite }) => (isWhite ? '#fafafa' : 'var(--color-typo-primary)'),
    transition: 'color .25s ease',
    '&:hover': {
      background: 'hsla(0,0%,100%,0.2)',
    },
  },
  cta: {
    flex: '0 0 auto',
    // paddingLeft: 24,
    // marginRight: -60, // why ( for no reason :) ) ?
    width: 'auto',
    '@media screen and (max-width: 1440px)': {
      marginRight: 0,
    },
    '@media screen and (max-width: 992px)': {
      marginLeft: 'auto',
    },
  },
  enterbutton: {
    background: ({ isWhite }) =>
      isWhite ? 'hsla(0,0%,100%,0.2)' : 'var(--color-bg-brand)',
  },
  global: {
    padding: 16,
    marginRight: 8,
    fontSize: 0,
    color: ({ isWhite }) =>
      isWhite ? 'var(--color-bg-default)' : 'var(--color-typo-primary)',
    transition: 'color .25s ease',
    cursor: 'pointer',
    '&:hover': {
      color: 'var(--color-typo-brand)',
    },
  },
}));

export default useStyles;
