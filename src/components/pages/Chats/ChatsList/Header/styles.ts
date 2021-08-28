import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../utils/constants/colors';

const useStyles = makeStyles<null, { open: boolean }>(() => ({
  root: {
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    padding: '5px 16px 5px 0',
    height: '55px',
  },
  meatball: {
    marginLeft: '10px',
  },
  search: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: 'var(--color-bg-secondary)',
    transition: 'all .25s linear',
    overflow: 'hidden',
    height: (props) => (props.open ? '50px' : '0px'),
    '& > div': {
      width: '100%',
      padding: '0 16px',
      background: 'var(--color-bg-secondary)',
      border: 'none',
    },
  },
  group: {
    maxWidth: '50%',
    direction: 'rtl',
    '& span': {
      fontWeight: 500,
      lineHeight: '44px',
    },
  },
}));

export default useStyles;
