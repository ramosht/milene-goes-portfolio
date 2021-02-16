import styled from 'styled-components';
import { colors, fonts } from '../../../styles/variables';
/* @ts-ignore */
import Burger from '@animated-burgers/burger-rotate';
import { lg } from '../../../styles/breakpoints';

type MenuProps = {
  showMenu: boolean;
};

type MenuItemProps = {
  isCurrent: boolean;
};

export const Wrapper = styled.div`
  background-color: ${colors.background};
  height: 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: ${colors.primary};
  }

  .container {
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.h1`
  z-index: 9999;
  cursor: pointer;
`;

export const MenuButton = styled(Burger)`
  z-index: 1000;
`;

export const Logo = styled.img``;

export const Menu = styled.nav<MenuProps>`
  font-family: ${fonts.primary};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.background};
  transform: translatex(${props => (props.showMenu ? '0' : '-100%')});
  transition: transform 0.5s;
  flex-direction: column;
  z-index: 998;

  .socialMedia {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);

    svg {
      width: 2rem;
      color: ${colors.primary};
    }

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }

  @media screen and (min-width: ${lg}px) {
    position: relative;
    top: initial;
    bottom: initial;
    left: initial;
    right: initial;
    transform: initial;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .socialMedia {
      display: none;
    }
  }
`;

export const MenuItem = styled.li<MenuItemProps>`
  padding: 6px 8px;
  margin: 2px 0;
  font-size: 0.875rem;
  font-weight: ${props => (props.isCurrent ? '700' : '500')};

  a {
    text-decoration: none;
    color: ${colors.primary};
  }
`;
