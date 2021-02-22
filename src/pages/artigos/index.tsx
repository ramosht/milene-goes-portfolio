import { useEffect, useState } from 'react';
import Data from '../../config/data';
import Main from '../../template/Main';
import Title from '../../components/Title';
import MenuCases from '../../components/MenuCases';
import PageWithSidebar from '../../components/PageWithSidebar';
import Cases from '../../components/Cases';
import Case from '../../components/Case';
import PageWrapper from '../../components/PageWrapper';
import Head from 'next/head';

type Case = {
  id: string;
  title?: string;
  url?: string;
  image?: string;
};

const PageCases = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const items: Case[] = Data.artigos.map(item => ({
      id: item.title,
      title: item.title,
      url: item.link,
    }));
    setCases(items);
  }, []);

  return (
    <>
      <Head>
        <title>Milene Góes | Cases: Portais de Notícia</title>
        <meta
          name="description"
          content="Cases de trabalhos que realizei em veículos de comunicação e em todas as áreas em que atuei"
        />
      </Head>
      <Main current="artigos">
        <Title>Artigos</Title>
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
      </Main>
    </>
  );
};

export default PageCases;
