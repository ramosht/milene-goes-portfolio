import { useEffect, useState } from 'react';
import Data from '../../../config/data';
import Main from '../../../template/Main';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import MenuCases from '../../../components/MenuCases';
import Cases from '../../../components/Cases';
import Case from '../../../components/Case';
import PageWrapper from '../../../components/PageWrapper';
import PageWithSidebar from '../../../components/PageWithSidebar';
import Head from 'next/head';

type Case = {
  id: string;
  title?: string;
  url?: string;
};

const PageCases = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const items: Case[] = Data.portaisDeNoticia.map(item => ({
      id: item.title,
      title: item.title,
      url: item.link,
    }));
    setCases(items);
  }, []);

  return (
    <>
      <Head>
        <title>Milene Góes | Cases: Textos para Blog</title>
        <meta
          name="description"
          content="Cases de trabalhos que realizei em veículos de comunicação e em todas as áreas em que atuei"
        />
      </Head>
      <Main current="jobs">
        <Title>Cases de trabalhos</Title>

        <Description>
          Os textos foram escritos Descriptionor mim para o blog da Faculdade de
          Engenharia de Sorocaba (Facens) em novembro de 2020. No entanto, como
          foi um job de 15 dias, o nome da autoria continuou como o da equipe do
          marketing da Facens.
        </Description>

        <PageWithSidebar>
          <MenuCases current="textos-para-blog" />

          <PageWrapper>
            <Cases>
              {cases &&
                cases.map((currentCase: Case) => (
                  <Case key={currentCase.id}>
                    <h3>{currentCase.title}</h3>
                    <a
                      href={currentCase.url || '#'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {currentCase.url}
                    </a>
                  </Case>
                ))}
            </Cases>
          </PageWrapper>
        </PageWithSidebar>
      </Main>
    </>
  );
};

export default PageCases;
