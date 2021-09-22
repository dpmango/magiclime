import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  scroll: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    // overflow: 'hidden',
    // height: '100%',
  },
  loader: {
    margin: '15px 0',
  },
});

export default useStyles;
