import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background: transparent;
`;

export const AnimatedContainer = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background: transparent;
    border-radius: ${theme.radii.default};
    padding: 2.4rem;
    margin-top: 3.2rem;

    > h3 {
      color: ${theme.colors.label};
      font-size: ${theme.fontSizes.huge};
      font-weight: 600;
      font-family: 'Montserrat';
    }

    > h3,
    > p {
      text-align: center;
    }

    > p {
      font-weight: 500;
      color: ${theme.colors.labelDark};
      font-size: ${theme.fontSizes.extraLarge};
    }

    > div:first-child {
      margin-top: 1.6rem;
    }

    > div + div {
      margin: 2.4rem 1.6rem;

      @media (min-width: 760px) {
        margin: 1.6rem 8rem;
      }
    }
  `}
`;
