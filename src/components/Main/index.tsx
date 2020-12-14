import * as S from './styles';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'Typescript, ReactJS, Next.js and Styled Components',
  wrapperBackground = '#06092b',
}) => (
  <S.Wrapper backgroundColor={wrapperBackground}>
    <S.Logo
      src="/img/logo.svg"
      alt="Ícone de um átomo com o texto 'React Avançado' ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de um homem sentado programando."
    />
  </S.Wrapper>
);

export default Main;
