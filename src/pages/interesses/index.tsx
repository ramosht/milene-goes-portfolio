import { useEffect, useState } from 'react';
import * as S from '../../components/styles/interesses/styles';
import Main from '../../template/Main';
import Title from '../../components/Title';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';
import Data from '../../config/data';
import Head from 'next/head';

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
    <>
      <Head>
        <title>Milene Góes | Interesses</title>
        <meta
          name="description"
          content="Interesses pessoais e profissionais de acordo com o meu perfil"
        />
      </Head>
      <Main current="interesses">
        <Title>Interesses</Title>
        <PageWithSidebar>
          <SidebarMenu>
            <LinkSection to="/formacao">Formação</LinkSection>
            <LinkSection to="/sobre">Sobre</LinkSection>
            <LinkSection to="/depoimentos">Depoimentos</LinkSection>
            <LinkSection to="/interesses">Interesses</LinkSection>
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
    </>
  );
};

export default Sobre;
