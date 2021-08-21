import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  apps: {
    marginTop: 84,
    '@media screen and (max-width: 992px)': {
      marginTop: 32,
    },
    '@media screen and (max-width: 640px)': {
      marginTop: 0,
    },
  },

  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '30fr 70fr',
    '@media screen and (max-width: 992px)': {
      gridTemplateColumns: '1fr',
    },
  },
  appLink: {
    marginRight: 16,
    transition: 'opacity .25s ease',
    '&:hover': {
      opacity: 0.6,
    },
  },
});

export default useStyles;
