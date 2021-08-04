import React, { ComponentProps } from 'react';
import { makeStyles } from '@material-ui/core';
import { Field, FieldHookConfig, FieldProps } from 'formik';
import { TextField } from '@consta/uikit/TextField';
import Typography from 'components/Common/Typography';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  splitter: {
    margin: '0 5px',
    width: '15px',
    height: '2px',
    top: 'calc(50% - 1px)',
    background: 'var(--color-typo-primary)',
  },
});

type RangeGroupProps = Omit<ComponentProps<typeof TextField>, 'onChange'>;

type PropsType = RangeGroupProps & {
  title: string;
  placeholders?: string[];
};

const RangeBlock = ({
  title,
  field: { value, name },
  form: { setFieldValue },
  placeholders = ['', ''],
}: FieldProps & PropsType) => {
  const styles = useStyles();

  return (
    <div>
      <Typography as="p" size="s" weight="semibold" margin="0 0 12px 0">
        {title}
      </Typography>
      <div className={styles.content}>
        <TextField
          value={value[0]}
          onChange={({ value: v }) => setFieldValue(name, [v, value[1]])}
          placeholder={placeholders[0]}
        />
        <div className={styles.splitter} />
        <TextField
          value={value[1]}
          onChange={({ value: v }) => setFieldValue(name, [value[0], v])}
          placeholder={placeholders[1]}
        />
      </div>
    </div>
  );
};

const FormikRangeGroup = (
  props: PropsType & FieldHookConfig<typeof TextField>
) => {
  return <Field {...props} component={RangeBlock} />;
};

export default FormikRangeGroup;
