import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '140px 0',
  },
  item: {
    padding: '32px 24px',
    border: '1px solid var(--color-bg-stripe)',
    borderRadius: 10,
  },
  image: {
    flex: '0 0 110px',
    paddingTop: 12,
    paddingRight: 20,
    textAlign: 'center',
  },
  content: {},
  description: {
    color: '#474d57!important',
  },
});

export default useStyles;
