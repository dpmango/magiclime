import { makeStyles } from '@material-ui/core';

interface IProps {
  nested?: boolean;
  root?: boolean;
}

const useStyles = makeStyles<null, IProps>(() => ({
  referal: {
    position: 'relative',
    background: ({ nested, root }) =>
      nested || root ? 'var(--color-bg-default)' : 'var(--color-bg-stripe)',
    border: ({ root }) => (root ? 0 : '1px solid var(--color-bg-border)'),
    padding: ({ root }) => (root ? '0px 26px 0px 12px' : '13px 26px 12px 12px'),
    marginBottom: ({ root }) => (root ? 32 : 0),
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
  referalUser: ({ root, nested }) => ({
    flex: '0 0 50%',
    minWidth: 1,
    paddingRight: 12,
    // paddingLeft: ({ nested }) => (nested ? 30 : 0),
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    '&': (() => {
      if (nested) {
        return {
          paddingLeft: 30,
        };
      }
      if (root) {
        return {
          '&::after': {
            display: 'block',
            content: "' '",
            position: 'absolute', // TODO absolute breaking TS validation
            zIndex: 1,
            top: 36,
            left: -52,
            bottom: -62,
            width: 1,
            borderLeft: '1px dashed var(--color-bg-border)',
          },
        };
      }

      return {};
    })(),
  }),
  referalUserWrapper: {
    marginLeft: ({ root }) => (root ? 12 : 8),
    minWidth: 1,
  },
  referalAvatar: ({ root }) => ({
    flexShrink: 0,
    '& ': (() => {
      return root ? { width: 72, height: 72 } : {};
    })(),
  }),
  referalBtl: {
    flex: '0 0 23%',
    paddingRight: 12,
  },
  referalLevel: {
    flex: '0 0 12%',
    paddingRight: 12,
  },
  referalCount: {
    flex: '0 0 15%',
    textAlign: 'left',
  },
}));

export default useStyles;
