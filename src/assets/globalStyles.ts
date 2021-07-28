import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      body: {
        width: '100vw',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        lineHeight: 1,
        fontFamily: 'Gotham Pro',
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      },
      a: {
        textDecoration: 'none',
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
