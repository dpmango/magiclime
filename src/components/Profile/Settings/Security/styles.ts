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
    maxWidth: 312,
  },
  uiGroup: {
    marginBottom: 16,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export default useStyles;
