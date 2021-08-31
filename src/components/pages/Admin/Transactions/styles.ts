import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '48px 40px 50px',
    maxWidth: '1210px',
    margin: '0 auto',
  },
  tabs: {
    marginBottom: '36px',
  },
  checkButton: {
    marginLeft: '15px',
  },
  buttonsWrapper: {
    width: 'auto',
    '& > button': {
      marginLeft: '24px',
    },
  },
}));

export default useStyles;
