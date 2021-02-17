import styled from 'styled-components';
import { md } from '../../../../styles/breakpoints';
import { colors } from '../../../../styles/variables';

export const Title = styled.h1`
  text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (min-width: ${md}px) {
    font-size: 4rem;
  }

  .linkedin {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${colors.highlight};
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Description = styled.p`
  text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5);
  font-size: 1.25rem;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (min-width: ${md}px) {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
`;

export const CurriculoButton = styled.div`
  a {
    display: block;
    padding: 0.75rem;
    background: ${colors.highlight};
    color: ${colors.white};
    text-align: center;
    border-radius: 0.25rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  }
`;
