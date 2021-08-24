import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '80px 0',
  },
  grid: {
    marginTop: 36,
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '4fr 6fr',
    '@media screen and (max-width: 992px)': {
      display: 'block',
    },
  },
  tabList: {},
  tab: {
    display: 'block',
    padding: '24px',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background .25s ease-in-out',
    '&:hover': {
      // background: 'var(--color-bg-secondary)',
    },
    '&.active': {
      border: '1px solid #6E6E6E',
      background: 'var(--color-bg-default) !important',
      '& $tabDescription': {
        display: 'block',
      },
    },
  },
  tabTitle: {
    fontSize: 19,
    // fontWeight: 300,
  },
  tabDescription: {
    display: 'none',
    fontSize: 16,
    fontWeight: 300,
  },
  tabContent: {
    border: '1px solid #6E6E6E',
    padding: '32px 24px',
  },
});

export default useStyles;
