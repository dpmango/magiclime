import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  container: {
    maxWidth: '1220px',
    paddingLeft: 40,
    paddingRight: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
});

export default useStyles;
