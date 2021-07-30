import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../utils/constants/colors';

interface IProps {
  isFull: boolean;
  activeLinkIndex: number;
  isDefault: boolean;
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
    height: '48px',
    width: '100%',
    padding: ({ isFull }) =>
      isFull ? '14px 0 12px 24px' : '13px 0 13px 23.5px',
    transition: 'all .235s linear',
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
    background: ({ isDefault }) =>
      isDefault ? '#f9f9f9' : 'rgba(255, 255, 255, .05)',
    '& > span': {
      color: 'var(--color-typo-brand)',
      fontWeight: '600',
    },
    '& > div': {
      color: 'var(--color-typo-brand)',
    },
  },
  animation: {
    transition: 'all .235s linear',
    width: '100%',
  },
  relative: {
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: 0,
    width: '4px',
    height: '48px',
    zIndex: 5,
    top: ({ activeLinkIndex }) => `${activeLinkIndex * 48}px`,
    transition: 'top .235s linear',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '2px',
    backgroundImage:
      'linear-gradient(41.87deg, var(--color-typo-brand) 0%, #57D4F6 102.92%)',
  },
}));

export default useStyles;