import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { isDefault: boolean }>(() => ({
  root: {
    width: '100%',
    padding: '12px 16px',
    display: 'flex',
    fontSize: '15px !important',
    // transition: 'all 0.3s',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: ({ isDefault }) =>
        isDefault ? '#fafafa' : 'rgba(255, 255, 255, .05)',
    },
  },
  activeChat: {
    padding: '11px 16px !important',
    // background: '#40a7e3',
    background: ({ isDefault }) =>
    isDefault ? '#fafafa' : 'rgba(255, 255, 255, .05)',
    borderTop: '1px solid var(--color-bg-border)',
    borderBottom: '1px solid var(--color-bg-border)',
    '&:first-of-type': {
      borderTop: 'none !important',
      padding: '12px 16px 11px !important',
    },
    '&:hover': {
      // background: '#40a7e3 !important',
    },
    '& *': {
      // color: '#fff !important',
      textShadow: '0 0 #ffffff40'
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
  },
  text: {
    fontSize: '15px !important',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  avatar: {
    width: '52px',
    height: '52px',
    lineHeight: '52px',
    border: '1px solid #d1d1d1',
    fontSize: '17px',
    letterSpacing:'-0.8px',
  },
}));

export default useStyles;
