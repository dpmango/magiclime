import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    marginBottom: '200px',
  },
  image: {
    objectFit: 'cover',
    width: '420px',
    height: '300px',
    borderRadius: '10px',
  },
  line: {
    display: 'block',
    position: 'absolute',
    background: '#c4c4c4',
    height: '2px',
    zIndex: 30,
  },
  item: {
    position: 'absolute',
    zIndex: 20,
    width: '180px',
  },
  topLeft: {
    left: 0,
    top: '-90px',
    '& > span': {
      top: '70%',
      left: '200px',
      transform: 'skew(-20deg, 20deg)',
      right: 'calc(100% - 400px)',
    },
  },
  topRight: {
    right: 0,
    top: '-90px',
    '& > span': {
      top: '70%',
      right: '200px',
      transform: 'skew(-15deg, -15deg)',
      left: '-250px',
    },
  },
  bottomLeft: {
    left: 0,
    bottom: '-130px',
    '& > span': {
      top: '30%',
      left: '200px',
      transform: 'skew(-20deg, -25deg)',
      right: 'calc(100% - 450px)',
    },
  },
  bottomRight: {
    right: 0,
    bottom: '-130px',
    '& > span': {
      top: '30%',
      right: '200px',
      transform: 'skew(-20deg, 20deg)',
      left: '-300px',
    },
  },
});

export default useStyles;
