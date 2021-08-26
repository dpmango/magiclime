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
      '@media screen and (max-width: 1023px)': {
        gridTemplateColumns: '1fr',
      },
      '& $cardContent': {
        marginLeft: 'auto',
        '@media screen and (max-width: 1023px)': {
          marginLeft: 0,
        },
      },
    },
    '@media screen and (max-width: 1023px)': {
      gridTemplateColumns: '1fr',
      '& $cardGridImage': {
        order: -1,
      },
    },
  },
  cardGridImage: {},
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
    '@media screen and (min-width: 1024px)': {
      fontSize: 19,
    },
  },
  image: {
    paddingBottom: '50%',
    position: 'relative',
    zIndex: 1,
    background: 'var(--color-bg-secondary)',
    borderRadius: 16,
    // '@media screen and (max-width: 992px)': {
    //   maxWidth: 400,
    // },
  },
});

export default useStyles;
