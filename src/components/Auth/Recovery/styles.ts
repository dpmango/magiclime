import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { success?: boolean }>(() => ({
  container: {
    position: 'relative',
    width: '360px',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  form: {
    padding: '24px 24px 32px',
    width: '100%',
  },
  field: {
    width: '100%',
    marginBottom: '24px',
    // '&:last-of-type': {
    //   marginBottom: '16px',
    // },
  },
  login: {
    borderTop: '1px solid #00416633',
    //padding: '12px',
    height: 'auto',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    color: 'var(--color-typo-brand)',
  },
  message: {
    color: ({ success }) =>
      success ? 'var(--color-typo-success)' : 'var(--color-typo-alert)',
  },
}));

export default useStyles;
