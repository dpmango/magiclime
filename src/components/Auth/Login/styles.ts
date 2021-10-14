import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    width: '360px',
  },
  form: {
    padding: '24px 24px 32px',
    width: '100%',
  },
  closeBtn: {
    position: 'absolute',
    top: '18px',
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
    maxWidth: '100%',
    '& > a': {
      marginLeft: '5px',
      fontWeight: '500',
    },
  },
  recovery: {
    cursor: 'pointer',
    transition: 'opacity .2s linear',
    '&:hover': {
      opacity: 0.7,
    },
  },
  registration: {
    borderTop: '1px solid #00416633',
    padding: '12px',
    height: 'auto',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    color: 'var(--color-typo-brand)',
  },
}));

export default useStyles;
