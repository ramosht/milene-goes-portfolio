import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Wrapper = styled.div`
  color: ${colors.highlight};
  margin-bottom: 1rem;
  display: block;
  position: relative;
  padding-left: 0.75rem;
  line-height: 150%;

  &:before {
    content: '';
    width: 0.25rem;
    height: 0.25rem;
    background-color: ${colors.highlight};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`;
