import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Case = styled.li`
  margin-bottom: 2rem;
  flex: 1;
  border-bottom: 1px dashed ${colors.lightGrey};
  padding-bottom: 1.75rem;

  h3 {
    font-weight: bold;
    font-size: 115%;
    margin-bottom: 0.75rem;
    line-height: 150%;
  }

  a {
    color: ${colors.grey};
    display: block;
    line-height: 150%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
`;
