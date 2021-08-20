import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '80px 0 80px',
  },
  card: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '55fr 45fr',
    margin: '64px 0 40px',
  },
  event: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  eventCta: {
    paddingTop: 16,
    marginTop: 'auto',
  },
  cardContent: {
    maxWidth: 440,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    '&.reverse': {
      marginLeft: 'auto',
    },
  },
  image: {
    paddingBottom: '56.25%',
    position: 'relative',
    zIndex: 1,
    background: 'var(--color-bg-secondary)',
    borderRadius: 16,
  },
});

export default useStyles;
