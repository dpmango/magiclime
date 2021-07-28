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
    flex: '1',
    padding: '95px 120px',
    height: 'calc(100vh - 64px)',
    overflowY: 'auto'
  },
}));

export default useStyles;
