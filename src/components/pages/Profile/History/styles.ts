import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 42,
    minHeight: '100vh',
    // minHeight: ({ tabSwitching }) => (tabSwitching ? '100vh' : '100vh'),
  },
  tabs: {
    // marginTop: 36,
    // marginBottom: 24,
  },
  table: {
    marginTop: 24,
  },
});

export default useStyles;
