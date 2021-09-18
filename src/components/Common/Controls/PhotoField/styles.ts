import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  hiddenInput: {
    opacity: 0,
    visibility: 'hidden',
    position: 'absolute',
  },
  spinner: {
    width: '50%',
    height: '50%',
  },
}));

export default useStyles;
