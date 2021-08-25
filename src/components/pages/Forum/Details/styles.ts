import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  head: {
    maxWidth: '75%',
    paddingRight: 24,
  },
  content: {
    margin: '36px 0',
  },
  answers: {
    borderTop: '1px solid var(--color-bg-border)',
    paddingTop: 36,
  },
  stickySidebar: {
    alignSelf: 'flex-start',
    width: '100%',
    position: 'sticky',
    top: 80,
  },
  sidebar: {
    maxWidth: 264,
    marginLeft: 'auto',
    '@media screen and (max-width: 1279px)': {
      marginLeft: 0,
    },
  },
  createBtn: {
    marginTop: 36,
  },
});

export default useStyles;
