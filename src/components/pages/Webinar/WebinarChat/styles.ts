import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    background: 'var(--color-bg-secondary)',
    borderBottomLeftRadius: '10px',
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    width: '100%',
    padding: '22px 12px 14px',
  },
  inputWrapper: {
    background: 'var(--color-bg-default)',
    borderBottomLeftRadius: '10px',
  },
  input: {
    border: 'none',
    flex: 1,
    borderBottomLeftRadius: '10px',
    marginRight: '10px',
  },
  message: {
    background: 'var(--color-bg-default)',
    borderRadius: '6px',
    padding: '6px',
    marginBottom: '8px',
    width: 'max-content',
  },
  text: {
    overflowWrap: 'break-word',
    maxWidth: '229px',
  },
}));

export default useStyles;
