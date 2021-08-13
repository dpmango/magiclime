import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 0,
  },
  section: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  uiGroup: {
    marginTop: 16,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export default useStyles;
