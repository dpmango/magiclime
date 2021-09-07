import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginLeft: 24,
  },
  form: {
    marginTop: 36,
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topline: {},
  formUser: {
    flex: '0 0 auto',
    width: 'auto',
  },
  formSelect: {
    flex: '0 0 auto',
    minWidth: 142,
    marginLeft: 'auto',
    '& .Select-ControlValueContainer': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  formInputs: {
    marginTop: 24,
  },
});

export default useStyles;
