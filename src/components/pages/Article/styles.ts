import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1208px',
    padding: '95px 40px 95px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '60px 20px 60px',
    },
  },
  content: {
    flex: '0 0 calc(100% - 288px)',
    padding: '0 70px',
  },
});

export default useStyles;
