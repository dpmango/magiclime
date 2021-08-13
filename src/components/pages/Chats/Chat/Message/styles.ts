import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '52px',
    height: '52px',
    lineHeight: '52px',
    border: '1px solid #d1d1d1',
    fontSize: '17px',
    letterSpacing: '-0.8px',
    marginRight: '12px',
    flex: 'none',
  },
  dot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    margin: '-4px 12px 0',
    background: 'var(--color-typo-secondary)',
  },
  text: {},
  container: {
    maxWidth: '630px',
  },
  buttons: {
    '& > button': {
      background: 'transparent',
    },
  },
  w100: {
    width: '100%',
  },
  date: {
    lineHeight: '24px',
  },
  replyFrom: {
    cursor: 'pointer',
    borderLeft: '4px solid var(--color-bg-brand)',
    padding: '4px 0 4px 16px',
    margin: '8px 0 12px',
  },
  reply: {
    marginRight: '20px',
    padding: 0,
  },
  replyCreator: {
    fontSize: '13px',
  },
  '@media screen and (max-width: 1300px)': {
    container: {
      maxWidth: '80%',
    },
  },
}));

export default useStyles;
