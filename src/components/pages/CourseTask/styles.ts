import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { activeTab: number }>(() => ({
  root: {
    maxWidth: '1208px',
    padding: '95px 40px 95px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      padding: '60px 20px 60px',
    },
  },
  content: {
    flex: '0 0 calc(100% - 288px)',
    padding: '0 70px',
  },

  taskBox: {
    marginTop: 34,
    padding: '32px 32px 24px',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 4,
  },
  wysiwyg: {
    '& > :first-child': {
      marginTop: 0,
    },
    '& > :last-child': {
      marginBottom: 0,
    },
    '& h1': {
      fontWeight: 'bold',
      fontSize: 44,
      lineHeight: 1.45,
      margin: '32px 0',
    },
    '& h3': {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.33,
      margin: '32px 0',
    },
    '& p': {
      margin: '20px 0',
      fontSize: 18,
      lineHeight: 1.45,
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
      margin: '32px 0',
    },
    '& blockquote': {
      position: 'relative',
      margin: '32px 0',
      fontSize: 18,
      lineHeight: 1.45,
      padding: '12px 0px 12px 24px',
      '&::after': {
        display: 'block',
        content: "''",
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
        border: '1px solid #6E6E6E',
        borderRadius: 1,
      },
    },
  },
  answer: {
    marginTop: 24,
    '& .Button': {
      marginTop: 24,
    },
  },

  nav: {
    flex: '0 0 288px',
    paddingLeft: 24,
    position: 'sticky',
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
  },
  navLink: {
    position: 'relative',
    minHeight: 44,
    paddingLeft: 24,
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& .Text': {
      color: 'var(--color-typo-secondary)',
      transition: 'color .25s ease-in-out',
    },
    '&.compleated': {
      '& .Text': {
        color: 'var(--color-typo-primary)',
      },
      '&::after': {
        position: 'absolute',
        content: "''",
        left: -1,
        width: '2px',
        height: '44px',
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
    top: ({ activeTab }) =>
      `${(activeTab - 1) * 44 + (activeTab > 4 ? 49 : 0)}px`,
    transition: 'top .125s linear',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    background: 'var(--color-bg-brand)',
  },
}));

export default useStyles;
