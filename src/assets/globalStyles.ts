import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      body: {
        width: '100vw',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        lineHeight: 1,
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      },
      'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video':
        {
          margin: '0',
          padding: '0',
          border: '0',
          fontSize: '100%',
          font: 'inherit',
          verticalAlign: 'baseline',
          boxSizing: 'border-box',
        },
      'article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section':
        {
          display: 'block',
        },
      'ol,ul': { listStyle: 'none' },
      'blockquote,q': { quotes: 'none' },
      'blockquote:before,blockquote:after,q:before,q:after': {
        content: ["''", 'none'],
      },
      table: { borderCollapse: 'collapse', borderSpacing: '0' },
      a: { textDecoration: 'none', color: 'inherit' },
      ':active,:hover,:focus': { outline: '0', outlineOffset: '0' },
      button: {
        padding: '0',
        border: 'none',
        font: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transition: '0.2s',
        display: 'flex',
      },
      '@media screen and (max-width: 480px)': {
        'body,html': { overflowX: 'hidden' },
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
