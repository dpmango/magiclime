import React, { FC, useCallback, useState } from 'react';
import { Modal } from '@consta/uikit/Modal';

import SuitableFor from '../Course/SuitableFor';
import Skills from '../Course/Skills';
import Process from '../Course/Process';

import Hero from './Hero';
import Steps from './Steps';
import How from './How';
import Events from './Events';

import { mockSkills, mockProcess } from './mockData';
import useStyles from './styles';

interface IProps {
  setAuthOpen: (v: boolean) => void;
}

const Landing: FC<IProps> = ({ setAuthOpen }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Hero setAuthOpen={(v) => setAuthOpen(v)} />
      <Steps setAuthOpen={(v) => setAuthOpen(v)} />
      <How />
      <Skills content={mockSkills} />
      <Process content={mockProcess} />
      <SuitableFor />
      <Events />
    </div>
  );
};

export default Landing;
