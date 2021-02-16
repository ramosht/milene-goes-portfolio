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

export const MenuHome = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${md}px) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 0.5rem;

  @media screen and (min-width: ${md}px) {
    margin: 0 0.5rem;
  }

  a {
    display: block;
    padding: 0.75rem;
    background: ${colors.highlight};
    min-width: 12rem;
    color: ${colors.white};
    text-align: center;
    border-radius: 0.25rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  }
`;
