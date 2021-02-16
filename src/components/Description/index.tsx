import * as S from './styles';

type DescriptionProps = {
  children?: React.ReactNode;
};

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Description;
