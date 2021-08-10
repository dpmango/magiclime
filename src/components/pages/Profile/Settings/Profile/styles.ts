import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 0,
  },
  section: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  inputs: {
    maxWidth: 696,
  },
  uiGroup: {
    marginBottom: 24,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export default useStyles;
