import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { isDefault: boolean }>(() => ({
  root: {
    width: '100%',
    padding: '12px 16px',
    display: 'flex',
    fontSize: '14px !important',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: ({ isDefault }) =>
        isDefault ? '#fafafa' : 'rgba(255, 255, 255, .05)',
    },
  },
  activeChat: {
    background: 'var(--color-bg-brand)',
    // background: ({ isDefault }) =>
    // isDefault ? '#f5f5f5' : 'rgba(255, 255, 255, .05)',
    '&:hover': {
      background: 'var(--color-bg-brand) !important',
    },
    '& *': {
      color: '#fff !important',
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
    fontSize: '14px !important',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  avatar: {
    width: '52px',
    height: '52px',
    lineHeight: '52px',
    fontSize: '18px',
  },
}));

export default useStyles;
