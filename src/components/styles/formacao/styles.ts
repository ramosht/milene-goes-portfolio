import styled from 'styled-components';
import { lg, md } from '../../../../styles/breakpoints';
import { colors } from '../../../../styles/variables';

export const TitleLanguage = styled.h3`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  .category {
    border: 0.5px solid ${colors.primary};
    font-size: 0.55rem;
    color: ${colors.primary};
    background-color: ${colors.primary}20;
    padding: 0.2rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }
`;

export const Language = styled.div`
  color: ${colors.grey};
  margin-bottom: 2rem;
  ul {
    display: flex;
    li {
      font-size: 0.75rem;
      margin-right: 0.75rem;
      padding-right: 0.75rem;
      position: relative;
      text-transform: uppercase;

      &:not(:first-child) {
        &:before {
          content: '';
          width: 0.25rem;
          height: 0.25rem;
          background-color: ${colors.grey};
          position: absolute;
          top: 50%;
          left: -0.75rem;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }
    }
  }

  p {
    font-size: 0.75rem;
    margin-top: 0.75rem;
    margin-bottom: 0;
  }
`;

export const Conhecimentos = styled.div`
  @media screen and (min-width: ${md}px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 1rem;
  }

  @media screen and (min-width: ${lg}px) {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    grid-gap: 1rem;
  }
`;

export const Languages = styled.div`
  @media screen and (min-width: ${md}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

export const Conhecimento = styled.div`
  color: ${colors.grey};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;
