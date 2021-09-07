import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { inline?: boolean; showRate?: boolean }>({
  root: {
    background: 'var(--color-bg-default)',
    borderRadius: 4,
    height: '100%',
    padding: ({ inline }) => (!inline ? '32px 20px 12px' : 0),
    border: ({ inline }) => (!inline ? '1px solid var(--color-bg-border)' : 0),
  },
  coinIcon: {
    flex: '0 0 42px',
    paddingRight: 10,
    minWidth: 1,
    '& img': {
      width: '100%',
    },
  },
  coinTitle16: {
    lineHeight: '16px',
  },
  coinBalance: {
    fontSize: '20px',
  },
  coinContent: {
    flex: '1 1 auto',
    minWidth: 1,
  },
});

export default useStyles;
