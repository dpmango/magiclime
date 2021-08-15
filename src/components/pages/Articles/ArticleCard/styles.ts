import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { darkmode: boolean }>(() => ({
  root: {
    display: 'block',
    marginBottom: 24,
    '&:hover': {
      '.image': {
        opacity: 0.7,
      },
    },
  },
  image: {
    paddingBottom: '63.5%',
    borderRadius: 8,
    background: 'var(--color-bg-system)',
    fontSize: 0,
    transition: 'opacity .25s ease-in-out',
    '& > img': {
      flex: '1 1 auto',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
  content: {
    marginTop: '12px',
  },
  tag: {
    background: ({ darkmode }) =>
      !darkmode
        ? 'rgba(0, 66, 105, 0.07) !important'
        : 'rgba(255, 189, 150, 0.07) !important',
    color: ({ darkmode }) =>
      !darkmode
        ? 'rgba(0, 57, 92, 0.8) !important'
        : 'rgba(255, 198, 163, 0.8) !important',
    marginRight: '16px',
    marginBottom: '12px',
  },
}));

export default useStyles;
