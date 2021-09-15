import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { rank: number }>(() => ({
  card: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: '17px 24px',
    marginBottom: 8,
  },
  cardNumber: {
    flex: '0 0 8%',
    maxWidth: '8%',
    minWidth: 1,

    paddingRight: 8,
  },
  cardUser: {
    flex: '0 0 55%',
    maxWidth: '55%',
    paddingRight: 24,
    minWidth: 1,
  },
  cardUserMain: {
    paddingLeft: 8,
    minWidth: 1,
  },
  cardAvatar: {
    flex: '0 0 54px',
    width: 54,
    height: 54,
    lineHeight: '54px',
  },
  cardUserName: {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 20,
  },
  cardLeague: {
    flex: '0 0 20%',
    maxWidth: '20%',
    paddingRight: 16,
    minWidth: 1,

    '& img': {
      maxWidth: 16,
    },
  },
  cardStat: {
    flex: '0 0 18%',
    maxWidth: '18%',
    minWidth: 1,
    paddingRight: 16,
  },

  featured: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: '0px 0px 14px',
  },
  featuredNumber: ({ rank }) => ({
    position: 'absolute',
    top: -17,
    left: '50%',
    transform: 'translateX(-50%)',
    minWidth: 54,
    minHeight: 54,
    borderRadius: '50%',
    border: '2px solid var(--color-bg-default)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    background: (() => {
      switch (rank) {
        case 1:
          return '#F83E02';
        case 2:
          return '#95A7CF';
        case 3:
          return '#C79080';
        default:
          return '#F83E02';
      }
    })(),
    '& span': {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 0,
    },
  }),
  featuredCover: ({ rank }) => ({
    height: 90,
    borderRadius: '16px 16px 0 0',
    background: (() => {
      switch (rank) {
        case 1:
          return 'linear-gradient(90deg, #F83600 0%, #F9D423 100%)';
        case 2:
          return 'linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)';
        case 3:
          return 'linear-gradient(90deg, #C79081 0%, #FFCDA8 100%)';
        default:
          return 'linear-gradient(90deg, #F83600 0%, #F9D423 100%)';
      }
    })(),
  }),
  featuredMain: {
    marginTop: -38,
  },
  featuredAvatar: {
    flex: '0 0 110px',
    width: 110,
    height: 110,
    lineHeight: '110px',
    boxShadow: '0px 0px 20px rgba(249, 209, 34, 0.3)',
    border: '2px solid var(--color-bg-default)',
  },
  featuredStats: {
    marginTop: '24px',
    padding: '12px 24px 0',
    borderTop: '1px solid var(--color-bg-border)',
  },
}));

export default useStyles;
