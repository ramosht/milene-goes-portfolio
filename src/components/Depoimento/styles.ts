import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.grey};
  position: relative;
  padding: 1rem;
`;

export const Icon = styled(QuoteAltLeft)`
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: -1;
  opacity: 0.2;
`;

export const Text = styled.p``;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileName = styled.p`
  font-style: italic;
`;

export const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 0.5rem;
  display: inline-block;
`;
