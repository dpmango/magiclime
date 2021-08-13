import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 24,
    borderRadius: 16,
    height: '100%',
    background: 'var(--color-bg-defaul)',
    border: '1px solid var(--color-bg-border)',
  },
  image: {
    position: 'relative',
    flex: '0 0 auto',
    zIndex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    '& > img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  content: {
    height: '100%',
  },
  speakers: {
    color: 'var(--color-typo-ghost)',
    marginRight: '5px',
  },
  cta: {
    marginTop: 40,
  },
  referalWrapper: {
    flex: '0 0 auto',
    width: 'auto',
    marginLeft: 'auto',
    paddingLeft: 12,
  },
  referalUsers: {
    paddingRight: 16,
  },
  author: {
    flex: '0 0 auto',
  },
  tagsContainer: {
    flex: 1,
    '& > div': {
      marginRight: '15px',
      marginTop: '8px',
      background: 'rgba(255, 108, 71, .2)',
      color: '#FF6C47',
    },
  },
});

export default useStyles;
