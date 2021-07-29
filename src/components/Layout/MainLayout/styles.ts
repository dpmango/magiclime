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
    overflowY: 'auto',
    overflowX: 'hidden',
    '@media screen and (max-width: 1224px)': {
      padding: '95px 90px',
    },
    '@media screen and (max-width: 1024px)': {
      padding: '95px 70px',
    },
    '@media screen and (max-width: 768px)': {
      padding: '95px 50px',
    },
  },
}));

export default useStyles;
