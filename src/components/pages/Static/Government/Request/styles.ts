import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1208px',
    padding: '120px 40px 95px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '95px 20px 60px',
    },
  },
  content: {
    width: '100%',
    flex: '0 1 auto',
    maxWidth: '552px',
    minWidth: 1,
    margin: '0 auto',
  },
});

export default useStyles;
