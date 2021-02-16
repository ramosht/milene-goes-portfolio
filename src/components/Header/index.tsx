import Link from 'next/link';
import { useState, useCallback } from 'react';
import * as S from './styles';
import '@animated-burgers/burger-rotate/dist/styles.css';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import MediaQuery from 'react-responsive';
import { lg } from '../../../styles/breakpoints';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

type ComponentProps = {
  current: string;
};

const Component: React.FC<ComponentProps> = ({ current }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    const targetElement = document.querySelector('body');
    setBurgerIsOpen(!burgerIsOpen);

    if (burgerIsOpen) {
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }
  }, [burgerIsOpen]);

  return (
    <S.Wrapper>
      <div className="container">
        <S.LogoWrapper>
          <Link href="/">
            <img src="/img/logo.svg" />
          </Link>
        </S.LogoWrapper>

        <MediaQuery maxWidth={lg}>
          <S.MenuButton
            isOpen={burgerIsOpen}
            onClick={() => handleMenuToggle()}
          />
        </MediaQuery>

        <S.Menu showMenu={burgerIsOpen}>
          <ul>
            <S.MenuItem isCurrent={current === 'home'}>
              <Link href="/">Início</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'about'}>
              <Link href="/sobre">Sobre mim</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'experiencia'}>
              <Link href="/experiencia">Experiência</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'jobs'}>
              <Link href="/cases/assessoria-de-imprensa">Trabalhos</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'contact'}>
              <Link href="#">Contato</Link>
            </S.MenuItem>
          </ul>

          <div className="socialMedia">
            <a href="#" target="_blank">
              <LinkedinWithCircle />
              <span>Acesse meu LinkeIn</span>
            </a>
          </div>
        </S.Menu>
      </div>
    </S.Wrapper>
  );
};

export default Component;
