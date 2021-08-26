import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '48px 40px 50px',
    maxWidth: '1210px',
    margin: '0 auto',
  },
  container: {
    display: 'grid',
    maxWidth: '650px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridGap: '24px',
    marginBottom: '24px',
  },
}));

export default useStyles;
