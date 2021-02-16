import * as S from './styles';

type ComponentProps = {
  children?: React.ReactNode;
};

const Component: React.FC<ComponentProps> = ({ children }) => {
  return <S.Cases>{children}</S.Cases>;
};

export default Component;
