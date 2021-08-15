import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { category: number; darkmode: boolean }>(
  () => ({
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
            return !props.darkmode ? '#D1FFF8' : 'var(--color-bg-secondary)';
          case 2:
            return !props.darkmode ? '#79D8A6' : 'var(--color-bg-secondary)';
          case 3:
            return !props.darkmode ? '#3AA2FE' : 'var(--color-bg-secondary)';
          case 4:
            return !props.darkmode ? '#E1F1EC' : 'var(--color-bg-secondary)';
          case 5:
            return !props.darkmode ? '#FCDA81' : 'var(--color-bg-secondary)';
          case 6:
            return !props.darkmode ? '#FF9D7E' : 'var(--color-bg-secondary)';
          case 7:
            return !props.darkmode ? '#8FF0E1' : 'var(--color-bg-secondary)';
          case 8:
            return !props.darkmode ? '#B5E8F7' : 'var(--color-bg-secondary)';
          case 9:
            return !props.darkmode ? '#F4D978' : 'var(--color-bg-secondary)';
          default:
            return !props.darkmode ? '#8FF0E1' : 'var(--color-bg-secondary)';
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
  })
);

export default useStyles;
