import React, { FC, useState } from 'react';
import { TextField, TextFieldProps } from '@consta/uikit/TextField';
import { Icon } from '@consta/uikit/Icon';
import { IconEye } from '@consta/uikit/IconEye';
import { IconEyeClose } from '@consta/uikit/IconEyeClose';

const PasswordField: FC<TextFieldProps> = (props) => {
  const [isPasswordOpen, setPasswordOpen] = useState(false);

  const Eye = () => (
    <Icon
      view="ghost"
      size="m"
      onClick={() => setPasswordOpen(!isPasswordOpen)}
      style={{ cursor: 'pointer' }}
    >
      {isPasswordOpen ? <IconEye /> : <IconEyeClose />}
    </Icon>
  );

  return (
    <TextField
      type={isPasswordOpen ? 'text' : 'password'}
      rightSide={Eye}
      {...props}
    />
  );
};

export default PasswordField;
