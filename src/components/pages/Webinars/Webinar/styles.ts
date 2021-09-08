import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  content: {
    width: '100%',
    maxWidth: '1210px',
    margin: '0 auto',
    padding: '0 40px',
  },
  details: {
    width: '100%',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    paddingBottom: '36px',
    marginBottom: '70px',
    display: 'flex',
    '& > div': {
      marginRight: '40px',
    },
  },
  peoples: {
    width: '265px',
    flex: 'none',
    marginLeft: '120px',
  },
  info: {
    flex: 1,
    '& ul': {
      listStyle: 'disc',
      listStylePosition: 'inside',
    },
  },
  title: {
    fontSize: '56px',
  },
  signUp: {
    color: '#fafafa',
    backgroundImage:
      'linear-gradient(120deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
    fontWeight: 500,
    letterSpacing: '-0.3px',
    width: '100%',
    marginTop: '36px',
  },
  '@media screen and (max-width: 1300px)': {
    title: {
      fontSize: '36px',
    },
  },
}));

export default useStyles;
