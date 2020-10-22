import React, { memo } from 'react';

import { AnimatedContainer } from './styles';
import { GRADIENT_ANIMATION } from './animations';

const Gradient: React.FC = () => {
  return (
    <AnimatedContainer
      variants={GRADIENT_ANIMATION}
      initial="unMounted"
      animate="mounted"
    />
  );
};

export default memo(Gradient);
