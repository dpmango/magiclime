import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '0px 0 60px',
    marginBottom: 130,
  },
  content: {
    paddingRight: 140,
  },
  title: {
    fontSize: 48,
  },
  blockquote: {
    position: 'relative',
    fontSize: 20,
    padding: '0px 0 0px 24px',
    '&::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      left: 0,
      width: 4,
      top: 0,
      bottom: 0,
      border: '1px solid var(--color-bg-border)',
      borderRadius: 2,
    },
  },
  cta: {
    marginBottom: -16,
    '& .Button': {
      marginRight: 16,
      marginBottom: 16,
    },
  },
  panel: {
    padding: '0px calc(((100vw - 1208px) / 2) + 274px + 40px) 0px 40px',
    marginRight: 'calc(((-100vw + 1208px) / 2) - 274px - 40px)',
    background: 'var(--color-bg-secondary)',
    minHeight: 530,
    marginLeft: 60,
    '@media screen and (max-width: 1023px)': {
      paddingTop: '32px',
      paddingRight: '32px',
      marginRight: '0',
    },
  },
  frame: {
    width: '100%',
    transform: 'translate(-132px, 60px)',
    maxWidth: 264,
    height: 530,
    background: 'var(--color-bg-stripe)',
    border: '1px solid rgba(--color-bg-border)',
    borderRadius: 36,
  },
});

export default useStyles;
