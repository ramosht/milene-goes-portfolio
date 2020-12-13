import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Ícone de um átomo com o texto 'React Avançado' ao lado"
    />
    <S.Title>Next.js Boilerplate</S.Title>
    <S.Description>
      Typescript, ReactJS, Next.js and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de um homem sentado programando."
    />
  </S.Wrapper>
);

export default Main;
