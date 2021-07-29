import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../utils/constants/colors';

interface IProps {
  isFull: boolean;
  activeLinkIndex: number;
  isFirstAnimationPlay: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  root: {
    width: ({ isFull }) => (isFull ? '275px' : '75px'),
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
  //   transition: 'all .235s linear',
  // },
  text: {
    whiteSpace: 'nowrap',
    // transform: ({ isFull }) => (isFull ? 'scaleY(1)' : 'scaleY(0)'),
    opacity: ({ isFull }) => (isFull ? '1' : '0'),
    fontSize: ({ isFull }) => (isFull ? '' : '0px'),
    transition: 'all .235s linear',
  },
  linksContainer: {
    width: '100%',
    position: 'relative',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
<<<<<<< HEAD
    height: ({ isFull }) => (isFull ? '48px' : '48px'),
    width: '100%',
    padding: ({ isFull }) =>
      isFull ? '14px 0 12px 24px' : '13px 0 13px 23.5px',
    transition: 'all .235s linear',
=======
    height: ({ isFull }) => (isFull ? '44px' : '60px'),
    width: '100%',
    padding: ({ isFull }) => (isFull ? '5px 0 5px 22px' : '5px 0 5px 25.5px'),
    transition: 'all .2s linear',
>>>>>>> a20a15206495be3950de7fa7d493919a690eb0bd
    '& > span': {
      flex: 'none',
      transition: 'all .235s linear',
    },
    '&:hover': {
      color: 'var(--color-typo-brand)',
      '& > span': {
        color: 'var(--color-typo-brand)',
      },
      '& > div': {
        color: 'var(--color-typo-brand)',
      },
    },
  },
  activeLink: {
    background: '#f9f9f9',
    '& > span': {
      color: 'var(--color-typo-brand)',
      fontweight: '600',
      
    },
    '& > div': {
      
      color: 'var(--color-typo-brand)',
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
    //   backgroundImage: 'linear-gradient(41.87deg, var(--color-typo-brand) 0%, #57D4F6 102.92%)',
    // },
  },
  animation: {
    transition: 'all .235s linear',
    width: '100%',
  },
  // transition: {
  //   transition: 'all .4s linear',
  // },
  line: {
    position: 'absolute',
    left: 0,
    width: '4px',
    height: ({ isFull }) => (isFull ? '48px' : '48px'),
    transition: 'all .235s linear',
    zIndex: 5,
    top: ({ activeLinkIndex }) => `${activeLinkIndex * 48}px`,
    transition: ({ isFirstAnimationPlay }) =>
      isFirstAnimationPlay ? 'none' : 'top .125s linear',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '2px',
    backgroundImage: 'linear-gradient(41.87deg, var(--color-typo-brand) 0%, #57D4F6 102.92%)',
  },
}));

export default useStyles;
