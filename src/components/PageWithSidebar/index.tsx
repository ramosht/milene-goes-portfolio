import { ReactNode, FC } from 'react';

import * as S from './styles';

type PageWithSidebarProps = {
  children: ReactNode;
};

const PageWithSidebar: FC<PageWithSidebarProps> = ({ children }) => {
  return <S.WrapperContent>{children}</S.WrapperContent>;
};

export default PageWithSidebar;
