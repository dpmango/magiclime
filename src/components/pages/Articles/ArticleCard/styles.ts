import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
    // TODO - conflicts with --color-control-bg-ghost
    background: 'rgba(0, 66, 105, 0.07)',
    color: 'rgba(0, 57, 92, 0.8) !important',
    marginRight: '16px',
    marginBottom: '12px',
  },
});

export default useStyles;
