import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { darkmode: boolean }>(() => ({
  root: {
    position: 'relative',
    background: 'var(--color-bg-stripe)',
    padding: '44px 0',
    margin: '70px 0',
  },
  content: {},
  description: {
    maxWidth: 552,
    color: ({ darkmode }) =>
      !darkmode ? '#474d57!important' : '#b8b2a8!important',
  },
  tabs: {
    marginTop: 44,
  },
}));

export default useStyles;
