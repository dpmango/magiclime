import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { darkmode: boolean }>(() => ({
  root: {
    position: 'relative',
    background: 'var(--color-bg-stripe)',
    padding: '44px 0',
    margin: '70px 0',
  },
  icon: {
    flex: '0 0 60px',
    paddingTop: 10,
    paddingRight: 16,
    textAlign: 'center',
    fontSize: 44,
  },
  content: {},
  description: {
    color: ({ darkmode }) =>
      !darkmode ? '#474d57!important' : '#b8b2a8!important',
  },
}));

export default useStyles;
