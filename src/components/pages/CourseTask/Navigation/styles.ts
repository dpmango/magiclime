import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { activeTab: number }>(() => ({
  nav: {
    flex: '0 0 288px',
    paddingLeft: 24,
    top: 84,
    position: 'sticky',
    alignSelf: 'flex-start',
  },

  navGroup: {
    marginBottom: 24,
    '& .Collapse-LabelText': {
      textTransform: 'uppercase',
    },
  },
  navList: {
    position: 'relative',
    listStyle: 'none',
    margin: '8px 0',
    padding: 0,
    borderLeft: '1px solid var(--color-bg-border)',
    '& li': {
      display: 'block',
    },
    '&.active $navLine': {
      opacity: 1,
    },
  },
  navLink: {
    position: 'relative',
    minHeight: 48,
    paddingLeft: 24,
    display: 'flex',
    alignItems: 'center',
    cursor: 'auto',
    '& .Text': {
      color: 'var(--color-typo-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineClamp: 2,
      display: 'box',
      boxOrient: 'vertical',
      transition: 'color .25s ease-in-out',
    },
    '& .Icon': {
      flex: '0 0 auto',
      marginLeft: 'auto',
      paddingLeft: 12,
    },
    '&.compleated': {
      cursor: 'pointer',
      '& .Text': {
        color: 'var(--color-typo-primary)',
      },
      '&::after': {
        position: 'absolute',
        content: "''",
        left: -1,
        width: '2px',
        height: '48px',
        zIndex: 2,
        top: 0,
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px',
        background: 'var(--color-bg-success)',
      },
    },
    '&.current': {
      '& .Text': {
        color: 'var(--color-typo-primary)',
      },
    },
    '&.available': {
      cursor: 'pointer',
      '& .Text': {
        color: 'var(--color-typo-primary)',
      },
    },
    '&:hover': {
      color: 'var(--color-typo-primary)',
    },
  },
  navLine: {
    position: 'absolute',
    left: -1,
    width: '2px',
    height: '44px',
    zIndex: 2,
    top: ({ activeTab }) => `${activeTab * 48}px`,
    transition: 'top .125s linear',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    background: 'var(--color-bg-brand)',
    opacity: 0,
  },
}));

export default useStyles;
