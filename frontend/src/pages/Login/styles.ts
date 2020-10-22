import styled, { css } from 'styled-components';
import { transparentize, lighten } from 'polished';
import { motion } from 'framer-motion';

import Button from '~/components/Button';

export const AnimatedContainer = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 36rem;
    padding: 3.2rem;
    background: ${theme.colors.secondaryDark};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};

    h1 svg {
      width: 15rem !important;
      height: auto !important;

      fill: ${theme.colors.primaryDarker};
    }

    h2 {
      font-size: ${theme.fontSizes.large};
      margin-top: 1.6rem;
      text-align: center;
      font-weight: 500;
      color: ${theme.colors.label};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.4rem;
    width: 100%;

    label {
      width: 100%;

      input {
        width: 100%;
        padding: 0.8rem 1.2rem;
        border: 0;
        font-size: 1.5rem;
        border-radius: ${theme.radii.small};
        background: #562b81;
        color: ${theme.colors.label};
        ::placeholder {
          opacity: 0.4;
          color: ${theme.colors.background};
        }
      }
    }
  `}
`;

export const SignInButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1.2rem;
    background-image: ${`linear-gradient(260deg,
      ${theme.colors.primaryLight},
      ${theme.colors.primaryDarker},
      ${theme.colors.primaryLight})
    `};
    background-size: 200% 100%;
    background-position: 0 0;
    color: ${theme.colors.label};
    transition: 300ms ease-in-out;

    :disabled {
      background-image: ${`linear-gradient(260deg,
        ${theme.colors.primaryLight},
        ${theme.colors.primaryDarker},
        ${theme.colors.primaryLight})
      `};
    }

    :not(:disabled):before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: -100;
      background: ${theme.colors.primary};
      transition: opacity 0.45s;
      pointer-events: none;
    }

    :hover:not(:disabled) {
      background-position: -100% 0;
      background-size: 200% 100%;
      background: ${`linear-gradient(260deg, ${lighten(
        0.04,
        theme.colors.primaryLight,
      )} 0%, ${lighten(0.04, theme.colors.primaryDarker)} 100%)`};
      :before {
        opacity: 1;
      }
    }

    :active:before {
      opacity: 0;
    }
  `}
`;
