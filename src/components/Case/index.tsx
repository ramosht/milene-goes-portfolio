import * as S from './styles';

type ComponentProps = {
  children?: React.ReactNode;
};

const Component: React.FC<ComponentProps> = ({ children }) => {
  return <S.Case>{children}</S.Case>;
};

export default Component;
