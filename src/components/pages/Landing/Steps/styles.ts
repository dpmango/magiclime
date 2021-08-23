import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '135px 0 80px',
  },
  card: {
    position: 'relative',
    padding: 24,
    // border: '1px solid var(--color-bg-border)',
    borderRadius: 10,
  },
  cardImage: {
    height: 64,
    width: 64,
    background: 'var(--color-bg-border)',
    borderRadius: 10,
  },
  cardContent: {},
  cardDescription: {
    maxWidth: 256,
  },
});

export default useStyles;
