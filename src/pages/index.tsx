import * as S from '../components/styles/home/indexStyle';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';

import Main from '../template/Main';
import { colors } from '../../styles/variables';

export default function Home() {
  return (
    <Main current="home" isHome>
      <S.Wrapper>
        <div>
          <S.Title>
            Milene Góes{' '}
            <span>
              <a className="linkedin" href="#">
                <Linkedin size={22} color={colors.white} />
              </a>
            </span>
          </S.Title>
          <S.Description>Jornalista - MTB: 58631 / SP</S.Description>
        </div>

        <S.CurriculoButton>
          <a
            href="https://drive.google.com/file/d/1zoQh1VUr75SbwZI1-0wphCDWVC4EZsE3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Baixar currículo completo
          </a>
        </S.CurriculoButton>
      </S.Wrapper>
    </Main>
  );
}
