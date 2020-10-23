import React from 'react';

import { Container, AnimatedWrapper } from './styles';
import DefaultLayout from '../_layouts/default';
import { VALUES_ANIMATION } from './animations';
import MainContent from './MainContent';

const Values = () => {
  return (
    <DefaultLayout>
      <Container>
        <AnimatedWrapper
          variants={VALUES_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <MainContent />
        </AnimatedWrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Values;
