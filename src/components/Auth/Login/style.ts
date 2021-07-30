import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
  },
  form: {
    padding: '24px 24px 32px',
    maxWidth: '400px',
    // РР сделать 360 на вход и 680 на регу
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
  service: {
    borderRadius: '50%',
    background: 'var(--color-control-bg-clear)',
    height: '48px',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'all .175s linear',
    justifyContent: 'center',
    width: '48px',
    '&:not(:last-of-type)': {
      marginRight: '12px',
    },
    '&:hover': {
      background: 'var(--color-control-bg-clear-hover)',
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
