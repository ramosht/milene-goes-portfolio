import Link from 'next/link';
import { useState } from 'react';
import * as S from './styles';
import '@animated-burgers/burger-rotate/dist/styles.css';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import MediaQuery from 'react-responsive';
import { xl } from '../../../styles/breakpoints';

type ComponentProps = {
  current: string;
};

const Component: React.FC<ComponentProps> = ({ current }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <div className="container">
        <S.LogoWrapper>
          <Link href="/">
            <img src="/img/logo.svg" />
          </Link>
        </S.LogoWrapper>

        <MediaQuery maxWidth={xl}>
          <S.MenuButton
            isOpen={burgerIsOpen}
            onClick={() => setBurgerIsOpen(!burgerIsOpen)}
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
            <S.MenuItem isCurrent={current === 'interesses'}>
              <Link href="/interesses">Interesses</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'formacao'}>
              <Link href="/formacao">Formação</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'artigos'}>
              <Link href="/artigos">Artigos</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'jobs'}>
              <Link href="/cases/jornal-impresso">Trabalhos</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'premiacoes'}>
              <Link href="/premiacoes">Premiações</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'depoimentos'}>
              <Link href="/depoimentos">Depoimentos</Link>
            </S.MenuItem>
            <S.MenuItem isCurrent={current === 'contact'}>
              <Link href="/contato">Contatos</Link>
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
