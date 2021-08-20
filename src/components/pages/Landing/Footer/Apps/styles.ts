import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  apps: {
    marginTop: 60,
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
