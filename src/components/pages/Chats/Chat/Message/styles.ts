import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '52px',
    height: '52px',
    lineHeight: '52px',
    border: '1px solid #C7CFCE',
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
    background: '#C7CFCE',
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
    fontSize: 14,
  },
  replyFrom: {
    height: '100%',
    cursor: 'pointer',
    borderLeft: '0.2rem solid var(--color-bg-brand)',
    padding: '0 0 0 10px',
    margin: '8px 0 12px',
    '& > *': {
      lineHeight: '1.3125',
      fontSize: '14px !important',
    },
  },
  reply: {
    marginRight: '20px',
    padding: 0,
    fontSize: 14,
  },
  replyCreator: {
    fontSize: '13px',
  },
  messageImage: {
    width: '100%',
    maxWidth: '630px',
    maxHeight: '630px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  '@media screen and (max-width: 1300px)': {
    container: {
      maxWidth: '80%',
    },
  },
}));

export default useStyles;
