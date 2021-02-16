import styled from 'styled-components';
import { md } from '../../../styles/breakpoints';

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${md}px) {
    flex-direction: row;
  } ;
`;
