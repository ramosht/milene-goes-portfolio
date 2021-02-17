import styled from 'styled-components';
import { md } from '../../../../styles/breakpoints';
import { colors } from '../../../../styles/variables';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  .slick-prev,
  .slick-next {
    display: none;

    @media screen and (min-width: ${md}px) {
      color: ${colors.primary};
      width: 2rem;
      height: 2rem;
      display: block;
    }
  }

  .slick-dots li.slick-active button:before {
    color: ${colors.primary};
  }
`;
