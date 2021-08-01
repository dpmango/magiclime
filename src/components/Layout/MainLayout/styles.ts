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
  scroller: {
    flex: '1',
    height: 'calc(100vh - 64px)',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  content: {
    maxWidth: '1208px',
    padding: '95px 40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '95px 20px',
    },
  },
}));

export default useStyles;
