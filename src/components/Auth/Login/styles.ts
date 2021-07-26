import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    maxWidth: '400px',
  },
  form: {
    padding: '20px 25px 16px',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  field: {
    width: '100%',
    marginBottom: '24px',
    '&:last-of-type': {
      marginBottom: '16px',
    },
  },
  license: {
    maxWidth: '80%',
    '& > a': {
      marginLeft: '5px',
    },
  },
  registration: {
    borderTop: '1px solid #00416633',
    padding: '16px',
    height: 'auto',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    color: '#0078D2',
  },
}));

export default useStyles;
