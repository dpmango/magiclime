import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '360px',
    minWidth: '310px',
    borderRight: `1px solid ${COLORS.layoutBorderColor}`,
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
  },
  hiddenInput: {
    opacity: 0,
    visibility: 'hidden',
    position: 'absolute',
  },
  addPhoto: {
    width: '48px',
    height: '48px',
    background: 'var(--color-bg-brand)',
    borderRadius: '50%',
    margin: '0 16px 0 0',
    cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: 'var(--color-control-typo-secondary-hover)',
    },
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  input: {
    flex: 1,
    borderRadius: 0,
    border: 'none',
    borderBottom:
      'var(--control-border-width) solid var(--color-control-bg-border-default)',
  },
  list: {
    flex: 1,
    overflowY: 'auto',
  },
  friend: {
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    '&:first-of-type': {
      borderTop: `1px solid ${COLORS.layoutBorderColor}`,
    },
  },
  panel: {
    background: 'var(--color-bg-secondary)',
  },
}));

export default useStyles;
