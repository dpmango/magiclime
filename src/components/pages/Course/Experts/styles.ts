import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '140px 0',
  },
  item: {
    position: 'relative',
    flex: '1 0 auto',
    padding: 24,
    border: '1px solid var(--color-bg-stripe)',
    borderRadius: 10,
    textAlign: 'center',
  },
  slider: {
    position: 'relative',
    width: '100%',
  },
  slide: {
    // flex: '0 0 auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 2,
  },
  image: {
    textAlign: 'center',
    maxWidth: 146,
    margin: '0 auto',
    '& img': {
      maxWidth: '100%',
    },
  },
  content: {
    marginTop: 18,
    textAlign: 'center',
    maxWidth: '100%',
  },
  title: {
    wordWrap: 'break-word',
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
  },
  description: {
    color: '#474d57!important',
  },
  navIcon: {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    transform: 'translateY(-50%)',
    padding: 10,
    fontSize: 0,
    cursor: 'pointer',
    '&.left': {
      left: -36,
    },
    '&.right': {
      right: -36,
    },
    '& svg': {
      fill: 'var(--color-typo-system)',
      transition: 'fill .25s ease-in-out',
    },
    '&:hover svg': {
      fill: 'var(--color-typo-normal)',
    },
  },
});

export default useStyles;
