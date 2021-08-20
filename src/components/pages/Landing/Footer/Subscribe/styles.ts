import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 24,
  },
  form: {
    margin: '16px 0',
    '& .TextField': {
      width: 'auto',
      marginRight: 16,
    },
  },
});

export default useStyles;
