import { makeStyles } from '@material-ui/core';
import { start } from 'repl';

interface IProps {
  isDefault: boolean;
  haveLastMessage: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  root: {
    width: '100%',
    padding: '8px 16px 8px 18px',
    display: 'flex',
    fontSize: '15px !important',
    // transition: 'all 0.3s',
    '&:first-of-type': {
      marginTop: 8,
    },
    alignItems: ({ haveLastMessage }) =>
      haveLastMessage ? 'center' : 'flex-start',
    cursor: 'pointer',
    '&:hover': {
      background: ({ isDefault }) =>
        isDefault ? '#f6f6f6' : 'rgba(255, 255, 255, .05)',
    },
  },
  activeChat: {
    // padding: '11px 16px !important',
    position: 'relative',
    background: ({ isDefault }) =>
      isDefault ? '#f8f8f8' : 'rgba(255, 255, 255, .05)',
    '&:first-of-type': {
      // borderTop: 'none !important',
      // padding: '12px 16px 11px !important',
    },
    '& *': {
      textShadow: '0 0 #ffffff40',
    },
    '&::after': {
      content: "''",
      width: '4px',
      background: 'var(--color-bg-brand)',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      // borderTopRightRadius: '4px',
      // borderBottomRightRadius: '4px',
      backgroundImage:
        'linear-gradient(41.87deg, var(--color-typo-brand) 0%, #57D4F6 102.92%)',
    },
  },
  nameWrapper: {
    flex: 1,
    marginLeft: '12px',
    overflow: 'hidden',
  },
  timeWrapper: {
    textAlign: 'end',
    marginLeft: '5px',
    alignSelf: 'start',
    paddingTop: 5,
  },
  text: {
    fontSize: '15px !important',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  avatar: {
    width: '56px',
    height: '56px',
    lineHeight: '56px',
    border: '1px solid #d1d1d1',
    fontSize: '17px',
    letterSpacing: '-0.8px',
  },
}));

export default useStyles;
