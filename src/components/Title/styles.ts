import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Wrapper = styled.h1`
  color: ${colors.primary};
  font-size: 2rem;
  position: relative;
  padding: 0 0 0.75rem 0;
  margin-bottom: 2rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5rem;
    height: 0.25rem;
    background-color: ${colors.primary};
  }
`;
