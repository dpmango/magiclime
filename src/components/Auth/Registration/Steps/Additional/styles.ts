import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  inputsWrapper: {
    flex: 1,
    '& > div:first-of-type': {
      marginBottom: '16px',
    },
  },
  photoField: {
    flex: 1,
    boxShadow:
      '0px 2px 2px var(--color-bg-system), 0px 2px 8px var(--color-bg-system)',
    borderRadius: '10px',
    padding: '16px 0',
    marginRight: '20px',
    position: 'relative',
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > svg': {
      marginTop: '25px',
      '& > path': {
        fill: 'var(--color-bg-system)',
      },
    },
    '& img': {
      width: '100%',
      height: '70%',
      objectFit: 'contain',
    },
  },
  photo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  addPhoto: {
    background: 'var(--color-control-bg-ghost)',
    borderRadius: '3px',
    width: 'calc(100% - 32px)',
    margin: '0 auto',
    height: '40px',
    color: 'var(--color-control-typo-ghost)',
    cursor: 'pointer',
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: 'var(--color-control-typo-ghost-hover)',
    },
    '& > span': {
      marginRight: '5px',
    },
  },
}));

export default useStyles;
