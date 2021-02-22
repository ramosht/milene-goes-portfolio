import * as S from '../components/styles/home/indexStyle';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import Head from 'next/head';
import Main from '../template/Main';
import { colors } from '../../styles/variables';
import data from '../config/data';

export default function Home() {
  return (
    <>
      <Main current="home" isHome>
        <S.Wrapper>
          <div>
            <S.Title>
              Milene Góes{' '}
              <span>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/milene-góes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={22} color={colors.white} />
                </a>
              </span>
            </S.Title>
            <S.Description>Jornalista - MTB: 58631 / SP</S.Description>
          </div>

          <S.CurriculoButton>
            <a href={data.curriculoUri} target="_blank" rel="noreferrer">
              Baixar currículo completo
            </a>
          </S.CurriculoButton>
        </S.Wrapper>
      </Main>
    </>
  );
}
