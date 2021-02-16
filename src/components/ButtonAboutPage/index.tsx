import { ReactNode } from 'react';
import * as S from './styles';

type ButtonAboutPage = {
  children: ReactNode;
};

const ButtonAboutPage: React.FC<ButtonAboutPage> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default ButtonAboutPage;
