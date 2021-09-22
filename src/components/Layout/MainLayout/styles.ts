import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
  },
  container: {
    width: '100%',
    flex: 1,
  },
  content: {
    width: '100%',
    minWidth: 1,
    minHeight: 'calc(100vh - 64px)',
  },
}));

export default useStyles;
