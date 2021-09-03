import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '135px 0 80px',
  },
  card: {
    position: 'relative',
    padding: '24px 24px 24px 0',
    // hered
    // border: '1px solid var(--color-bg-border)',
    borderRadius: 8,
    '&:hover': {
      background: '#f6f6f6',
    },
  },
  cardImage: {
    marginLeft: 24,
    height: 70,
    width: 70,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 0,
    '& img': {
      width: '100%',
    },
  },
  titlecard: {
    paddingLeft: 24,
    lineHeight: '20px',
    borderLeft: '1px solid #15be53',
  },
  cardButton: {
    marginLeft: 24,
    fontSize: 14,
    lineHeight: 1.5,
    height: 40,
  },
  cardContent: {},
  cardDescription: {
    marginLeft: 24,
    fontSize: 14,
    maxWidth: 256,
  },
});

export default useStyles;
