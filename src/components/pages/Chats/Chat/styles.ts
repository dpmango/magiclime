import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    padding: '24px 0 0',
    flex: 1,
    width: '200px',
    height: 'calc(100vh - 64px)',
    '& > svg': {
      width: '25%',
    },
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
    padding: '24px 0 0 24px',
    position: 'relative',
  },
  chooseChat: {
    maxWidth: 510,
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
  line: {
    height: '2px',
    flex: 1,
    borderRadius: '1px',
    background: 'var(--color-typo-secondary)',
  },
  scrollToBottom: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    transition: 'opacity .5s linear',
    '& > span': {
      width: '32px',
      height: '32px',
    },
  },
  skeleton: {
    display: 'flex',
    width: '300px',
    marginBottom: '30px',
    '& > div:first-of-type': {
      marginRight: '16px',
      flex: 'none',
    },
  },
}));

export default useStyles;
