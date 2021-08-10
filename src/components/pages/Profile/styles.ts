import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1208px',
    padding: '36px 40px 80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    // '@media screen and (max-width: 768px)': {
    //   padding: '36px 20px 60px',
    // },
  },
  tabs: {
    marginTop: 36,
  },

  section: {
    marginTop: 36,
    paddingBottom: 36,
    borderBottom: '1px solid var(--color-bg-border)',
    '&:last-child': {
      borderBottom: 0,
    },
  },
});

export default useStyles;
