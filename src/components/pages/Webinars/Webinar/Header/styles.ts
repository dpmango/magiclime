import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundImage:
      'linear-gradient(41.87deg, rgba(88, 204, 1,.2) 0%, rgba(87, 212, 246, .2) 102.92%)',
    '& > div': {
      maxWidth: '1210px',
    },
  },
  w100: {
    flex: 1,
  },
  title: {
    fontSize: '56px',
    lineHeight: '64px',
  },
  tagsContainer: {
    '& > button:not(:last-of-type)': {
      marginRight: '15px',
    },
  },
  signUp: {
    color: '#fafafa',
    backgroundImage:
      'linear-gradient(120deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
    fontWeight: 500,
    letterSpacing: '-0.3px',
  },
  square: {
    width: '456px',
    height: '456px',
    background: '#fff',
    borderRadius: '10px',
    flex: 'none',
  },
  '@media screen and (max-width: 1300px)': {
    square: {
      width: '300px',
      height: '300px',
    },
    title: {
      fontSize: '36px',
      lineHeight: '44px',
    },
  },
}));

export default useStyles;
