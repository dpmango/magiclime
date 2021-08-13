import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    padding: '24px 0 0',
    flex: 1,
    width: '200px',
    height: 'calc(100vh - 64px)',
  },
  header: {
    width: 'calc(100% - 24px)',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    paddingBottom: '26px',
    marginLeft: '24px',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    marginRight: '16px',
    border: `1px solid #E8E8E8`,
    borderRadius: '8px',
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    width: '100%',
    padding: '28px 0 0 24px',
  },
  replyAnimation: {
    animation: '$effect 3s ease-out',
  },
  '@keyframes effect': {
    '0%': {
      background: 'transparent',
      // borderRight: '5px solid transparent',
    },
    '20%': {
      background: 'var(--color-bg-system)',
      // borderRight: '5px solid var(--color-typo-brand)',
    },
    '100%': {
      transform: 'transparent',
      // borderRight: '5px solid transparent',
    },
  },
}));

export default useStyles;
