import React, { useState } from 'react';
import { Button } from '@consta/uikit/Button';

const Landing = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);

  return (
    <div>
      <Button label={'Войти'} onClick={() => setAuthOpen(true)} />
    </div>
  );
};

export default Landing;
