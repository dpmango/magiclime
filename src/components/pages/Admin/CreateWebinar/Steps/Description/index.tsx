import { Field, FieldProps } from 'formik';
import React, { FC } from 'react';
import Flex from '../../../../../Common/Flex';
import TextEditor from '../../../../../Common/TextEditor';

const Description: FC = () => {
  return (
    <Flex>
      <Field name="step_3.description">
        {({ field: { name }, form: { setFieldValue } }: FieldProps) => (
          <TextEditor
            onChange={(value) => {
              setFieldValue(name, value);
            }}
          />
        )}
      </Field>
    </Flex>
  );
};

export default Description;
