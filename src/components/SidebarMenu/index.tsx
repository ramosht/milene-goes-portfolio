import { ReactNode, FC } from 'react';

import * as S from './styles';

type SidebarMenuProps = {
  children: ReactNode;
};

const SidebarMenu: FC<SidebarMenuProps> = ({ children }) => {
  return <S.LinksAbout>{children}</S.LinksAbout>;
};

export default SidebarMenu;
