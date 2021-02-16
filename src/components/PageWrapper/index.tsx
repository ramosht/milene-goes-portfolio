import * as S from './styles';

type PageWrapperProps = {
  children?: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default PageWrapper;
