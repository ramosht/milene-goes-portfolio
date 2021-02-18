import styled from 'styled-components';
import { md } from '../../../../styles/breakpoints';

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (min-width: ${md}px) {
    width: 9.5rem;
    height: auto;
    margin: 1rem;
    object-fit: cover;
    align-self: flex-start;

    &:hover {
      cursor: pointer;
    }
  }
`;
