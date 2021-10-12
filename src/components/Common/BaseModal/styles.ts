import { makeStyles } from '@material-ui/core';

interface IProps {
  isOpen: boolean;
  dynamicSize?: boolean;
  theme: string;
}

const useStyles = makeStyles<null, IProps>({
  root: {
    // @ts-ignore
    zIndex: '2000 !important',
  },
  modal: {
    position: 'relative',
    width: '100%',
    minWidth: ({ dynamicSize }) => (dynamicSize ? 'auto' : '696px'),
    padding: ({ isOpen }) => (isOpen ? '32px 24px 24px' : 0),
    maxWidth: ({ theme }) => (theme === 'narrow' ? '480px' : '100%'),
  },
  icon: {
    margin: '20px 0',
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 16,
    fontSize: 16,
    cursor: 'pointer',
    opacity: 0.35,
    transition: 'color .25s ease-in-out, opacity .25s ease-in-out',
    '&:hover': {
      color: 'var(--color-bg-alert) !important',
      opacity: 0.6,
    },
    '& > span': {
      width: '14px',
      height: '14px',
    },
  },
});

export default useStyles;
