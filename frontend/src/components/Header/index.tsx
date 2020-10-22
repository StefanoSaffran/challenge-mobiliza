import React, { memo } from 'react';

import { Mobiliza } from '../../assets';
import Button from '../Button';
import User from './User';
import Gradient from './Gradient';
import { CONTAINER_ANIMATION, NAVS_ANIMATION } from './animations';
import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
} from './styles';

import { useAuth } from '~/contexts/auth';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <Mobiliza />
        </AnimatedLeftNav>

        <AnimatedRightNav variants={NAVS_ANIMATION}>
          <Button onClick={signOut} variant="primary">
            Try again
          </Button>
          <User />
        </AnimatedRightNav>
      </Wrapper>
      <Gradient />
    </AnimatedContainer>
  );
};

export default memo(Header);
