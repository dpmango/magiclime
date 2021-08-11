import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import Hero from './Hero';
import Metrics from './Metrics';
import Scope from './Scope';
import SuitableFor from './SuitableFor';
import Skills from './Skills';
import Process from './Process';
import Experts from './Experts';
import Program from './Program';
import Features from './Features';

import useStyles from './styles';

const CoursePage: FC = () => {
  const styles = useStyles();
  // const { course } = useParams();

  return (
    <div className={styles.root}>
      <Hero />
      <Metrics />
      <Scope />
      <SuitableFor />
      <Skills />
      <Process />
      <Experts />
      <Program />
      <Features />
    </div>
  );
};

export default CoursePage;
