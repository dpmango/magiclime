import { makeStyles } from '@material-ui/core';

interface IProps {
  isOpened: boolean;
  height?: string;
}

const useStyles = makeStyles<null, IProps>(() => ({
  root: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 10,
    padding: '12px 0',
    marginBottom: 8,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  toggle: {
    position: 'relative',
    cursor: 'pointer',
    padding: '12px 48px 12px 24px',
    '&:hover $title': {
      color: 'var(--color-typo-link-hover)',
    },
  },
  title: {
    transition: 'color .25s ease-in-out',
  },
  toggleIcon: {
    position: 'absolute',
    top: '50%',
    right: 24,
    fontSize: 0,
    transform: 'translateY(-50%)',
    transition: 'transform .25s ease-in-out',
    '& svg': {
      fill: 'var(--color-typo-system)',
      transform: ({ isOpened }) =>
        isOpened ? 'rotate(90deg)' : 'rotate(-90deg)',
      transformOrigin: 'center center',
      transition: 'transform .25s ease-in-out, fill .25s ease-in-out',
    },
  },
  content: {
    padding: '12px 24px',
    maxWidth: 814,
    marginBottom: ({ isOpened }) => (isOpened ? 0 : -24),
    height: ({ isOpened, height }) => (isOpened ? height || '100%' : 0),
    opacity: ({ isOpened }) => (isOpened ? 1 : 0),
    transition: 'all .3s ease-in-out',
  },
  description: {
    color: '#474d57!important',
  },
}));

export default useStyles;
