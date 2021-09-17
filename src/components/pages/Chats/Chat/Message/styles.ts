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
    marginBottom: '4px',
  },
  file: {
    display: 'flex',
    padding: '16px',
    width: 'min-content',
    minWidth: '350px',
    maxWidth: 'calc(100% - 64px)',
    alignItems: 'center',
    borderRadius: '12px',
    background: 'var(--color-bg-ghost)',
    margin: '10px 0',
    '& > button': {
      marginRight: '15px',
    },
    '& > div': {
      maxWidth: 'calc(100% - 64px)',
    },
  },
  fileName: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  messageImage: {
    width: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '10px',
    margin: '15px 0',
  },
  '@media screen and (max-width: 1300px)': {
    container: {
      maxWidth: '80%',
    },
  },
}));

export default useStyles;
