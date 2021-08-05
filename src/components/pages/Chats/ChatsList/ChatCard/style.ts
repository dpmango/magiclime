import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { isDefault: boolean }>(() => ({
  root: {
    width: '100%',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: ({ isDefault }) =>
        isDefault ? '#fafafa' : 'rgba(255, 255, 255, .05)',
    },
  },
  activeChat: {
    background: 'var(--color-bg-brand)',
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
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  avatar: {
    width: '48px',
    height: '48px',
    lineHeight: '48px',
    fontSize: '20px',
  },
}));

export default useStyles;
