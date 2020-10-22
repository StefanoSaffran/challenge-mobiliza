import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 1.6rem;

  max-width: 116.2rem;
  width: 100%;
  height: 10.4rem;
`;

export const AnimatedLeftNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;

  > svg {
    cursor: pointer;
    max-width: 9.2rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const AnimatedRightNav = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (max-width: 470px) {
    > button {
      display: none;
    }
  }
`;
