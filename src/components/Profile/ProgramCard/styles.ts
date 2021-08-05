import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<
  null,
  { heroBackground: string; progressWidth: string }
>(() => ({
  card: {
    position: 'relative',
    zIndex: 1,
    minHeight: 346,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
  },
  hero: (props) => ({
    position: 'relative',
    minHeight: 90,
    width: '100%',
    background: (() => {
      switch (props.heroBackground) {
        case 'green':
          return 'linear-gradient(41.87deg, #58CC01 0%, #57D4F6 102.92%)';
        case 'lime':
          return 'linear-gradient(41.87deg, #ABECD6 0%, #FBED96 102.92%)';
        case 'blue':
          return 'linear-gradient(41.87deg, #FFF1EB 0%, #ACE0F9 102.92%)';
        case 'violet':
          return 'linear-gradient(41.87deg, #9795F0 0%, #FBC8D4 102.92%)';
        default:
          return 'var(--color-typo-secondary)';
      }
    })(),
  }),
  profit: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'var(--color-bg-default)',
    borderRadius: 4,
    padding: '5px 6px 4px',
  },
  image: {
    position: 'absolute',
    bottom: -36,
    left: 14,
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: 'var(--color-bg-default)',
    border: '6px solid white',
    fontSize: 0,
    '& img': {
      width: '100%',
    },
  },
  content: {
    flex: '1 0 auto',
    width: '100%',
    padding: '42px 20px 16px 20px',
  },
  title: {},
  matrixLevel: {
    marginTop: 2,
  },
  meta: {
    marginTop: 'auto',
    paddingBottom: 12,
    borderBottom: '1px solid var(--color-bg-border)',
  },
  progress: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    height: 6,
    marginTop: 6,
    background: '',
    borderRadius: 5,
  },
  progresInner: (props) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    background: 'linear-gradient(41.87deg, #58CC01 0%, #57D4F6 102.92%)',
    width: props.progressWidth,
    borderRadius: 5,
  }),
  metaInfo: {
    marginTop: 8,
  },
  referal: {
    marginTop: 14,
  },
  referalUsers: {
    paddingRight: 12,
  },
  referalUser: {
    border: '1px solid var(--color-bg-secondary)',
    marginLeft: -12,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  referalUserCount: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: '#ECF1F4',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& span': {
      fontSize: 9,
      fontWeight: 600,
      color: 'var(--color-typo-secondary)',
    },
  },
}));

export default useStyles;
