import { useEffect, useState } from 'react';
import * as S from './styles';
import Main from '../../template/Main';
import Title from '../../components/Title';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';
import Data from '../../config/data';

type Interest = {
  id: string;
  title: string;
  image: string;
};

const Sobre = () => {
  const [interesses, setInteresses] = useState<Interest[]>([]);

  useEffect(() => {
    const items: Interest[] = Data.interesses.map(item => ({
      id: item.title,
      title: item.title,
      image: item.url,
    }));
    setInteresses(items);
  }, []);

  return (
    <Main current="about">
      <Title>Interesses</Title>
      <PageWithSidebar>
        <SidebarMenu>
          <LinkSection to="/formacao">Formação</LinkSection>
          <LinkSection to="/sobre">Quem sou eu?</LinkSection>
        </SidebarMenu>

        <PageWrapper>
          <S.Interests>
            {interesses.length > 0 &&
              interesses.map(interesseAtual => (
                <S.Interest key={interesseAtual.id}>
                  <img src={`${interesseAtual.image}`} />
                  <span>{interesseAtual.title}</span>
                </S.Interest>
              ))}
          </S.Interests>
        </PageWrapper>
      </PageWithSidebar>
    </Main>
  );
};

export default Sobre;
