import styled from 'styled-components';
import { md } from '../../../../styles/breakpoints';

export const ItensContato = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${md}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ItemContato = styled.li`
  text-align: center;
  margin-bottom: 2.5rem;

  @media screen and (min-width: ${md}px) {
    width: 20%;
    margin-bottom: 0rem;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 6rem;
      margin-bottom: 1rem;

      @media screen and (min-width: ${md}px) {
        max-width: 10rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
