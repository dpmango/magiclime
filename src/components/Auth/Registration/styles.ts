import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    padding: '30px 25px',
    width: '700px',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
}));

export default useStyles;
