import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../utils/constants/colors';

interface IProps {
  isFull: boolean;
  activeLinkIndex: number;
  isDefault: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  root: {
    width: ({ isFull }) => (isFull ? '285px' : '75px'),
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
    flex: 'none',
    display: 'flex',
    transition: 'all .4s linear',
    overflowX: 'hidden',
    position: 'sticky',
    top: '64px',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'column',
    borderRight: `1px solid ${COLORS.layoutBorderColor}`,
  },
  section: {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    whiteSpace: 'nowrap',
    transform: ({ isFull }) => (isFull ? 'scaleY(1)' : 'scaleY(0)'),
    opacity: ({ isFull }) => (isFull ? '1' : '0'),
    fontSize: ({ isFull }) => (isFull ? '' : '0px'),
    transition: 'all .175s linear',
  },
  linksContainer: {
    width: '100%',
    position: 'relative',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '48px',
    width: '100%',
    padding: '14px 0 12px 24px',
    transition: 'all .235s linear',
    '& > span': {
      flex: 'none',
      transition: 'all .235s linear',
      transform: ({ isFull }) => (isFull ? 'translateX(0)' : 'translateX(45%)'),
    },
    '&:hover': {
      color: 'var(--color-typo-brand)',
      textShadow: '0 0 #00000040',
      '& > span': {
        color: 'var(--color-typo-brand)',
      },
      '& > div': {
        color: 'var(--color-typo-brand)',
      },
    },
  },
  activeLink: {
    background: ({ isDefault }) =>
      isDefault ? 'var(--color-bg-secondary)' : 'rgba(255, 255, 255, .05)',
    '& path': {
      fill: 'var(--color-typo-brand) !important',
      fontWeight: '500',
    },
    '& > div': {
      fontWeight: '500',
      textShadow: '0 0 var(--color-typo-brand)',
      color: 'var(--color-typo-brand)',
    },
  },
  disableLink: {
    pointerEvents: 'none',
    '& > div': {
      color: 'var(--color-control-bg-disable) !important',
    },
    '& path': {
      fill: 'var(--color-control-bg-disable) !important',
    },
    '&:hover': {
      textShadow: 'none',
      '& > span': {
        color: 'var(--color-control-bg-disable) !important',
      },
      '& > div': {
        color: 'var(--color-control-bg-disable) !important',
      },
    },
  },
  animation: {
    transition: 'all .235s linear',
    width: '100%',
  },
  relative: {
    position: 'relative',
  },
  icon: {
    color: '#C7CFCE',
  },
  line: {
    position: 'absolute',
    left: 0,
    width: '4px',
    height: '48px',
    zIndex: 5,
    top: ({ activeLinkIndex }) => `${activeLinkIndex * 48}px`,
    transition: 'top .125s linear',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    backgroundImage:
      'linear-gradient(41.87deg, var(--color-typo-brand) 0%, #57D4F6 102.92%)',
  },
}));

export default useStyles;
