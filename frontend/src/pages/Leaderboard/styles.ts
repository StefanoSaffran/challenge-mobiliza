import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lighten } from 'polished';

export const AnimatedContainer = styled(motion.div)`
  margin-top: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 2;
  padding: 0 1.6rem;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${lighten(
      0.08,
      theme.colors.primaryLight,
    )} 0%, ${lighten(0.04, theme.colors.primaryDark)} 100%);`};
`;

export const AnimatedWrapper = styled(motion.div)`
  max-width: 50rem;
  width: 100%;
  display: flex;
`;
