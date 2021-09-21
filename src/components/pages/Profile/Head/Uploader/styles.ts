import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  avatarUploader: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 0,
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0.1,
    height: 0.1,
    opacity: 0,
    pointerEvents: 'none',
  },
  delete: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
    '& .Button': {
      background: 'var(--color-bg-alert)',
    },
  },
});

export default useStyles;
