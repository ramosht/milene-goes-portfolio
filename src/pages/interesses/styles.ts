import styled from 'styled-components';
import { lg } from '../../../styles/breakpoints';

export const WrapperAbout = styled.div``;

export const Interests = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
`;

export const Interest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 12rem;
  text-align: center;
  padding: 1rem;

  img {
    width: 75%;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
  }
`;
