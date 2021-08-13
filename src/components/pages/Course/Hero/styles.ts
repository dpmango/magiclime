import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    background:
      'linear-gradient(41.87deg, rgba(88, 204, 1, .2) 0%, rgba(87, 212, 246, .2) 102.92%)',
  },
  pseudoLabel: {
    pointerEvents: 'none',
  },
  image: {
    padding: '52px 0',
    textAlign: 'right',
    '& img': {
      maxWidth: '100%',
    },
  },
  recomended: {
    marginBottom: '12px',
  },
  title: {
    position: 'relative',
    marginTop: 8,
    marginBottom: 32,
    paddingBottom: 16,
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '2px',
      width: '56px',
      background: '#14151A',
    },
    '@media screen and (max-width: 1439px)': {
      fontSize: '40px',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: '32px',
    },
  },
  description: {
    color: '#474d57!important',
    marginBottom: '24px',
  },
});

export default useStyles;
