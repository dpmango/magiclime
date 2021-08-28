import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    width: '650px',
    gridColumnGap: '44px',
    gridRowGap: '24px',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: '35px',
  },
  referral: {
    gridColumn: '1/3',
  },
  buttonsWrapper: {
    maxWidth: '572px',
    '& > button:not(:last-of-type)': {
      marginRight: '16px',
    },
  },
  button: {
    borderColor: 'rgba(0, 66, 105, 0.28)',
    width: '180px',
  },
  red: {
    color: 'var(--color-typo-alert)',
  },
  green: {
    color: 'var(--color-typo-success)',
  },
}));

export default useStyles;
