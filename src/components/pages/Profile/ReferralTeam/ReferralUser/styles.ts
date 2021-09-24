import { makeStyles } from '@material-ui/core';

interface IProps {
  nested?: boolean;
  nested2?: boolean;
  root?: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  referral: {
    position: 'relative',
    background: ({ nested, nested2, root }) =>
      nested || root || nested2
        ? 'var(--color-bg-default)'
        : 'var(--color-bg-stripe)',
    border: ({ root }) => (root ? 0 : '1px solid var(--color-bg-border)'),
    padding: ({ root }) => (root ? '0px 26px 0px 12px' : '13px 26px 12px 12px'),
    marginBottom: ({ root }) => (root ? 32 : 0),
    marginLeft: ({ nested2 }) => (nested2 ? 40 : 0),
    width: 'auto',
    cursor: ({ root }) => (root ? 'default' : 'pointer'),
    '&:first-child': {
      borderTopWidth: 0,
    },
    '&::before, &::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      zIndex: 2,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&::after': {
      display: 'block',
      width: 9,
      height: 9,
      left: ({ nested }) => (nested ? 20 : -24),
      background: 'linear-gradient(41.87deg, #58CC01 0%, #57D4F6 102.92%)',
      borderRadius: '50%',
    },
    '&::before': {
      width: ({ nested }) => (nested ? 37 : 30),
      height: 1,
      left: ({ nested }) => (nested ? -18 : -52),
      borderBottom: '1px dashed var(--color-bg-border)',
    },
  },
  referralUser: ({ root, nested }) => ({
    flex: '0 0 45%',
    minWidth: 1,
    paddingRight: 12,
    paddingLeft: !nested ? 0 : 30,
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    '& ': (() => {
      return root
        ? {
            '&::after': {
              display: 'block',
              content: "' '",
              position: 'absolute' as const,
              zIndex: 1,
              top: 36,
              left: -52,
              bottom: -62,
              width: 1,
              borderLeft: '1px dashed var(--color-bg-border)',
            },
          }
        : {};
    })(),
  }),

  referralUserWrapper: {
    marginLeft: ({ root }) => (root ? 12 : 8),
    minWidth: 1,
  },
  referralAvatar: ({ root }) => ({
    flexShrink: 0,
    '& ': (() => {
      return root ? { width: 72, height: 72, lineHeight: '72px' } : {};
    })(),
  }),
  referralDate: {
    flex: '0 0 25%',
    paddingRight: 12,
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  referralDatetime: {
    flex: '0 0 25%',
    marginLeft: 'auto',
    textAlign: 'right',
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },

  referralMatrixId: {
    flex: '0 0 18%',
    paddingRight: 12,
    cursor: 'pointer',
    '& .Icon': {
      color: '#C7CFCE',
      transition: 'color .25s ease-in-out',
    },
    '&:hover': {
      '& .Icon': {
        color: 'var(--color-typo-brand)',
      },
    },
  },
  referralCount: {
    flex: '0 0 12%',
    textAlign: 'left',
  },

  referralUserData: {
    flex: '0 0 100%',
    width: '100%',
    minWidth: 1,
    marginTop: 4,
    paddingLeft: ({ nested }) => (nested ? 70 : 40),
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
}));

export default useStyles;
