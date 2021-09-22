import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  messageImage: {
    width: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '10px',
    margin: '15px 0',
    cursor: 'pointer',
  },
  gallery: {
    position: 'fixed',
    background: 'var(--color-bg-tone)',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 200,
  },
  galleryImage: {
    maxWidth: '100vw',
    maxHeight: '100vh',
    objectFit: 'contain',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '30px',
    background: 'transparent',
    '&:hover': {
      background: '#212121',
    },
  },
  button: {
    position: 'absolute',
    width: '5%',
    height: '60%',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    '& > span': {
      width: '80px',
      height: '80px',
    },
    '&:hover': {
      background: '#212121',
    },
  },
  next: {
    right: 0,
  },
  prev: {
    left: 0,
  },
}));

export default useStyles;
