import styled from 'styled-components';
import { colors } from '../../../styles/variables';

type BulletProps = {
  checked: boolean;
};

export const Wrapper = styled.span`
  margin-left: 1rem;
  display: flex;
`;

export const Bullet = styled.span<BulletProps>`
  width: 0.75rem;
  height: 0.75rem;
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  margin-right: 0.25rem;
  background-color: ${props =>
    props.checked ? colors.primary : 'transparent'};
`;
