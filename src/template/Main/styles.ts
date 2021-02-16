import styled from 'styled-components';
import { md } from '../../../styles/breakpoints';
import { colors } from '../../../styles/variables';

type WrapperProps = {
  isHome: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  background-image: ${props =>
    props.isHome ? 'url(/img/home/background-03.jpg)' : ''};
  background-color: ${props => (props.isHome ? `${colors.primary}66` : '')};
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.main<WrapperProps>`
  position: relative;
  padding: 2rem 1rem;
  min-height: calc(100vh - 8.25rem);
  ${props =>
    props.isHome &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media screen and (min-width: ${md}px) {
    padding: 4rem 1rem;
  }
`;
