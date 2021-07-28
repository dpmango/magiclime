import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../utils/constants/colors';

interface IProps {
  isFull: boolean;
  activeLinkIndex: number;
  isFirstAnimationPlay: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  root: {
    width: ({ isFull }) => (isFull ? '290px' : '75px'),
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
    flex: 'none',
    display: 'flex',
    transition: 'all .4s linear',
    overflowX: 'hidden',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRight: `1px solid ${COLORS.layoutBorderColor}`,
    padding: '24px 0',
  },
  // avatar: {
  //   width: '56px',
  //   height: '56px',
  //   flex: 'none',
  //   margin: ({ isFull }) => (isFull ? '0 16px 0 24px' : '0'),
  //   transition: 'all .2s linear',
  // },
  text: {
    whiteSpace: 'nowrap',
    transform: ({ isFull }) => (isFull ? 'scaleY(1)' : 'scaleY(0)'),
    opacity: ({ isFull }) => (isFull ? '1' : '0'),
    fontSize: ({ isFull }) => (isFull ? '' : '0px'),
    transition: 'all .4s linear',
  },
  linksContainer: {
    width: '100%',
    position: 'relative',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '60px',
    width: '100%',
    padding: ({ isFull }) =>
      isFull ? '13px 0 13px 22px' : '13px 0 13px 25.5px',
    transition: 'all .2s linear',
    '& > span': {
      flex: 'none',
      transition: 'all .2s linear',
    },
    '&:hover': {
      '& > span': {
        color: '#58CC01',
      },
      '& > div': {
        color: 'var(--color-typo-primary)',
      },
    },
  },
  activeLink: {
    '& > span': {
      color: '#58CC01',
    },
    '& > div': {
      color: 'var(--color-typo-primary)',
    },
    // '& > ::after': {
    //   content: "''",
    //   width: '2px',
    //   position: 'absolute',
    //   left: 0,
    //   top: 0,
    //   bottom: 0,
    //   borderTopRightRadius: '3px',
    //   borderBottomRightRadius: '3px',
    //   backgroundImage: 'linear-gradient(41.87deg, #58CC01 0%, #57D4F6 102.92%)',
    // },
  },
  animation: {
    transition: 'all .3s linear',
    width: '100%',
  },
  // transition: {
  //   transition: 'all .4s linear',
  // },
  line: {
    position: 'absolute',
    left: 0,
    width: '3px',
    height: '60px',
    top: ({ activeLinkIndex }) => `${activeLinkIndex * 60}px`,
    transition: ({ isFirstAnimationPlay }) =>
      isFirstAnimationPlay ? 'none' : 'top .25s linear',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    backgroundImage: 'linear-gradient(41.87deg, #58CC01 0%, #57D4F6 102.92%)',
  },
}));

export default useStyles;
