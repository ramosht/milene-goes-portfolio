import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';

type ComponentProps = {
  children: React.ReactNode;
  current: string;
  isHome?: boolean;
};

const Component: React.FC<ComponentProps> = ({
  children,
  current,
  isHome = false,
}) => {
  return (
    <S.Wrapper isHome={isHome}>
      <Header current={current} />
      <S.Content className="container" isHome={isHome}>
        {children}
      </S.Content>
      <Footer />
    </S.Wrapper>
  );
};

export default Component;
