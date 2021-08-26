import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { position: 'top' | 'bottom' }>(() => ({
  star: {
    color: 'var(--color-typo-alert)',
    marginLeft: '5px',
  },
  input: {
    width: '100%',
  },
  container: {
    width: '100%',
    position: 'relative',
  },
  calendar: {
    position: 'absolute',
    top: ({ position }) => (position === 'bottom' ? '105%' : 'auto'),
    bottom: ({ position }) => (position === 'bottom' ? 'auto' : '105%'),
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    background: 'var(--color-bg-system)',
    '& button': {
      background: 'transparent',
    },
  },
}));

export default useStyles;
