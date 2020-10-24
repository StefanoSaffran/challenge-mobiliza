import styled, { css } from 'styled-components';

interface IContainerProps {
  highlight: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.labelDark};
    background: ${theme.colors.background};
    border-radius: 1.6rem;
    margin: ${theme.spacing.vertical};
    padding: ${theme.spacing.default};
    /* border-bottom: 1px solid ${theme.colors.greyLowerOpacity}; */

    > div:first-child {
      span {
        margin-right: 0.8rem;
      }
    }

    > div + div {
      display: flex;
      align-items: center;
      height: 1.8rem;

      svg {
        fill: ${theme.colors.primary};
        stroke: ${theme.colors.primary};
        margin-right: 0.4rem;
      }

      span {
        margin-top: 0.4rem;
      }
    }
  `}

  ${({ theme, highlight }) =>
    highlight &&
    css`
      color: ${theme.colors.secondaryDark};
      font-weight: 600;
      font-family: 'Montserrat';
    `}
`;
