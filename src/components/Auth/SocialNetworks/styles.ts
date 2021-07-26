import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  service: {
    borderRadius: '50%',
    background: '#00000008',
    height: '45px',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'all .25s linear',
    justifyContent: 'center',
    width: '45px',
    '&:not(:last-of-type)': {
      marginRight: '12px',
    },
    '&:hover': {
      background: 'rgba(0,0,0,0.3)',
    },
  },
}));

export default useStyles;
