import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '80px 0',
  },
  tabs: {
    marginTop: 48,
  },
  tabList: {},
  tab: {
    display: 'block',
    padding: 24,
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background .25s ease-in-out',
    '&:hover': {
      background: 'var(--color-bg-secondary)',
    },
    '&.active': {
      background: 'var(--color-bg-secondary)',
      '& $tabContent': {
        display: 'block',
      },
    },
  },
  tabContent: {
    display: 'none',
  },
  tabView: {
    padding: '32px 0',
  },
});

export default useStyles;
