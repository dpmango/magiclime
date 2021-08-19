import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../utils/constants/colors';

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
  stream: {
    position: 'relative',
    borderRadius: ({ isFull }) => (!isFull ? '10px' : 0),
    border: ({ isFull }) =>
      !isFull ? `1px solid ${COLORS.layoutBorderColor}` : 'none',
    height: ({ isFull }) => (!isFull ? '700px' : '100vh'),
    zIndex: ({ isFull }) => (!isFull ? 1 : 1000),
  },
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  chatContainer: {
    height: '100%',
    width: '265px',
  },
  banner: {
    width: '100%',
    height: '190px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
  },
}));

export default useStyles;
