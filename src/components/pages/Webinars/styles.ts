import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1208px',
    padding: '48px 40px 95px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '48px 20px 60px',
    },
  },
  tags: {
    marginTop: 32,
    maxWidth: 720,
  },
  main: {
    marginTop: 38,
  },
});

export default useStyles;
