import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles<null, { isFull: boolean }>(() => ({
  root: {
    width: '100%',
    maxWidth: '1210px',
    margin: '45px auto',
    padding: '0 40px',
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginRight: '9px',
    },
  },
  stream: ({ isFull }) => ({
    position: isFull ? 'fixed' : 'relative',
    borderRadius: !isFull ? '10px' : 0,
    border: !isFull ? `1px solid ${COLORS.layoutBorderColor}` : 'none',
    height: !isFull ? '700px' : '100vh',
    width: !isFull ? 'auto' : '100vw',
    zIndex: !isFull ? 1 : 1000,
    top: !isFull ? 'auto' : 0,
    bottom: !isFull ? 'auto' : 0,
    left: !isFull ? 'auto' : 0,
    right: !isFull ? 'auto' : 0,
  }),
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    background: 'var(--color-bg-default)',
  },
  chatContainer: {
    height: '100%',
    width: '265px',
  },
  banner: {
    width: '100%',
    height: '190px',
    objectFit: 'cover',
    borderTopLeftRadius: ({ isFull }) => (!isFull ? '10px' : 0),
  },
  videoContainer: {
    position: 'relative',
    flex: 1,
    height: '100%',
  },
  expandBtn: {
    position: 'absolute',
    bottom: '18px',
    right: '18px',
  },
}));

export default useStyles;
