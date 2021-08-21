import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 8,
  },
  title: {
    fontSize: 14,
  },
  form: {
    margin: '12px 0',
    '& .TextField': {
      width: 'auto',
      marginRight: 16,
    },
  },
  agreement: {
    fontSize: 14,
  },
});

export default useStyles;
