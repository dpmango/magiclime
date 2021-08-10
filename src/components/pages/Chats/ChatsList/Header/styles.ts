import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  search: {
    width: '100%',
    padding: '2px 0',
    position: 'relative',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    background: 'var(--color-bg-secondary)',
    height: 'min-content',
    '& > div': {
      width: '100%',
      padding: '0 16px',
      background: 'var(--color-bg-secondary)',
      border: 'none',
    },
  },
  group: {
    width: '100%',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupSelect: {
    maxWidth: '30%',
    '& span': {
      fontWeight: 500,
    },
  },
  cursor: {
    cursor: 'pointer',
  },
}));

export default useStyles;
