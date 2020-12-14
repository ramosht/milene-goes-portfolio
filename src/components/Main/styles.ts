import styled from 'styled-components';

type WrapperProps = {
  backgroundColor: string;
};

export const Wrapper = styled.main<WrapperProps>`
  background-color: ${props => props.backgroundColor};
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const Illustration = styled.img`
  margin-top: 2rem;
  width: min(15rem, 100%);
`;
