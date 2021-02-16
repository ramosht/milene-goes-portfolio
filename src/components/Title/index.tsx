import * as S from './styles';

type TitleProps = {
  children?: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Title;
