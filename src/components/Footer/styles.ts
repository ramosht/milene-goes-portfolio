import styled from 'styled-components';
import { md } from '../../../styles/breakpoints';
import { colors, fonts } from '../../../styles/variables';

export const Wrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  height: 64px;
  font-size: 0.875rem;
  color: ${colors.primary};
  font-family: ${fonts.primary};

  p {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${md}px) {
    text-align: center;
    line-height: 1.5;
  }
`;
