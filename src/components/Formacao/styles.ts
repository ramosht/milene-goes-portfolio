import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Wrapper = styled.div`
  color: ${colors.grey};
  margin-bottom: 1.75rem;
  border-bottom: 1px dashed ${colors.lightGrey};
  padding-bottom: 1rem;

  h2 {
    font-size: 1.4rem;
    color: ${colors.highlight};
    margin-bottom: 0.5rem;
    line-height: 150%;
  }

  .universidade,
  .periodo {
    margin-bottom: 0.5rem;
    display: block;
  }

  .universidade {
    font-weight: bold;
  }

  .universidade {
    margin-bottom: 1rem;
  }

  p {
    line-height: 150%;
  }
`;
