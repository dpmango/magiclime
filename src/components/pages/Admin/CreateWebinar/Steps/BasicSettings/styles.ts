import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '745px',
  },
  banner: {
    width: '360px',
    height: '360px',
    border: `1px solid ${COLORS.layoutBorderColor}`,
    borderRadius: '10px',
    marginRight: '24px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: '360px',
      borderRadius: '10px',
      objectFit: 'cover',
    },
  },
  addPhoto: {
    background: 'var(--color-control-bg-ghost)',
    borderRadius: '4px',
    width: 'calc(100% - 80px)',
    height: '32px',
    color: 'var(--color-control-typo-ghost)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: 'var(--color-control-typo-ghost-hover)',
    },
    '& > span': {
      marginRight: '5px',
    },
  },
  haveImage: {
    position: 'absolute',
    opacity: 0.6,
    bottom: '20px',
    left: '50%',
    transition: 'opacity .3s linear',
    transform: 'translateX(-50%)',
    '&::hover': {
      opacity: 1,
    },
  },
  fieldsWrapper: {
    flex: 1,
    '& > div:not(:last-of-type)': {
      marginBottom: '18px',
    },
  },
}));

export default useStyles;
