import { makeStyles } from '@material-ui/core';

interface IProps {
  heroBackground: string;
  progressWidth: string;
  disabled?: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  card: {
    position: 'relative',
    zIndex: 1,
    minHeight: 346,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    pointerEvents: (props) => (props.disabled ? 'none' : 'all'),
  },
  wrapper: {
    flex: '1 0 auto',
    width: '100%',
    filter: (props) => (props.disabled ? 'blur(5px)' : 'none'),
    pointerEvents: (props) => (props.disabled ? 'none' : 'all'),
    userSelect: (props) => (props.disabled ? 'none' : 'all'),
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
  referral: {
    marginTop: 14,
  },
  referralCount: {
    flex: '0 0 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  context: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    border: '1px solid var(--color-bg-border)',
    transform: 'translate(-50%,-50%)',
    background: 'var(--color-bg-default)',
    maxWidth: '200px',
    textAlign: 'center',
    padding: 12,
    borderRadius: 8,
    pointerEvents: 'all',
  },
}));

export default useStyles;
