import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { wysiwyg?: string }>({
  pageWrapper: {
    maxWidth: '1208px',
    paddingLeft: 40,
    paddingRight: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  loader: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '&::after': {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'block',
      content: '" "',
      background: 'var(--color-bg-default)',
      opacity: 0.5,
    },
    '& .Loader': {
      zIndex: 2,
      height: 'calc(16px + var(--loader-size))',
    },
    '& .Text': {
      position: 'relative',
      zIndex: 2,
      height: 'auto',
    },
  },

  wysiwyg: {
    color: 'var(--color-typo-primary)',
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
      '@media screen and (max-width: 639px)': {
        fontSize: 36,
      },
    },
    '& h2': {
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.33,
      margin: '32px 0',
      '@media screen and (max-width: 639px)': {
        fontSize: 26,
      },
    },
    '& h3': {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.33,
      margin: '32px 0',
      '@media screen and (max-width: 639px)': {
        fontSize: 20,
      },
    },
    '& h4': {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.33,
      margin: '24px 0',
      '@media screen and (max-width: 639px)': {
        fontSize: 18,
      },
    },
    '& h5': {
      fontWeight: 500,
      fontSize: ({ wysiwyg }) => (wysiwyg !== 'muted' ? 18 : 16),
      lineHeight: 1.33,
      margin: '24px 0',
      '@media screen and (max-width: 639px)': {
        fontSize: '16px !important',
      },
    },
    '& p': {
      margin: '20px 0',
      fontSize: ({ wysiwyg }) => (wysiwyg !== 'muted' ? 18 : 16),
      lineHeight: 1.45,
      '@media screen and (max-width: 639px)': {
        fontSize: '16px !important',
      },
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
      margin: '32px 0',
      '@media screen and (max-width: 639px)': {
        margin: '24px 0',
      },
    },
    '& .scaler': {
      position: 'relative',
      fontSize: 0,
      margin: '32px 0',
      '& iframe, & video, & img': {
        position: 'absolute',
        height: '100%',
        width: '100%',
        margin: 0,
      },
      '&[data-ar="16:9"]': {
        paddingBottom: '56.25%',
      },
    },
    '& blockquote': {
      position: 'relative',
      margin: '32px 0',
      fontSize: 18,
      lineHeight: 1.45,
      padding: '12px 0px 12px 24px',
      '@media screen and (max-width: 639px)': {
        fontSize: 16,
      },
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
    '& ul, & ol': {
      listStyle: 'none',
      margin: '16px 0',
      '& li': {
        display: 'block',
        fontSize: ({ wysiwyg }) => (wysiwyg !== 'muted' ? 18 : 16),
        lineHeight: 1.45,
      },
    },
    '& table': {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '32px 0',
      '& td': {
        fontSize: 15,
        padding: '12px 16px',
        border: '1px solid var(--color-bg-border)',
      },
      '& td p': {
        fontSize: 15,
        margin: 0,
      },
    },
    '& h1, & h2, & h3, & h4, & h5, & h6, & p, & ul, & ol': {
      color: ({ wysiwyg }) =>
        wysiwyg !== 'muted' ? 'currentColor' : 'var(--color-typo-secondary)',
    },
  },
});

export default useStyles;
