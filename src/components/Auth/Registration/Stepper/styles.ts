import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    maxWidth: 456,
    padding: '0 50px',
  },
  line: {
    flex: 1,
    height: '2px',
    margin: '0 8px',
    background: 'rgba(0, 65, 102, .2)',
  },
  stepWrapper: {
    position: 'relative',
    flex: 'none',
    '& > div:last-of-type': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  step: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    flex: 'none',
    // cursor: 'pointer',
  },
  disableStep: {
    background: 'rgba(0, 65, 102, .2)',
  },
  currentStep: {
    background: '#fff',
    border: '3px solid rgb(0, 113, 178)',
  },
  passedStep: {
    background: 'rgb(0, 113, 178)',
  },
}));

export default useStyles;
