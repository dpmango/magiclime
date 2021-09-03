import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '128px 0',
  },
  grid: {
    marginTop: 36,
    display: 'grid',
    minHeight: 435,
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
    fontSize: 18,
    // letterSpacing: '0.5px',
    fontWeight: 500,
  },
  tabDescription: {
    display: 'none',
    fontSize: 15,
    fontWeight: 400,
  },
  tabContent: {
    border: '1px solid #6E6E6E',
    padding: '32px 24px',
  },
});

export default useStyles;
