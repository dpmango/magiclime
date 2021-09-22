import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'flex-start',
  },
  next: {
    // margin: '30px 0 24px',
    margin: '0',
  },
  userAgreement: {
    '& > a': {
      textDecoration: 'none',
      color: 'var(--color-typo-link)',
    },
  },
}));

export default useStyles;
