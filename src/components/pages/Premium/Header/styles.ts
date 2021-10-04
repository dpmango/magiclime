import { makeStyles } from '@material-ui/core';

const baseCubeAnimation = (name: string, duration = 3) => ({
  animationName: `$${name}`,
  animationDuration: `${duration}s`,
  // animationIterationCount: 'infinite',
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  // transition: 'all 1.5s',
  // animationDelay: `${delay}s`,
  animationTimingFunction: 'ease-in-out',
});

const baseElementAnimation = (name: string) =>
  `$${name} 1.2s ease-in-out infinite alternate`;

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '95px',
  },
  block: {
    display: 'flex',
    flex: 1,
  },
  card: {
    width: '260px',
    transition: 'all 0.2s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-5px)',
    },
    '&:not(:last-of-type)': {
      marginRight: '15px',
    },
    '& > svg': {
      width: '100%',
      height: '140px',
      marginBottom: '16px',
      borderRadius: '12px',
      objectFit: 'cover',
    },
  },
  checkIcon: {
    marginLeft: '5px',
  },
  cubeContainer: {
    position: 'relative',
    maxWidth: '500px',
    transform: 'scale(.829)',
    // width: 'min-content',
  },
  title: {
    fontSize: 64,
  },
  basement: {
    animation: baseElementAnimation('jump'),
    marginTop: '5px',
    zIndex: 2,
  },
  titlearticle: {
    margin: '2px 0 4px',
    textShadow: '0 0 black',
  },
  cube: {
    position: 'absolute',
    opacity: 0,
    zIndex: 20,
  },
  centerCube: {
    left: '176px',
    bottom: '221px',
    animationDelay: '0s !important',
    ...baseCubeAnimation('centerCube', 1),
  },
  cube_1: {
    animationDelay: '1s',
    ...baseCubeAnimation('cube_1'),
  },
  cube_2: {
    animationDelay: '1.2s',
    ...baseCubeAnimation('cube_2'),
  },
  cube_3: {
    animationDelay: '1.4s',
    ...baseCubeAnimation('cube_3'),
  },
  cube_4: {
    animationDelay: '1.6s',
    ...baseCubeAnimation('cube_4'),
  },
  cube_5: {
    animationDelay: '1.2s',
    ...baseCubeAnimation('cube_5'),
  },
  cube_6: {
    animationDelay: '1.8s',
    ...baseCubeAnimation('cube_6'),
  },
  shadow: {
    opacity: 1,
    position: 'absolute',
    left: '109px',
    bottom: '80px',
    animation: baseElementAnimation('shadowScale'),
  },
  borderShadow: {
    position: 'absolute',
    left: '9px',
    bottom: 0,
    animation: baseElementAnimation('borderShadowScale'),
  },
  border: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 10,
    animation: baseElementAnimation('borderJump'),
  },
  '@keyframes borderJump': {
    '0%': {
      transform: 'translateY(-3px)',
    },
    '100%': {
      transform: 'translateY(3px)',
    },
  },
  '@keyframes jump': {
    '0%': {
      transform: 'translateY(-8px)',
    },
    '100%': {
      transform: 'translateY(8px)',
    },
  },
  '@keyframes borderShadowScale': {
    '0%': {
      transform: 'scale(1.035)',
    },
    '100% ': {
      transform: 'scale(1)',
    },
  },
  '@keyframes shadowScale': {
    '0%': {
      transform: 'scale(1.045)',
    },
    '100% ': {
      transform: 'scale(0.95)',
    },
  },
  '@keyframes centerCube': {
    '0%': {
      transform: 'scale(2.5)',
    },
    '100% ': {
      opacity: 0.8,
      transform: 'scale(1)',
    },
  },
  '@keyframes cube_1': {
    '0%': {
      opacity: 0,
      left: 0,
      bottom: '275px',
    },
    '20%': {
      opacity: 1,
      left: 0,
      bottom: '275px',
    },
    '50%': {
      opacity: 1,
      left: '103px',
      bottom: '264px',
    },
    '100%': {
      opacity: 1,
      left: '103px',
      bottom: '264px',
    },
  },
  '@keyframes cube_2': {
    '0%': {
      opacity: 0,
      left: 0,
      bottom: '65px',
    },
    '20%': {
      opacity: 1,
      left: 0,
      bottom: '65px',
    },
    '50%': {
      opacity: 1,
      left: '103px',
      bottom: '180px',
    },
    '100%': {
      opacity: 1,
      left: '103px',
      bottom: '180px',
    },
  },
  '@keyframes cube_3': {
    '0%': {
      opacity: 0,
      left: '177px',
      bottom: '345px',
    },
    '20%': {
      opacity: 1,
      left: '177px',
      bottom: '345px',
    },
    '50% ': {
      opacity: 1,
      left: '177px',
      bottom: '306px',
    },
    '100%': {
      opacity: 1,
      left: '177px',
      bottom: '306px',
    },
  },
  '@keyframes cube_4': {
    '0%': {
      opacity: 0,
      left: '370px',
      bottom: '225px',
    },
    '20%': {
      opacity: 1,
      left: '370px',
      bottom: '225px',
    },
    '50%': {
      opacity: 1,
      left: '250px',
      bottom: '264px',
    },
    '100%': {
      opacity: 1,
      left: '250px',
      bottom: '264px',
    },
  },
  '@keyframes cube_5': {
    '0%': {
      opacity: 0,
      left: '290px',
      bottom: '135px',
    },
    '20%': {
      opacity: 1,
      left: '290px',
      bottom: '135px',
    },
    '50%': {
      opacity: 1,
      left: '250px',
      bottom: '180px',
    },
    '100% ': {
      opacity: 1,
      left: '250px',
      bottom: '180px',
    },
  },
  '@keyframes cube_6': {
    '0%': {
      opacity: 0,
      left: '176px',
      bottom: '25px',
    },
    '20%': {
      opacity: 1,
      left: '176px',
      bottom: '25px',
    },
    '50%': {
      opacity: 1,
      left: '176px',
      bottom: '138px',
    },
    '100%': {
      opacity: 1,
      left: '176px',
      bottom: '138px',
    },
  },
});

export default useStyles;
