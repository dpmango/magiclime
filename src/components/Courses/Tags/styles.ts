import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    overflowX: 'auto',
    marginBottom: '-12px',
  },
  button: {
    display: 'inline-block',
    padding: '11px 23px',
    border: '1px solid rgba(0, 66, 105, 0.28)',
    borderRadius: '30px',
    fontSize: '16px',
    marginRight: '12px',
    marginBottom: '12px',
    lineHeight: 1,
    cursor: 'pointer',
    transition: 'background .25s ease-in-out, border .25s ease-in-out',
    '&.active': {
      backgroundColor: '#0078D2',
      color: 'white',
    },
    '&:hover': {
      borderColor: '#0078D2',
    },
  },
});

export default useStyles;
