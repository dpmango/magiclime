import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1208px',
    padding: '0px 40px 95px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '0px 20px 60px',
    },
  },
  content: {
    marginTop: 36,
  },
  tags: {
    marginTop: 24,
    maxWidth: 720,
  },
  main: {
    marginTop: 36,
  },
});

export default useStyles;
