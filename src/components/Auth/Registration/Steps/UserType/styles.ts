import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    marginBottom: 40,
  },
  card: {
    position: 'relative',
    cursor: 'pointer',
    '&:hover $cardImage': {
      borderColor: 'var(--color-bg-border)',
    },
    '&.active $cardImage': {
      borderColor: 'var(--color-bg-brand)',
    },
  },
  cardImage: {
    position: 'relative',
    zIndex: 1,
    paddingBottom: '69%',
    borderRadius: 8,
    boxShadow:
      '0px 2px 2px rgba(0, 32, 51, 0.02), 0px 2px 8px rgba(0, 32, 51, 0.16)',
    border: '2px solid transparent',
    transition: 'border .25s ease-in-out',
    '& img': {
      maxWidth: '100%',
    },
  },
  cardTitle: {
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

export default useStyles;
