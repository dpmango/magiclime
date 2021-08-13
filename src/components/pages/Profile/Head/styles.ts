import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  avatar: {
    flex: '0 0 auto',
    width: 84,
    height: 84,
  },
  content: {
    paddingLeft: 26,
  },
  refLink: {
    marginTop: 2,
    cursor: 'pointer',
    transition: 'color .25s ease-in-out',
    '&:hover': {
      color: 'var(--color-typo-link)',
    },
  },
});

export default useStyles;
