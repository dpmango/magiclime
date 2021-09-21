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

const Landing: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Hero />
      <Steps />
      <How />
      <Skills content={mockSkills} />
      <Process content={mockProcess} />
      <SuitableFor />
      <Events />
    </div>
  );
};

export default Landing;
