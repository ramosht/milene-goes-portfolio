import * as S from './indexStyle';
import Link from 'next/link';

import Main from '../template/Main';

export default function Home() {
  return (
    <Main current="home" isHome>
      <S.Wrapper>
        <div>
          <S.Title>Milene Góes</S.Title>
          <S.Description>Jornalista - MTB: 58631 / SP</S.Description>
        </div>

        <S.MenuHome>
          <S.MenuItem>
            <Link href="#">Item 01</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#">Item 02</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="#">Item 03</Link>
          </S.MenuItem>
        </S.MenuHome>
      </S.Wrapper>
    </Main>
  );
}
