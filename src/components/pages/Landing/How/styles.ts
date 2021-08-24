import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '80px 0',
  },
  grid: {
    marginTop: 48,
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '43fr 57fr',
    '@media screen and (max-width: 992px)': {
      display: 'block',
    },
  },
  tabList: {},
  tab: {
    display: 'block',
    padding: '24px 40px 24px 24px',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background .25s ease-in-out',
    '&:hover': {
      background: 'var(--color-bg-secondary)',
    },
    '&.active': {
      background: 'var(--color-bg-secondary)',
      '& $tabDescription': {
        display: 'block',
      },
    },
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: 300,
  },
  tabDescription: {
    display: 'none',
    fontSize: 14,
    fontWeight: 300,
  },
  tabContent: {
    padding: '32px 0',
  },
});

export default useStyles;
