import styled from 'styled-components';
import { md } from '../../../styles/breakpoints';

type LinkProps = {
  isCurrent: boolean;
};

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  @media screen and (min-width: ${md}px) {
    width: 30%;
  }
`;

export const Link = styled.div<LinkProps>`
  font-weight: ${props => (props.isCurrent ? 'bold' : 'regular')};
`;
