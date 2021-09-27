import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  referral: {
    position: 'relative',
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    padding: '13px 26px 12px 12px',
    marginBottom: 0,
    cursor: 'pointer',
    transition: 'background .25s ease-in-out',
    '&:first-child': {
      borderTopWidth: 0,
    },
    '&:hover': {
      background: 'var(--color-bg-stripe)',
    },
  },
  referralUser: {
    flex: '0 0 45%',
    minWidth: 1,
    paddingRight: 12,
    paddingLeft: 0,
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  referralUserWrapper: {
    marginLeft: 8,
    minWidth: 1,
  },
  referralAvatar: {
    flexShrink: 0,
  },
  referralDate: {
    flex: '0 0 25%',
    paddingRight: 12,
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  referralId: {
    flex: '0 0 30%',
    textAlign: 'right',
    paddingRight: 12,
    cursor: 'pointer',
    '& .Icon': {
      color: '#C7CFCE',
      transition: 'color .25s ease-in-out',
    },
    '&:hover': {
      '& .Icon': {
        color: 'var(--color-typo-brand)',
      },
    },
  },
}));

export default useStyles;
