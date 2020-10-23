import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { lighten } from 'polished';

import Button from '~/components/Button';

export const AnimatedContainer = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background: ${theme.colors.background};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;

    > h3 {
      font-size: ${theme.fontSizes.huge};
      b {
        font-weight: 700;
        color: ${theme.colors.primary};
      }
    }

    > h3,
    > p {
      text-align: center;
      font-weight: 600;
      color: ${theme.colors.labelDark};
    }

    > p {
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

export const AnimatedWrapper = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.6rem;
    padding: ${theme.spacing.horizontal};
    height: 5.6rem;
    background: ${theme.colors.secondary};
    border-radius: ${theme.radii.default};

    > input {
      display: none;

      &:checked + label div svg {
        opacity: 1;
      }
    }

    > label {
      color: ${theme.colors.label};
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      > div {
        width: 23px;
        height: 23px;
        display: inline-block;
        border: 2px solid #fff;
        text-align: center;
        line-height: ${theme.spacing.large};
        margin-right: 0.8rem;
        border-radius: 3px;
        cursor: pointer;

        svg {
          color: ${theme.colors.primaryDark};
          opacity: 0;
        }
      }

      &:hover div {
        background: ${theme.colors.secondaryDark};
      }
    }

    @media (min-width: 760px) {
      margin: 1.6rem 8rem;
    }
  `}
`;

export const AnimatedButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    align-self: flex-end;
    border-radius: ${theme.radii.default};

    background-image: ${`linear-gradient(260deg,
      ${theme.colors.primaryLight},
      ${theme.colors.primaryDark},
      ${theme.colors.primaryLight})
    `};
    background-size: 200% 100%;
    background-position: 0 0;
    color: ${theme.colors.label};
    transition: 300ms ease-in-out;
    }

    :hover:not(:disabled) {
      background-position: -100% 0;
    }

    @media (min-width: 760px) {
      width: fit-content;
      height: auto;
    }
  `}
`;
