import React from 'react';

import { AnimatedContainer, AnimatedWrapper } from './styles';
import DefaultLayout from '../_layouts/default';
import { LEADERBOARD_ANIMATION } from './animations';
import MainContent from './MainContent';

const Values = () => {
  return (
    <DefaultLayout>
      <AnimatedContainer
        variants={LEADERBOARD_ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
        transition={{ duration: 1 }}
      >
        <AnimatedWrapper
          variants={LEADERBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 0.8 }}
        >
          <MainContent />
        </AnimatedWrapper>
      </AnimatedContainer>
    </DefaultLayout>
  );
};

export default Values;
