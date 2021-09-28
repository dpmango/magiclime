import { makeStyles } from '@material-ui/core';

const baseAnimation = (name: string, delay: number) => ({
  animationName: `$${name}`,
  animationDuration: '2.5s',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  transition: 'all 1.5s',
  animationDelay: `${delay}s`,
  animationTimingFunction: 'ease-in-out',
});

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: 'rgba(17, 68, 167, 1)',
    paddingTop: '80px',
    marginBottom: '95px',
    height: '480px',
  },
  text: {
    color: '#fff',
  },
  cubeContainer: {
    position: 'relative',
    width: 'min-content',
    margin: '100px auto 0',
  },
  base: {},
  isScale: {
    transform: 'scaleX(-1)',
  },
  edge: {
    zIndex: 20,
    position: 'absolute',
  },
  h_1: {
    left: '-20px',
    bottom: 'calc(100% - 3px)',
    ...baseAnimation('h_1', 0.4),
  },
  h_2: {
    left: '33px',
    bottom: 'calc(100% + 20px)',
    ...baseAnimation('h_2', 0.2),
  },
  h_3: {
    left: '90px',
    bottom: 'calc(100% - 6px)',
    ...baseAnimation('h_3', 0.6),
  },
  v_1: {
    left: 'calc(100% + 10px)',
    bottom: 'calc(100% - 87px)',
    ...baseAnimation('v_1', 0.8),
  },
  v_2: {
    left: 'calc(100% - 32px)',
    bottom: '-18px',
    ...baseAnimation('v_2', 1),
  },
  v_3: {
    left: '18px',
    bottom: '-18px',
    ...baseAnimation('v_3', 1.2),
  },
  v_4: {
    left: '-30px',
    bottom: 'calc(100% - 87px)',
    ...baseAnimation('v_4', 1.4),
  },
  v_5: {
    left: '-70px',
    bottom: 'calc(100% - 66px)',
    ...baseAnimation('v_5', 1.6),
  },
  '@keyframes h_1': {
    '0%': {
      left: '-20px',
      bottom: 'calc(100% - 3px)',
    },
    '40.5%': {
      left: '-20px',
      bottom: 'calc(100% - 3px)',
    },
    '59.4%': {
      left: '0',
      bottom: 'calc(100% - 44px)',
    },
    '100%': {
      left: '0',
      bottom: 'calc(100% - 44px)',
    },
  },
  '@keyframes h_2': {
    '0%': {
      left: '33px',
      bottom: 'calc(100% + 20px)',
    },
    '40.5%': {
      left: '33px',
      bottom: 'calc(100% + 20px)',
    },
    '59.4%': {
      left: '37px',
      bottom: 'calc(100% - 23.5px)',
    },
    '100%': {
      left: '37px',
      bottom: 'calc(100% - 23.5px)',
    },
  },
  '@keyframes h_3': {
    '0%': {
      left: '90px',
      bottom: 'calc(100% - 6px)',
    },
    '40.5%': {
      left: '90px',
      bottom: 'calc(100% - 6px)',
    },
    '59.4%': {
      left: '73.5px',
      bottom: 'calc(100% - 45px)',
    },
    '100%': {
      left: '73.5px',
      bottom: 'calc(100% - 45px)',
    },
  },
  '@keyframes v_1': {
    '0%': {
      left: 'calc(100% + 10px)',
      bottom: 'calc(100% - 87px)',
    },
    '40.5%': {
      left: 'calc(100% + 10px)',
      bottom: 'calc(100% - 87px)',
    },
    '59.4%': {
      left: 'calc(100% - 38.5px)',
      bottom: 'calc(100% - 87px)',
    },
    '100%': {
      left: 'calc(100% - 38.5px)',
      bottom: 'calc(100% - 87x)',
    },
  },
  '@keyframes v_2': {
    '0%': {
      left: 'calc(100% - 32px)',
      bottom: '-18px',
    },
    '40.5%': {
      left: 'calc(100% - 32px)',
      bottom: '-18px',
    },
    '59.4%': {
      left: 'calc(100% - 75px)',
      bottom: '-18px',
    },
    '100%': {
      left: 'calc(100% - 75px)',
      bottom: '-18px',
    },
  },
  '@keyframes v_3': {
    '0%': {
      left: '18px',
      bottom: '-18px',
    },
    '40.5%': {
      left: '18px',
      bottom: '-18px',
    },
    '59.4%': {
      left: '37px',
      bottom: '-18px',
    },
    '100%': {
      left: '37px',
      bottom: '-18px',
    },
  },
  '@keyframes v_4': {
    '0%': {
      left: '-30px',
      bottom: 'calc(100% - 87px)',
    },
    '40.5%': {
      left: '-30px',
      bottom: 'calc(100% - 87px)',
    },
    '59.4%': {
      left: '0',
      bottom: 'calc(100% - 87px)',
    },
    '100%': {
      left: '0',
      bottom: 'calc(100% - 87px)',
    },
  },
  '@keyframes v_5': {
    '0%': {
      left: '-70px',
      bottom: 'calc(100% - 66px)',
    },
    '40.5%': {
      left: '-70px',
      bottom: 'calc(100% - 66px)',
    },
    '59.4%': {
      left: '0',
      bottom: 'calc(100% - 66px)',
    },
    '100%': {
      left: '0',
      bottom: 'calc(100% - 66px)',
    },
  },
});

export default useStyles;
