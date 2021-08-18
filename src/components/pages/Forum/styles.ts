import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1208px',
    padding: '48px 40px 80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '36px 20px 60px',
    },
  },
  tabs: {
    marginTop: 44,
  },
  content: {
    marginTop: 36,
  },
});

export default useStyles;
