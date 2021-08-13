import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { category: number }>(() => ({
  root: (props) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '100%',
    minHeight: '180px',
    transition: 'opacity .25s ease-in-out',
    backgroundColor: (() => {
      switch (props.category) {
        case 1:
          return '#D1FFF8';
        case 2:
          return '#79D8A6';
        case 3:
          return '#3AA2FE';
        case 4:
          return '#E1F1EC';
        case 5:
          return '#FCDA81';
        case 6:
          return '#FF9D7E';
        case 7:
          return '#8FF0E1';
        case 8:
          return '#B5E8F7';
        case 9:
          return '#F4D978';
        default:
          return '#8FF0E1';
      }
    })(),
    '&:hover': {
      opacity: 0.8,
    },
  }),
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    height: '100%',
  },
  image: {
    marginLeft: '10px',
    maxWidth: '120px',
    '& > img': {
      maxWidth: '100%',
    },
  },
  title: {
    margin: '8px 0 20px 0',
  },
  detail: {
    fontSize: '14px',
    lineHeight: '20px',
    '& > span': {
      fontWeight: 600,
    },
  },
}));

export default useStyles;
