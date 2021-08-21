import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  apps: {
    marginTop: 84,
  },

  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '30fr 70fr',
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
