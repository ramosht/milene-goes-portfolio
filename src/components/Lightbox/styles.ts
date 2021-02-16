import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  z-index: 100001;
  background: transparent;
  outline: none;
  cursor: pointer;
`;
