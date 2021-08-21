import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '80px 0 80px',
  },
  card: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '43fr 57fr',
    margin: '64px 0 40px',
    '&.reverse': {
      gridTemplateColumns: '57fr 43fr',
      '& $cardContent': {
        marginLeft: 'auto',
      },
    },
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
  },
  cardDescription: {
    fontSize: 19,
  },
  image: {
    paddingBottom: '50%',
    position: 'relative',
    zIndex: 1,
    background: 'var(--color-bg-secondary)',
    borderRadius: 16,
  },
});

export default useStyles;
