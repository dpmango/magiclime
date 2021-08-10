import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { activeTab: number }>(() => ({
  root: {
    marginTop: 42,
  },
  nav: {
    flex: '0 0 240px',
  },
  navList: {
    position: 'relative',
    listStyle: 'none',
    margin: '8px 0',
    padding: 0,
    borderLeft: '1px solid var(--color-bg-border)',
    '& li': {
      display: 'block',
    },
  },
  navLink: {
    minHeight: 44,
    paddingLeft: 24,
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  navLine: {
    position: 'absolute',
    left: -1,
    width: '2px',
    height: '44px',
    zIndex: 2,
    top: ({ activeTab }) =>
      `${(activeTab - 1) * 44 + (activeTab > 4 ? 49 : 0)}px`,
    transition: 'top .125s linear',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    background: 'var(--color-bg-brand)',
  },
  content: {
    flex: '0 0 calc(100% - 240px)',
    paddingRight: 24,
  },
}));

export default useStyles;
